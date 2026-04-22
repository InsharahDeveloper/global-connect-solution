// Logo.jsx
import lightlogo from "../../assets/herosection/light_logo.png";
import darklogo from "../../assets/herosection/logo.png";

import { useEffect, useState } from "react";

function Logo() {
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
    <div className="flex items-center gap-3 max-[380px]:gap-1">
      <img
        src={darkMode ? darklogo : lightlogo}
        alt="logo"
        className="w-12 sm:w-14"
      />

      <h2 className="font-semibold text-sm sm:text-lg lg:text-xl">
        Global <span className="orange">Connect</span> Solution
      </h2>
    </div>
  );
}

export default Logo;