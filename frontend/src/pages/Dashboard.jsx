import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard=()=>{
    return <div className="bg-slate-900 h-screen">
       <Appbar/>
       <div className="m-9">
         <Balance value={"100000"}/>
         <Users/>
       </div>
    </div>
}