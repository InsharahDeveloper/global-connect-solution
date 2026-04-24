import "../../App.css"
import Buttons from "./Buttons";

function WhyChoose({scrollToServices}) {
    return (
        <div className="why-choose px-6 md:px-20 py-10 relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="glow absolute top-0 left-0 w-[300px] h-[300px] bg-orange-500/30 blur-[130px] rounded-full  hidden sm:block"></div>
            <div className="glow absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-400/20 blur-[130px] rounded-full"></div>


            {/* LEFT SECTION */}
            <div className="left px-2 md:px-10">
                <h1 data-aos="zoom-in-right" className="max-[320px]:text-[1.4rem] max-[390px]:text-[1.8rem] text-[2.2rem] md:text-[3rem] 2xl:text-6xl font-[Montserrat] font-bold">
                    Why <span className="orange">Choose</span> Us
                </h1>

                <p data-aos="zoom-out-right" className="text-gray-400 text-[1rem] md:text-[1.1rem] leading-6 mb-4 mt-4 2xl:text-2xl 2xl:leading-[25px]">
                    At Global Connect Solution, we focus on delivering reliable digital
                    services with professionalism, speed, and security. Our goal is to help
                    individuals and businesses connect globally without hassle.
                </p>

                <p data-aos="zoom-out-right" className="text-gray-400 text-[1rem] md:text-[1.1rem] leading-6 mb-6 2xl:text-2xl">
                    From quick response times to dependable support, every service is designed
                    to create trust, save time, and provide long-term value for our clients.
                </p>

                <Buttons scrollToServices={scrollToServices}/>
            </div>

            {/* RIGHT SECTION */}
            <div className="right grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div data-aos="flip-left" className="c-card p-6 rounded-2xl bg-white/20 backdrop-blur-md  shadow-lg ">
                    <h3 className="text-xl font-semibold mb-2">🔐 Trusted Service</h3>
                    <p className="text-sm text-gray-400">
                        Reliable solutions handled professionally with client satisfaction first.
                    </p>
                </div>

                <div data-aos="flip-right" className="c-card p-6 rounded-2xl bg-white/20 backdrop-blur-md shadow-lg ">
                    <h3 className="text-xl font-semibold mb-2">⚡ Fast Support</h3>
                    <p className="text-sm text-gray-400">
                        Quick communication and efficient service whenever you need us.
                    </p>
                </div>

                <div data-aos="flip-left" className="c-card p-6 rounded-2xl bg-white/20 backdrop-blur-md  shadow-lg ">
                    <h3 className="text-xl font-semibold mb-2">🌍 Global Reach</h3>
                    <p className="text-sm text-gray-400">
                        Providing trusted digital solutions for clients worldwide.
                    </p>
                </div>

                <div data-aos="flip-right" className="c-card p-6 rounded-2xl bg-white/20 backdrop-blur-md  shadow-lg ">
                    <h3 className="text-xl font-semibold mb-2">🤝 Dedicated Support</h3>
                    <p className="text-sm text-gray-400">
                        Building long-term relationships through real support.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WhyChoose;