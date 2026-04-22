import { Mail, Phone, Send, MessageCircle } from "lucide-react";
import "../../App.css";

function ContactUs() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 sc">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold sec-title 2xl:text-7xl">
          Contact <span className="orange">Us</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto 2xl:text-3xl 2xl:max-w-5xl">
          Have questions or ready to place an order? Our support team is here to help you anytime.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start 2xl:border-2">

        {/* Left Side Info */}
        <div className="rounded-2xl p-6 sm:p-8 space-y-6 2xl:border-2">
          <h3 className="text-2xl font-semibold orange">Get In Touch</h3>
          <p className="text-gray-400 leading-7">
            Reach out to us for pricing, support, bulk orders, or custom service requests.
          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400">WhatsApp</p>
                <p className="text-white font-medium  text-blue">+92 300 0584969</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium  text-blue">info.trustedGVStore786@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                <Send size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Telegram</p>
                <p className="text-white font-medium  text-blue">@GCS_Communication</p>
              </div>
            </div>

          </div>

          <div className="pt-4 chat-btn">
            <a href="https:wa.me/+923000584969" target="_blank"><button className="w-full sm:w-auto relative overflow-hidden px-6 py-2 rounded-full bg-orange-400 transition text-white font-medium flex items-center justify-center gap-2">
              <MessageCircle size={20} className="relative" />
              <span className="relative">Chat Now</span>
            </button>
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="rounded-2xl p-6 sm:p-8 2xl:border-2">
          <h3 className="text-2xl font-semibold orange mb-6">
            Send Message
          </h3>

          <form className="space-y-6">

            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                required
                placeholder=" "
                className="peer w-full px-4 py-4 rounded-xl bg-transparent border border-gray-300 t-blue outline-none focus:border-orange-400"
              />

              <label className="absolute left-4 top-5 -translate-y-1/2 px-2 text-gray-400 transition-all duration-300 
      peer-focus:top-0 peer-focus:text-sm peer-focus:bg-orange-400 peer-focus:rounded-xl peer-focus:px-4 peer-focus:text-[#083055] peer-focus:py-1 peer-focus:bold
      peer-valid:top-0 peer-valid:text-sm peer-valid:bg-orange-400 peer-valid:rounded-xl peer-valid:px-4 peer-valid:text-[#083055] peer-valid:py-1 peer-valid:bold">
                Full Name
              </label>
            </div>

            {/* Email */}
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                required
                placeholder=" "
                className="peer w-full px-4 py-4 rounded-xl bg-transparent border border-gray-300 t-blue outline-none focus:border-orange-400"
              />

              <label
                className="absolute left-4 top-5 -translate-y-1/2 px-2 text-gray-400 transition-all duration-300
      
    peer-focus:top-0 
    peer-focus:text-sm 
    peer-focus:bg-orange-400 
    peer-focus:rounded-xl 
    peer-focus:px-4 
    peer-focus:text-[#083055] 
    peer-focus:py-1

    peer-[&:not(:placeholder-shown)]:top-0
    peer-[&:not(:placeholder-shown)]:text-sm
    peer-[&:not(:placeholder-shown)]:bg-orange-400
    peer-[&:not(:placeholder-shown)]:rounded-xl
    peer-[&:not(:placeholder-shown)]:px-4
    peer-[&:not(:placeholder-shown)]:text-[#083055]
    peer-[&:not(:placeholder-shown)]:py-1"
              >
                Email Address
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="5"
                required
                placeholder=" "
                className="peer w-full px-4 py-4 rounded-xl bg-transparent border border-gray-300 t-blue outline-none resize-none focus:border-orange-400"
              ></textarea>

              <label className="absolute left-4 top-5 -translate-y-1/2 px-2 text-gray-400 transition-all duration-300 
      peer-focus:top-0 peer-focus:text-sm peer-focus:bg-orange-400 peer-focus:rounded-xl peer-focus:px-4 peer-focus:text-[#083055] peer-focus:py-1 peer-focus:bold
      peer-valid:top-0 peer-valid:text-sm peer-valid:bg-orange-400 peer-valid:rounded-xl peer-valid:px-4 peer-valid:text-[#083055] peer-valid:py-1 peer-valid:bold">
                Your Message
              </label>
            </div>
            <div className="chat-btn relative overflow-hidden rounded-xl hover:text-[#eff6ff] cursor-pointer">
              <button className="w-full py-3 rounded-xl bg-orange-400 transition font-semibold">
                <span className="relative">Submit Request</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;