import { logo, navLinks } from "../constants/data"
import Button from "./ui/Button"

const Navbar = () => {
    return (
        <header className="w-full mx-auto">
            <nav className="text-app_text flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" />
                    <h3 className="font-semibold text-app_text text-[20px]">Lasles<span className="font-black">VPN</span></h3>
                </div>
                <div className="flex gap-10 text-app_text_light text-base">
                    {navLinks.map((item, i) => {
                        return <span key={i} className="capitalize cursor-pointer">{item}</span>
                    })}
                </div>
                <div>
                    <Button title={"Sign In"} />
                    <Button title={"Sign Up"} className={"text-app_red border border-app_red rounded-full"} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
