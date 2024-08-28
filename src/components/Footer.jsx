/* eslint-disable react/no-unescaped-entities */

import { FaFacebook, FaFacebookF } from "react-icons/fa"
import { logo } from "../constants/data"
import Button from "./ui/Button"
import { FaInstagram, FaTwitter } from "react-icons/fa6"

const Footer = () => {
    return (
        <section className="relative mt-80">
            <div className="flex items-center justify-between w-[80%] bg-white shadow-xl rounded-lg p-12 mx-auto absolute left-[50%] -translate-x-[50%] bottom-[95%]">
                <div className="flex flex-col gap-2">
                    <h3 className="text-4xl font-semibold text-app_text">Subscribe Now for <br />Get Special Features!</h3>
                    <p>Let's subscribe with us and find the fun.</p>
                </div>
                <Button title={"Subscribe Now"} className={"bg-app_red rounded-lg text-white shadow-2xl shadow-app_red w-fit py-4 px-24"} />
            </div>
            <div className="bg-[#F8F8F8] p-10">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-1">
                            <img src={logo} />
                            <span className="font-semibold">LaslesVPN</span>
                        </div>
                        <p><strong>LaslesVPN</strong> is a private virtual network that <br />has unique features and has high security.</p>
                        <div className="flex items-center gap-4">
                            <span className="bg-white shadow-2xl size-7 rounded-full grid place-items-center"><FaFacebookF /></span>
                            <span className="bg-white shadow-2xl size-7 rounded-full grid place-items-center"><FaInstagram /></span>
                            <span className="bg-white shadow-2xl size-7 rounded-full grid place-items-center"><FaTwitter /></span>
                        </div>
                    </div>
                    <div className="flex justify-evenly">
                        <div className="flex flex-col gap-4">
                            <span><strong>Product</strong></span>
                            {
                                ["Download", "Pricing", "Locations", "Server", "Countries", "Blog",].map((item) => {
                                    return <span key={item}>{item}</span>
                                })
                            }
                        </div>
                        <div className="flex flex-col gap-4">
                            <span><strong>Engage</strong></span>
                            {
                                ["LaslesVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"].map((item) => {
                                    return <span key={item}>{item}</span>
                                })
                            }
                        </div>
                        <div className="flex flex-col gap-4">
                            <span><strong>Earn Money</strong></span>
                            {
                                ["Affiliate", "Become Partner"].map((item) => {
                                    return <span key={item}>{item}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
