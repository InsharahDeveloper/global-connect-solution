import { useEffect, useState, useRef } from "react";
import bg from "../../assets/herosection/org-bg.png"
import "../../App.css"

function JoinUs() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  const [clients, setClients] = useState(0);
  const [services, setServices] = useState(0);
  const [success, setSuccess] = useState(0);

  // 👇 Detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 Counter animation only when start = true
  useEffect(() => {
    if (!start) return;

    let c = 0;
    let s = 0;
    let p = 0;

    const interval = setInterval(() => {
      if (c < 1000) c += 20;
      if (s < 50) s += 1;
      if (p < 100) p += 2;

      setClients(c);
      setServices(s);
      setSuccess(p);

      if (c >= 1000 && s >= 50 && p >= 100) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[80vh] bg-cover bg-center bg-no-repeat grid items-center relative p-8 md:px-20 join-us"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 overlay"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 gap-8 items-center w-full">

        <div className="text-center pt-20">
          <p data-aos="zoom-in" className="text-orange-400 uppercase tracking-[4px] 2xl:text-3xl font-bold mb-1">
            Join Us
          </p>

          <h2 data-aos="fade-right" className="text-3xl md:text-5xl font-[Poppins] font-bold leading-tight mb-3 text-white 2xl:text-6xl">
            Join Us & Grow Together
          </h2>

          <p data-aos="fade-up" className="mb-8 md:max-w-[70%] mx-auto text-gray-200 font-[Inter] 2xl:text-2xl">
            Become part of a trusted network built on premium digital services,
            fast support, and long-term opportunities. Let’s grow your business
            with confidence.
          </p>

          <a data-aos="zoom-out-up" href="https:\\wa.me\+923000584969" target="_blank"><button className="px-7 py-2 rounded-full btn transition text-[1.1rem] 2xl:text-2xl 2xl:font-bold 2xl:py-4">
            <span className="relative">Chat On Whatsapp</span>
          </button></a>
        </div>
        <div className="grid count-div grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-25 xl:px-50">

          <div data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom" className="md:p-6 md:py-20 p-2 py-7 counting rounded-2xl text-center">
            <h3 className="text-6xl font-bold mb-2 text-gray-200">
              {clients}+
            </h3>
            <p className="text-xl ttt font-[Inter] font-bold">Happy Clients</p>
          </div>

          <div data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom" className="md:p-6 md:py-20 p-2 py-7 counting rounded-2xl text-center">
            <h3 className="text-6xl font-bold mb-2 text-gray-200">
              {services}+
            </h3>
            <p className="text-xl ttt font-[Inter] font-bold">Services</p>
          </div>

          <div data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom" className="md:p-6 md:py-20 p-2 py-7 counting rounded-2xl text-center">
            <h3 className="text-6xl font-bold mb-2 text-gray-200">
              {success}%
            </h3>
            <p className="text-xl ttt font-[Inter] font-bold">Success Rate</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default JoinUs;