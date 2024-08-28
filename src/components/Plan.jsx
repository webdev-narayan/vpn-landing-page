/* eslint-disable react/no-unescaped-entities */
import { FaCheck } from "react-icons/fa"
import { plans } from "../constants/data"
import Button from "./ui/Button"


const Plan = () => {
    return (
        <section className="mt-24 flex flex-col gap-16">
            <div className="mx-auto w-fit">
                <h3 className="text-center mb-4 font-medium text-4xl text-app_text">Choose Your Plan</h3>
                <p className="text-center text-base text-app_text_light">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
            <div className="flex justify-center gap-10">
                {plans.map((item) => {
                    return <div key={item.name} className={`border rounded-md p-10 flex flex-col items-center justify-between ${item.border && "border-app_red"}`}>
                        <div className="flex-col flex gap-4 items-center">
                            <img src={item.sgv} className="" />
                            <h4 className="font-semibold text-[18px]">{item.name}</h4>
                            <div className="flex flex-col gap-2">
                                {item.features.map((li) => {
                                    return <span key={li} className="capitalize flex items-center gap-4 text-app_text_light"><FaCheck className="text-[#2FAB73] size-3" /> {li}</span>
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="font-semibold text-2xl capitalize">{item.price}{item.monthly && <span className="font-normal text-app_text_light">{"/mo"}</span>}</h4>
                            <Button title={"Select"} className={"border-app_red border rounded-full text-app_red" + (item.border && "border-none bg-app_red text-white")} />
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Plan
