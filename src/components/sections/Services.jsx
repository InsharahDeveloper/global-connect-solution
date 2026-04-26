import {
  Phone,
  Globe,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import "../../App.css";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: <Globe size={28} />,
      title: "Business Google Voice",
      desc: "Google Voice is a smart solution for professionals who need secure communication and privacy.",
    },
    {
      icon: <Phone size={28} />,
      title: "Zoom Phone",
      desc: "Zoom Phone offers cloud-based business calling and seamless team connectivity worldwide.",
    },
    {
      icon: <PhoneCall size={28} />,
      title: "Ring Central",
      desc: "RingCentral offers unified business calling, messaging, and reliable team communication worldwide.",
    },
    {
      icon: <PhoneCall size={28} />,
      title: "Dialer Solutions",
      desc: "Dialer Solutions offers smart auto-calling, lead management, and efficient business communication systems.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 relative service-div">

      {/* Glow */}
      <div className="glow absolute top-0 left-0 w-[300px] h-[300px] bg-orange-400/20 blur-[130px] rounded-full hidden sm:block"></div>
      <div className="glow absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-400/30 blur-[130px] rounded-full"></div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col-reverse lg:flex-row items-start gap-12">
        {/* LEFT SIDE - SERVICES */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-1">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="flip-left"
              className="group relative p-6 rounded-2xl c-card 
              bg-white/20 backdrop-blur-md
              shadow-[0_10px_30px_rgba(0,0,0,0.25)]
              transition-all duration-300
              hover:-translate-y-2 hover:scale-[1.03]
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              <div className="text-white mb-4 icon">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-200 leading-relaxed mb-4">
                {service.desc}
              </p>

              <button className="py-1 px-4 rounded-full border-2 text-white text-sm
                hover:bg-orange-400 hover:border-orange-400 transition">
                  <Link to="/services">
                Explore More
                </Link>
              </button>
            </div>
          ))}

        </div>

        {/* RIGHT SIDE - HEADING */}
        <div className="w-full self-center flex flex-col text-left order-2 lg:order-2">
          <h1 data-aos="zoom-in-right" className="max-[320px]:text-[1.4rem] max-[390px]:text-[1.8rem] text-[2.2rem] md:text-[3rem] 2xl:text-6xl font-[Montserrat] font-bold">

            Our <span className="text-orange-400">Services</span>
          </h1>

          <p
            data-aos="fade-up"
            className="text-gray-400 text-[1.1rem] mt-4 max-w-xl 2xl:text-2xl"
          >
            At Global Connect Solutions, we specialize in providing premium communication services designed for secure, reliable, and global connectivity. Our featured services include Google Voice, Zoom Phone, and RingCentral, built to help businesses communicate efficiently and grow without limits.
          </p>
          <p
            data-aos="fade-up"
            className="text-gray-400 text-[1.1rem] mt-4 max-w-xl 2xl:text-2xl"
          >
            Whether you are managing teams, running a business, or upgrading your communication system, our solutions are scalable, affordable, and future-ready. Alongside these featured services, we offer a wide range of additional digital solutions to support your business growth.
          </p>


          {/* SEE MORE CARD  */}
          <Link
            to="/services"
            data-aos="flip-right"
            className="group mt-8 c-card w-[fit-content] rounded-full flex flex-col items-center justify-center text-center
            bg-white/20 backdrop-blur-md
            shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            hover:-translate-y-2 hover:scale-[1.03]
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
            transition-all duration-300"
          >
           <h3 className="text-xl font-bold px-4 py-2">See More</h3>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Services;