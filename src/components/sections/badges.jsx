import { useEffect, useState , useRef } from "react";
import "../../App.css"

function Badges() {
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
    <div className="w-[50vh] sm:w-[35vw] text-blue  md:ml-10 grid count-div grid-cols-3 md:grid-cols-3 border-y-2 border-orange-300 rounded-sm  mt-10 gap-6 md:gap-2 lg:gap-1 lg:p-2 xl:px-5"  ref={sectionRef}>

          <div data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom" className="md:p-1 md:py-2 p-2 border-r-2 border-orange-300 counting text-center">
            <h3 className="text-3xl font-bold mb-2">
              {clients}+
            </h3>
            <p className="text-orange-400 font-[Inter] font-bold -mt-3">Happy Clients</p>
          </div>

          <div data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom" className="md:p-1 md:py-2 p-2   border-r-2 border-orange-300 counting text-center">
            <h3 className="text-3xl font-bold mb-2">
              {services}+
            </h3>
            <p className="text-orange-400 font-[Inter] font-bold -mt-3">Services</p>
          </div>

          <div data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom" className="md:p-1 md:py-2 p-2  counting text-center">
            <h3 className="text-3xl font-bold mb-2">
              {success}%
            </h3>
            <p className="text-orange-400 font-[Inter] font-bold -mt-3">Success Rate</p>
          </div>

        </div>
  );
}

export default Badges;