import {Link} from "react-router-dom";
export function ButtonWarning({label, buttonText, to}){
    return <div className="text-sm py-2 flex justify-center">
        <div>
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer text-slate-500" to={to}>
            {buttonText}
        </Link>


    </div>
}