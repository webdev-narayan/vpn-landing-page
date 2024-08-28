
import { heroImg1 } from '../constants/data';
import Navbar from './Navbar';
import Button from './ui/Button';
import HeroCard from './HeroCard';
const Hero = () => {
    return (
        <section className='w-full mx-auto flex flex-col gap-20 mt-16'>
            <Navbar />
            <div className='flex'>
                <div className='flex flex-col gap-4'>
                    <p className='text-[50px] font-semibold text-app_text'>Want anything to be <br />easy with <span className='font-bold'>LaslesVPN</span>.</p>
                    <p className='text-app_text_light'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                    <Button title={"Get Started"} className={"bg-app_red rounded-lg text-white shadow-2xl shadow-app_red w-fit py-4 px-24"} />
                </div>
                <img src={heroImg1} alt="" />
            </div>
            <HeroCard />
        </section>
    )
}

export default Hero
