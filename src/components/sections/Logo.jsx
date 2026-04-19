import "../../App.css"
import lightlogo from "../../assets/herosection/light_logo.png";
import darklogo from "../../assets/herosection/logo.png";

import { useEffect, useState } from "react";

function Logo() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains("dark-theme");
      setDarkMode(isDark);
    };

    checkTheme(); // page load pe check

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="logo">
      <img src={darkMode ? darklogo : lightlogo} alt="logo" />

      <div className="logo_text font-[Poppins] -ml-2 text-base flex flex-col sm:flex-row sm:text-xl md:text-2xl xl:text-[2rem] xl:ml-2">
        Global <span className="orange -m-3 ml-4 sm:m-0">Connect</span> <span className="">Solution</span>
      </div>
    </div>
  );
}

export default Logo;