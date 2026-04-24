import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import "../../App.css";

function FAQs() {
  const [open, setOpen] = useState(null);
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

  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Simply contact us on WhatsApp and place your order in a few steps.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, we serve clients globally with secure and efficient service delivery.",
    },
    {
      question: "Why these services are used?",
      answer:
        "These services are commonly used for business communication, account verification, marketing, and managing multiple online identities safely.",
    },
    {
      question: "Which payment methods do you accept?",
      answer:
        "We accept secure payments through multiple trusted methods including mobile wallets and bank transfers.",
    },
  ];

  return (
    <section className="w-full py-16 FAQ px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden relative">

      <div className="glow absolute top-0 left-0 w-[200px] h-[200px] bg-orange-400/20 blur-[130px] rounded-full  hidden sm:block"></div>
      <div className="glow absolute bottom-0 right-0 w-[200px] h-[100px] bg-orange-400/20 blur-[130px] rounded-full"></div>

      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">

        {/* FAQ Side */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div key={index} className="overflow-hidden">

                {/* Question */}
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className={`w-full question flex rounded-xl justify-between items-center text-left px-6 py-5 transition-all duration-300
                  
                  ${isOpen
                      ? darkMode
                        ? "bg-[#eff6ff] text-blue"
                        : "bg-[#083055] text-white"
                      : darkMode
                        ? "bg-[#f97316] text-white"
                        : "bg-orange-500 text-white"
                    }`}
                >
                  <h3 className="font-semibold text-base md:text-lg">
                    {item.question}
                  </h3>

                  <span className="text-white">
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-6 transition-all duration-500 overflow-hidden mt-3 rounded-xl 2xl:text-[2rem]
                  
                  ${isOpen
                      ? `max-h-50 p-4 border ${darkMode
                        ? "bg-white/2 border-2 border-gray-600 text-gray-300"
                        : "bg-[[#eff6ff]] border-2 border-gray-300 text-gray-400"
                      }`
                      : "max-h-0 p-0 border-0"
                    }`}
                >
                  <p className="leading-7 text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <p data-aos="zoom-in" className="text-orange-400 uppercase tracking-[4px] font-bold mb-1 2xl:text-3xl">
            FAQs
          </p>

          <h2 data-aos="fade-left" className="text-3xl md:text-5xl font-bold 2xl:text-6xl">
            Frequently Asked <span className="orange">Questions</span>
          </h2>

          <p data-aos="fade-up" className="text-gray-400 mt-4 leading-7 2xl:text-2xl 2xl:leading-9">
            Find quick answers about our premium digital services, delivery
            process, warranties, and support.
          </p>
        </div>

      </div>
    </section>
  );
}

export default FAQs;