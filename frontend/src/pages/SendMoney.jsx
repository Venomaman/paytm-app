import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"

export const SendMoney = () => {
    return <div class="flex justify-center h-screen bg-slate-900">
        <div className="h-full flex flex-col justify-center">
            <div
                class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div class="flex flex-col space-y-1.5 p-6">
                <h2 class="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div class="p-6">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
                    <span class="text-2xl text-white">A</span>
                    </div>
                    <h3 class="text-2xl font-semibold">Friend's Name</h3>
                </div>
                <div class="space-y-4">
                    <div class="space-y-2">

                    <InputBox label={"Amount (in Rs)"} placeholder={"Enter amount"}/>
                    </div>
                    <Button label={"Initiate Transfer"}/>
                </div>
                </div>
        </div>
      </div>
    </div>
}