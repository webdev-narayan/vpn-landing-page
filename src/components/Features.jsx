import { FaCheck } from "react-icons/fa"
import { features, heroImg2 } from "../constants/data"

const Features = () => {
    return (
        <div className="flex mt-24 justify-between gap-52 items-center">
            <img src={heroImg2} alt="hero image" className="flex-1" />
            <div className="flex-1 flex flex-col gap-6">
                <span className="text-app_text font-semibold text-4xl">We Provide Many <br /> Features You Can Use</span>
                <p className="text-app_text_light text-base leading-loose">You can explore the features that we provide with fun and have their own functions each feature.</p>
                <div className="flex flex-col gap-4">
                    {features.map((item, i) => {
                        return <div key={i} className="flex items-center gap-4">
                            <span className="bg-[#2FAB73] p-2 rounded-full"><FaCheck className="text-white size-3" /></span>
                            <span className="text-app_text_light">{item}</span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Features
