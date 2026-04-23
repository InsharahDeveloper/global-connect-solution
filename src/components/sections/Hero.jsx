
import lightImg from "../../assets/herosection/new-globe.png";

import Hero_Text from "./Hero_Text";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Hero({ scrollToServices }) {
  const boxRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 50,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.body.classList.contains("dark-theme"));
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
    <section className="hero w-full max-[320px]:px-2 px-8 sm:px-20 lg:px-20 py-10 max-[913px]:px-0 relative">
      <div className="grid w-full grid-cols-1 min-[860px]:grid-cols-2 min-[911px]:grid-cols-1 min-[913px]:grid-cols-2 gap-10 items-center 2xl:gap-0">

        {/* {Glow} */}
        <div className="glow absolute top-0 left-0 w-[300px] h-[300px] bg-orange-500/40 blur-[130px] rounded-full  hidden sm:block"></div>
        <div className="glow absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-400/40 blur-[130px] rounded-full"></div>


        {/* Left Side */}
        <div className="relative">
          <Hero_Text scrollToServices={scrollToServices} />
        </div>

        {/* Right Side */}
        <div 
            data-aos="fade-left" className=" flex justify-center items-center max-[913px]:w-[80%] max-[913px]:mx-auto 2xl:w-[70%] 2xl:mx-auto">
          <img
            ref={boxRef}
            src={lightImg}
            alt="Globe"
            className="w-[75%] sm:w-[65%] lg:w-[80%] xl:w-[75%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;