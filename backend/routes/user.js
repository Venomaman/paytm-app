const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

const signupSchema = zod.object({
    username:zod.string(),
    password:zod.string(),
    firstname:zod.string(),
    lastname:zod.string()

})

const updateSchema = zod.object({
    password:zod.string().optional(),
    firstname:zod.string().optional(),
    lastname:zod.string().optional()
})

const signinSchema = zod.object({
    username:zod.string().email(),
    password:zod.string()
})



// $or: [{ firstname: { "$regex": filter } }, { lastname: { "$regex": filter } }]:
// The $or operator specifies an OR condition in the query.
// It checks if either the firstname or the lastname matches the provided filter.
// The "$regex" part indicates that the comparison is done using a regular expression pattern.
//for code down below........>


router.get("/filter", async(req, res)=>{
    const filter = req.query.filter || "";
    const users = await User.find({
        $or:[{
            firstname:{
                "$regex":filter
            }
        },{
            lastname:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user:users.map(user =>({
            username:user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            _id:user._id
        }))
    })
})


router.post("/signup", async(req, res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.json({
            msg:"Email already taken / Incorrect inputs"
        })
    }
    const existingUser = User.findOne({
        username: body.username
    })

    if(existingUser._id){
        return res.json({
            msg:"Email already taken / Incorrect inputs"
        })
    }

    const dbUser = await User.create(body);
    const userId = dbUser._id

    //create new account....
    await Account.create({
        userId,
        balance: 1+Math.random()*10000
    })


    const token = jwt.sign({
        userId : dbUser._id
    }, JWT_SECRET)
    
    res.json({
        msg:"User created successfull",
        token:token
    })

})

router.post("/signin", async(req, res)=>{
    const {success} = signinSchema.safeParse(req.body)
    if(!success){
        res.status(411).json({
            msg:"Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username:req.body.username,
        password:req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId:user._id
        },JWT_SECRET)
        res.json({
            token: token
        })
        return;
    }
    res.status(411).json({
        msg:"Error while loggingin...."
    })
})

router .put("/", authMiddleware, async(req, res)=>{
    const {success} = updateSchema.safeParse(req.body)
    if(!success){
        res.status(411).json({
            msg: "Error while updating info"
        })
    }
    await User.updateOne({_id: req.userId}, req.body);

    res.json({
        msg: "Updated successfully"
    })



})

module.exports= router;