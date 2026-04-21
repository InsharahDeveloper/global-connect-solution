import "../../App.css"
import Buttons from "./Buttons";

function WhyChoose() {
    return (
        <div className="why-choose px-6 md:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SECTION */}
            <div className="left px-2 md:px-10">
                <h1 className="max-[320px]:text-[1.4rem] max-[390px]:text-[1.8rem] text-[2.2rem] md:text-[3rem] font-[Montserrat] font-bold">
                    Why <span className="orange">Choose</span> Us
                </h1>

                <p className="text-gray-400 text-[1rem] md:text-[1.1rem] leading-6 mb-4 mt-4">
                    At Global Connect Solution, we focus on delivering reliable digital
                    services with professionalism, speed, and security. Our goal is to help
                    individuals and businesses connect globally without hassle.
                </p>

                <p className="text-gray-400 text-[1rem] md:text-[1.1rem] leading-6 mb-6">
                    From quick response times to dependable support, every service is designed
                    to create trust, save time, and provide long-term value for our clients.
                </p>

                <Buttons className=""/>
            </div>

            {/* RIGHT SECTION */}
            <div className="right grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="c-card p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition">
                    <h3 className="text-xl font-semibold mb-2">🔐 Trusted Service</h3>
                    <p className="text-sm text-gray-400">
                        Reliable solutions handled professionally with client satisfaction first.
                    </p>
                </div>

                <div className="c-card p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition">
                    <h3 className="text-xl font-semibold mb-2">⚡ Fast Support</h3>
                    <p className="text-sm text-gray-400">
                        Quick communication and efficient service whenever you need us.
                    </p>
                </div>

                <div className="c-card p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition">
                    <h3 className="text-xl font-semibold mb-2">🌍 Global Reach</h3>
                    <p className="text-sm text-gray-400">
                        Providing trusted digital solutions for clients worldwide.
                    </p>
                </div>

                <div className="c-card p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition">
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