const mongoose = require("mongoose");

mongoose.connect("ur mongodb string")

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    firstname: String,
    lastname:String
})

const accountSchema = new mongoose.Schema({
    userId:mongoose.Schema.Types.ObjectId,
    balance:Number
})

const User = mongoose.model("user", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
    User,
    Account
}
