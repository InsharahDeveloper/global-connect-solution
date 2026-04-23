import {
  Mail,
  Phone,
  Send,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import lightlogo from "../../assets/herosection/light_logo.png"
import darklogo from "../../assets/herosection/logo.png"
import { useEffect, useState } from "react";


function Footer() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setDarkMode(document.body.classList.contains("dark-theme"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="w-full bg-[#083055] footer text-white pt-16 pb-8 px-6 md:px-20 relative overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">

        {/* BRAND */}
        <div>
          <h1 data-aos="zoom-in-up" className="text-2xl font-bold flex gap-1 items-center justify-start">
            <div className="logo"><img src={darkMode ? darklogo : lightlogo} alt="" className="w-15" /></div>
            <div className="">Global <span className="text-orange-400">Connect </span>Solution</div>
          </h1>
          <p data-aos="zoom-in-up" className="text-gray-400 mt-4 leading-6">
            Your trusted partner for premium digital services. We provide fast,
            secure and reliable solutions for your business.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 data-aos="zoom-in-up" className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-gray-400">
            <li data-aos="zoom-in-up" className="hover:text-orange-400 cursor-pointer transition-all w-[fit-content] hover:ms-3">Home</li>
            <li data-aos="zoom-in-up" className="hover:text-orange-400 cursor-pointer transition-all w-[fit-content] hover:ms-3">Services</li>
            <li data-aos="zoom-in-up" className="hover:text-orange-400 cursor-pointer transition-all w-[fit-content] hover:ms-3">Clients Proof Gallery</li>
            <li data-aos="zoom-in-up" className="hover:text-orange-400 cursor-pointer transition-all w-[fit-content] hover:ms-3">Contact Us</li>
            <li data-aos="zoom-in-up" className="hover:text-orange-400 cursor-pointer transition-all w-[fit-content] hover:ms-3">Privacy Policy</li>
          </ul>
        </div>



        {/* CONTACT */}
        <div>
          <h2 data-aos="zoom-in-up" className="text-xl font-semibold mb-4">Contact</h2>

          <div className="space-y-4 text-gray-400">

            <div data-aos="zoom-in-up" className="flex items-center gap-3">
              <Phone size={18} className="text-orange-400" />
              <span>+92 300 0584969</span>
            </div>

            <div data-aos="zoom-in-up" className="flex items-center gap-3">
              <Mail size={18} className="text-orange-400" />
              <span>info.trustedGVStore786@gmail.com</span>
            </div>

            <div data-aos="zoom-in-up" className="flex items-center gap-3">
              <Send size={18} className="text-orange-400" />
              <span>@GCS_Communication</span>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between relative z-10">

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Global Connect Solutions. All rights reserved.
        </p>

        {/* Social */}
        <div className="flex flex-col items-center md:items-end gap-2 mt-4 md:mt-0">

          <p className="text-gray-400 text-sm">Follow Us</p>

          <div className="flex gap-4 icons">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/globalconnectsolution?igsh=OThxY3U4dG8xMjF4" target="_blank"
              className="p-2 rounded-full bg-orange-500/10 flex items-center justify-center w-10 h-10 hover:bg-orange-500 transition hover:scale-[1.2] hover:shadow-lg cursor-pointer"
            >
              <i className="ri-instagram-line text-2xl"></i>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/19g8i8fwvv/" target="_blank"
              className="p-2 rounded-full bg-orange-500/10 flex items-center justify-center w-10 h-10 hover:bg-orange-500 transition hover:scale-[1.2] hover:shadow-lg cursor-pointer"
            >
              <i class="ri-facebook-fill text-2xl"></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/global-connect-solution-4a3086210?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"
              className="p-2 rounded-full bg-orange-500/10 flex items-center justify-center w-10 h-10 hover:bg-orange-500 transition hover:scale-[1.2] hover:shadow-lg cursor-pointer"
            >
              <i class="ri-linkedin-fill text-2xl"></i>
            </a>

            {/* WhatsApp */}
            <a
              href="https://whatsapp.com/channel/0029VbC6klR3WHTWoV2tlz04" target="_blank"
              className="p-2 rounded-full bg-orange-500/10 flex items-center justify-center w-10 h-10 hover:bg-orange-500 transition hover:scale-[1.2] hover:shadow-lg cursor-pointer"
            >
              <i class="ri-whatsapp-line text-2xl"></i>
            </a>

          </div>
        </div>
      </div>

      {/* Back to top */}
      <div
        className="absolute bottom-6 right-6 bg-orange-500 p-3 rounded-full cursor-pointer hover:scale-110 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={18} />
      </div>

    </footer>
  );
}

export default Footer;