export function InputBox({label, placeholder}){
    return<div>
        <div className="text-left text-md py-2 font-medium">
            {label}
        </div>
        <input placeholder= {placeholder} className="text-sm h-10 w-full px-2 py-1 border rounded border-slate-400"/>

    </div>
}