import { FaStar } from "react-icons/fa"
import { testimonials } from "../constants/data"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"
import { useRef } from "react"


const Testimonial = () => {
    const containerRef = useRef(null);

    const handlClick = (direction) => {
        if (containerRef.current) {
            const { scrollLeft, clientWidth } = containerRef.current;
            const scrollAmount = clientWidth; // Adjust scroll amount as needed
            containerRef.current.scrollLeft = direction === 'next' ? scrollLeft + scrollAmount : scrollLeft - scrollAmount;
        }
    };

    return (
        <section className="my-28 ">
            <h3 className="text-app_text font-semibold text-4xl text-center mb-6">Trusted by Thousands of <br />Happy Customer</h3>
            <p className="text-center">These are the stories of our customers who have joined us with great <br />pleasure when using this crazy feature.</p>
            <div ref={containerRef} className="flex mt-8 w-full overflow-x-scroll gap-12 scroll-smooth">
                {testimonials.map((item, i) => {
                    return <div key={i} className="rounded-xl h-[230px] min-w-[400px] border-2 p-6">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                                <img src={item.image} className="size-[50px] object-cover rounded-full" />
                                <div>
                                    <h4 className="font-semibold text-[18px]">{item.name}</h4>
                                    <p className="text-[14px]">{item.location}</p>
                                </div>
                            </div>
                            <span className="flex items-center gap-2"><span className="font-semibold">{item.rating}</span> <FaStar className="text-yellow-500" /></span>
                        </div>
                        <p className="leading-8 font-semibold text-app_text_light mt-3">{item.content}</p>
                    </div>
                })}
            </div>
            <div className="flex justify-between items-center mt-8">
                <div className="flex gap-4">
                    <span className="w-11 h-4 rounded-full bg-app_red"></span>
                    <span className="size-4 rounded-full bg-gray-300"></span>
                    <span className="size-4 rounded-full bg-gray-300"></span>
                    <span className="size-4 rounded-full bg-gray-300"></span>

                </div>
                <div className="flex items-center gap-6 text-app_red">
                    <button onClick={() => handlClick("prev")} className="size-16 border-2 border-app_red rounded-full grid place-items-center active:bg-app_red active:text-white"><FaArrowLeftLong className="size-5" /></button>
                    <button onClick={() => handlClick("next")} className="size-16 border-2 border-app_red rounded-full grid place-items-center active:bg-app_red active:text-white"><FaArrowRightLong className="size-5" /></button>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
