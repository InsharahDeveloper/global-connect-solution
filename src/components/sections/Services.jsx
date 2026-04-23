import {
  Phone,
  Globe,
  Shield,
  Mail,
  MessageCircle,
  Users,
  CardSim,
  TvMinimalPlay,
  ArrowRight,
} from "lucide-react";
import "../../App.css"


function Services() {
  const services = [
    {
      icon: <Globe size={28} />,
      title: "Google Voice (GV)",
      desc: "Business GV, 2FA Gmail GV, and fully verified GV accounts with replacement warranty.",
    },
    {
      icon: <Mail size={28} />,
      title: "Gmail Accounts",
      desc: "USA & mixed country bulk Gmail accounts for business and personal use.",
    },
    {
      icon: <Phone size={28} />,
      title: "VoIP Services",
      desc: "TextNow, Talkatone, and TextPlus VoIP solutions for global communication.",
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Sideline Accounts",
      desc: "Web login sideline accounts with stable access and reliability.",
    },
    {
      icon: <Users size={28} />,
      title: "Social Media Accounts",
      desc: "WhatsApp, Telegram, Instagram, and Twitter accounts for business use.",
    },
    {
      icon: <TvMinimalPlay size={28} />,
      title: "YouTube Channels",
      desc: "Monetized and non-monetized YouTube channels ready for use.",
    },
    {
      icon: <CardSim size={28} />,
      title: "eSIM Services",
      desc: "CK eSIM solutions for fast and secure mobile connectivity.",
    }
  ];

  return (
    <section className="w-full py-16 px-6 md:px-20 service-div relative mt-[50px]">

      <div className="glow absolute top-0 left-0 w-[300px] h-[300px] bg-orange-400/20 blur-[130px] rounded-full  hidden sm:block"></div>
      <div className="glow absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-400/40 blur-[130px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 data-aos="fade-right" className="text-3xl md:text-5xl font-bold font-[Poppins] 2xl:text-6xl">
          Our <span className="orange">Services</span>
        </h2>

        <p data-aos="fade-up" className="text-gray-400 font-[Inter] mt-3 max-w-2xl mx-auto 2xl:text-2xl 2xl:max-w-5xl">
          Your trusted partner for premium digital accounts, Google Voice (GV),
          VoIP services, and global communication solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid mt-[80px] grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 justify-center ">
        {services.map((service, index) => (
          <div
            data-aos="flip-left"
            key={index}
            className="group c-card p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition"
          >
            {/* Icon */}
            <div className="text-orange-400 icon mb-4 group-hover:text-blue-900 transition duration-[1.6s]">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-md leading-relaxed mb-5">
              {service.desc}
            </p>

            {/* Explore Button */}
            <button className="py-1 px-3 rounded-[50px] border border-orange-400 text-orange-400 font-medium transition duration-300 hover:bg-orange-400 hover:text-white">
              Explore More
            </button>
          </div>
        ))}

        {/* Last Grid Card */}
        <div data-aos="flip-right" className="group sm:col-span-2 lg:col-span-1 see-more c-card p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold orange mb-3">See More</h3>

          <p className="text-gray-400 mb-5">
            Discover more premium digital solutions for your business growth.
          </p>

          <button className="flex items-center gap-2 py-2 px-5 rounded-full border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300">
            View All <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;