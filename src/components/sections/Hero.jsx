import "../../App.css";
import lightImg from "../../assets/herosection/1776432613739.jpg";
import darkImg from "../../assets/herosection/dark-global.png";

import Hero_Text from "./Hero_Text";
import Anime_elements from "./Anime_Elements";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Hero() {
  const boxRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    gsap.to(boxRef.current, {
      rotation: "+=360",
      duration: 50,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  // Check body class dark-theme
  useEffect(() => {
    const checkTheme = () => {
      const dark = document.body.classList.contains("dark-theme");
      setIsDark(dark);
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
    <div className="hero p-0 w-[90vw] flex ">
      {!isDark && <Anime_elements />}
      <Hero_Text/>
      <div className="globe w-[90vw] mr-0 mt-10 md:mt-0 md:mr-20 flex items-center justify-center md:w-[25%] lg:w-[30%] xl:w-[36%]">
      <img
        ref={boxRef}
        src={isDark ? darkImg : lightImg}
        alt="hero"
        className="w-[80%] gl-img md:w-[100%]"
      />
      </div>
    </div>
  );
}

export default Hero;