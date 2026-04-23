import { Mail, Phone, Send, MessageCircle } from "lucide-react";
import "../../App.css";
import { useState } from "react";
import toast from "react-hot-toast";

function ContactUs() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // loading toast
    const loadingToast = toast.loading("Sending Message...");

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          message: message,
        }),
      });

      const data = await res.json();

      toast.dismiss(loadingToast);

      if (data.success) {
        toast.custom((t) => (
          <div
            className={`px-5 py-3 rounded-xl text-white bg-green-400 shadow-lg transition-all duration-500 ${t.visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
          >
            ✔︎ Message Sent Successfully
          </div>
        ));

        setUsername("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error();
      }

    } catch (error) {
      toast.dismiss(loadingToast);

      toast.custom((t) => (
        <div
          className={`px-5 py-3 rounded-xl text-white bg-red-500 shadow-lg transition-all duration-500 ${t.visible ? "opacity-100 scale-100" : "opacity-0 scale-10"
            }`}
        >
         ✖ Failed to Send Message
        </div>
      ));
    }

    setLoading(false);
  };


  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 cs relative">

      <div className="glow absolute top-0 left-0 w-[300px] h-[300px] bg-orange-500/30 blur-[130px] rounded-full  hidden sm:block"></div>
      <div className="glow absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-400/40 blur-[130px] rounded-full"></div>


      {/* Heading */}
      <div className="text-center mb-12">
        <h2 data-aos="fade-right" className="text-3xl sm:text-4xl md:text-5xl font-bold 2xl:text-6xl ">
          Contact <span className="orange">Us</span>
        </h2>
        <p data-aos="fade-up" className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto 2xl:text-2xl 2xl:max-w-5xl">
          Have questions or ready to place an order? Our support team is here to help you anytime.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start cs-grid">

        {/* Left Side Info */}
        <div className="rounded-2xl p-6 sm:p-8 space-y-6 ">
          <h3 data-aos="fade-right" className="text-2xl font-semibold orange 2xl:text-5xl">Get In Touch</h3>
          <p data-aos="fade-right" className="text-gray-400 leading-7 2xl:text-2xl">
            Reach out to us for pricing, support, bulk orders, or custom service requests.
          </p>

          <div className="space-y-5">

            <div data-aos="zoom-in" className="flex items-center gap-4 ptf">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                <Phone size={22} className="in" />
              </div>
              <div>
                <p className="text-sm text-gray-400 2xl:text-xl ptf-name">WhatsApp</p>
                <p className="text-white font-medium  text-blue 2xl:text-xl ptf-info">+92 300 0584969</p>
              </div>
            </div>

            <div data-aos="zoom-in" className="flex items-center gap-4 ptf">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                <Mail size={22} className="in" />
              </div>
              <div>
                <p className="text-sm text-gray-400 2xl:text-xl ptf-name">Email</p>
                <p className="text-white font-medium  text-blue 2xl:text-xl ptf-info">info.trustedGVStore786@gmail.com</p>
              </div>
            </div>

            <div data-aos="zoom-in" className="flex items-center gap-4 ptf">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                <Send size={22} className="in" />
              </div>
              <div>
                <p className="text-sm text-gray-400 2xl:text-xl ptf-name">Telegram</p>
                <p className="text-white font-medium  text-blue 2xl:text-xl ptf-info">@GCS_Communication</p>
              </div>
            </div>

          </div>

          <div data-aos="zoom-in" className="pt-4 chat-btn">
            <button className="w-full 2xl:text-2xl sm:w-auto relative overflow-hidden px-6 py-2 rounded-full bg-orange-400 transition text-white font-medium">
              <a href="https:wa.me/+923000584969" className=" flex items-center justify-center gap-2" target="_blank">
                <MessageCircle size={20} className="relative ic" />
                <span className="relative">Chat Now</span>
              </a>
            </button>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="rounded-2xl p-6 sm:p-8 ">
          <h3 data-aos="fade-right" className="text-2xl font-semibold orange mb-6 2xl:text-5xl">
            Send Message
          </h3>

          <form data-aos="zoom-out-up" className="space-y-6 mt-10" onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                required
                placeholder=" "
                className="peer w-full 2xl:text-2xl px-4 py-4 rounded-xl bg-transparent border border-gray-300 t-blue outline-none focus:border-orange-400"
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
              />

              <label className="absolute 2xl:top-8 2xl:text-2xl left-4 top-5 -translate-y-1/2 px-2 text-gray-400 transition-all duration-300 
      peer-focus:top-0 peer-focus:text-sm peer-focus:bg-orange-400 peer-focus:rounded-xl peer-focus:px-4 peer-focus:text-[#083055] peer-focus:py-1 peer-focus:bold peer-focus:2xl:text-xl 
      peer-valid:top-0 peer-valid:text-sm peer-valid:bg-orange-400 peer-valid:rounded-xl peer-valid:px-4 peer-valid:text-[#083055] peer-valid:py-1 peer-valid:bold peer-valid:2xl:text-xl ">
                Full Name
              </label>
            </div>
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                required
                placeholder=" "
                className="peer  2xl:text-2xl w-full px-4 py-4 rounded-xl bg-transparent border border-gray-300 t-blue outline-none focus:border-orange-400"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />

              <label
                className="absolute left-4 top-5 2xl:top-8 2xl:text-2xl  -translate-y-1/2 px-2 text-gray-400 transition-all duration-300
      
    peer-focus:top-0 
    peer-focus:text-sm 
    peer-focus:bg-orange-400 
    peer-focus:rounded-xl 
    peer-focus:px-4 
    peer-focus:text-[#083055] 
    peer-focus:py-1
    peer-focus:2xl:text-xl

    peer-[&:not(:placeholder-shown)]:top-0
    peer-[&:not(:placeholder-shown)]:text-sm
    peer-[&:not(:placeholder-shown)]:bg-orange-400
    peer-[&:not(:placeholder-shown)]:rounded-xl
    peer-[&:not(:placeholder-shown)]:px-4
    peer-[&:not(:placeholder-shown)]:text-[#083055]
    peer-[&:not(:placeholder-shown)]:py-1
    peer-[&:not(:placeholder-shown)]:2xl:text-xl"
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
                className="peer 2xl:text-2xl w-full px-4 py-4 rounded-xl bg-transparent border border-gray-300 t-blue outline-none resize-none focus:border-orange-400"
                value={message}
                onChange={(e) => { setMessage(e.target.value) }}
              ></textarea>

              <label className="absolute 2xl:top-8 2xl:text-2xl left-4 top-5 -translate-y-1/2 px-2 text-gray-400 transition-all duration-300 
      peer-focus:top-0 peer-focus:text-sm peer-focus:bg-orange-400 peer-focus:rounded-xl peer-focus:px-4 peer-focus:text-[#083055] peer-focus:py-1 peer-focus:bold peer-focus:2xl:text-xl
      peer-valid:top-0 peer-valid:text-sm peer-valid:bg-orange-400 peer-valid:rounded-xl peer-valid:px-4 peer-valid:text-[#083055] peer-valid:py-1 peer-valid:bold peer-valid:2xl:text-xl">
                Your Message
              </label>
            </div>
            <div className="chat-btn relative  overflow-hidden rounded-xl hover:text-[#eff6ff] cursor-pointer">
              <button
                className="w-full py-3 rounded-xl bg-orange-400 transition font-semibold"
                type="submit"
                disabled={loading}
              >
                <span className="relative 2xl:text-3xl">
                  {loading ? (
                    <span className="dots">Sending</span>
                  ) : (
                    "Submit Request"
                  )}
                </span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;