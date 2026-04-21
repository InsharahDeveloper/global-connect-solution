import { Search, MessageCircle, CreditCard, CheckCircle } from "lucide-react";
import "../../App.css"
function HowItWorks() {
  const steps = [
    {
      id: "01",
      icon: <Search size={35} />,
      title: "Choose Service",
      desc: "Select the premium digital service that fits your business needs.",
    },
    {
      id: "02",
      icon: <MessageCircle size={35} />,
      title: "Contact Us",
      desc: "Reach out through WhatsApp or Telegram for quick support.",
    },
    {
      id: "03",
      icon: <CreditCard size={35} />,
      title: "Secure Payment",
      desc: "Make payment through trusted and easy payment methods.",
    },
    {
      id: "04",
      icon: <CheckCircle size={35} />,
      title: "Instant Delivery",
      desc: "Receive your service quickly with full support guarantee.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-20 text-white how-work">
      
      {/* Heading */}
      <div className="text-center max-w-7xl mx-auto mb-14">
        <p className="text-orange-400 uppercase tracking-[4px] js font-bold mb-1">
          How It Works
        </p>

        <h2 className="text-3xl md:text-5xl font-[Poppins] font-bold leading-tight mb-3 sec-title">
          Easy & <span className="orange">Fast</span>  Process
        </h2>

        <p className="text-gray-400 font-[Inter] mt-3 max-w-2xl mx-auto sec-desc">
          We make everything simple, secure, and fast so you can grow without delays.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-9xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group relative pt-15 c-card p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition"
          >
            {/* Step Number */}
            <span className="absolute top-4 right-5 text-5xl font-bold orangee">
              {step.id}
            </span>

            {/* Icon */}
            <div className="w-16 h-16 icon rounded-full bg-blue-600/10 text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition">
              {step.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold mb-3 text-blue tytl">{step.title}</h3>

            <p className="text-gray-400 leading-7 desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;