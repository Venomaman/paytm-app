import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin= ()=>{
    return <div className="bg-slate-900 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className=" bg-white w-80 text-center rounded-lg h-max p-2 px-4">
               <Heading label={"Sign in"}/>
               <SubHeading label={"Enter your credentials to access your account !"}/>
               <InputBox label={"Email"} placeholder={"email@mail.com"}/>
               <InputBox label={"password"} placeholder={"*****"}/>
               <div className="pt-4">
                <Button label={"Sign in"}/>
               </div>
               <ButtonWarning label={"Don't Have account? "} buttonText={"Sign up"} to={"/signup"}/>

            </div>
        </div>
    </div> 

}