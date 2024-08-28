import logoImage from "../assets/logo.svg"
import heroImage1 from "../assets/hero-1.svg"
import heroImage2 from "../assets/hero-2.svg"
import { FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaServer } from "react-icons/fa6";
import FreeSvg from "../assets/Free.svg"
import StandardSvg from "../assets/Standard.svg"
import PremiumSvg from "../assets/Premium.svg"
import map from "../assets/Huge Global.svg"
export const WorldMap = map;
export const navLinks = ['about', 'features', 'pricing', 'testimonials', 'help']
export const logo = logoImage;
export const heroImg1 = heroImage1;
export const heroImg2 = heroImage2;
export const heroCard = [
    {
        name: "users",
        value: "90",
        icon: FaUser
    },
    {
        name: "locations",
        value: "30",
        icon: IoLocationSharp
    },
    {
        name: "servers",
        value: "50",
        icon: FaServer
    },
]
export const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits."
]
export const plans = [
    {
        name: "Free Plan",
        features: [
            'unlimited bandwidth',
            'encrypted connection',
            'no traffic logs',
            'works on all devices'
        ],
        price: "free",
        monthly: false,
        sgv: FreeSvg,
        border: false
    },
    {
        name: "Standard Plan",
        features: [
            'unlimited bandwidth',
            'encrypted connection',
            'yes traffic logs',
            'works on all devices',
            'connect anywhere'
        ],
        price: "$9",
        monthly: true,
        sgv: StandardSvg,
        border: false
    },
    {
        name: "Premium Plan",
        features: [
            'unlimited bandwidth',
            'encrypted connection',
            'yes traffic logs',
            'works on all devices',
            'connect anywhere',
            'get new features'
        ],
        price: "$12",
        monthly: true,
        sgv: PremiumSvg,
        border: true
    },
]
export const testimonials = [
    {
        name: "John Doe",
        location: "New York",
        rating: 4.5,
        image: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptate? Numquam, corrupti deserunt in animi omnis."
    },
    {
        name: "Niraj Shetty",
        location: "Nepal",
        rating: 4.6,
        image: "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptate? Numquam, corrupti deserunt in animi omnis."
    },
    {
        name: "Ram Krishnan Reddy",
        location: "India",
        rating: 4.6,
        image: "https://www.slazzer.com/blog/wp-content/uploads/2022/11/Professional-Profile-Picture-1.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptate? Numquam, corrupti deserunt in animi omnis."
    },
    {
        name: "Ram Krishnan Iyyer",
        location: "India",
        rating: 4.6,
        image: "https://sb.kaleidousercontent.com/67418/1672x1018/6463a5af0d/screenshot-2022-05-24-at-15-22-28.png",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptate? Numquam, corrupti deserunt in animi omnis."
    },
]