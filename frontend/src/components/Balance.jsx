export const Balance = ({ value }) => {
    return <div className="flex">
        <div className="font-bold text-lg text-white">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg text-white">
            Rs: {value}
        </div>
    </div>
}