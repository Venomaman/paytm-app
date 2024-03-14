import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signup = ()=>{
    return <div className="bg-slate-900 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-slate-50 rounded-lg w-90 text-center h-max px-4">
                
                <Heading label = {"Sign up"} />
                <SubHeading label={"Enter your credentials to access your account!"}/> 
                <InputBox label={"First Name"} placeholder={"John"}/>
                <InputBox label={"Last Name"} placeholder={"Doe"}/>
                <InputBox label={"Email"} placeholder={"email@mail.com"}/>
                <InputBox label={"Password"} placeholder={"****"}/>
                <div className="pt-4">
                    <Button label={"Sign Up"}/>
                 </div> 
                 <ButtonWarning label={"Already have an account? "} buttonText={"Sign in"} to={"/signin"}/>
            </div>        
               
        </div>
   
    </div>
}