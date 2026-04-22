// Toggle.jsx
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

function Toggle() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    const mode = !darkMode;
    setDarkMode(mode);
    document.body.classList.toggle("dark-theme", mode);
  };

  return (
    <>
    <div
      onClick={handleToggle}
      className="flex max-[421px]:hidden relative w-16 h-8 bg-gray-200 rounded-full cursor-pointer items-center px-1 tgl lg:mx-10 2xl:scale-[1.6]"
    >
      <Sun className=" w-4 h-4 text-orange-400" />
      <Moon className=" w-4 h-4 ml-auto text-blue" />

      <div
        className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
          darkMode ? "left-9" : "left-1"
        }`}
      ></div>
    </div>
      <div
        onClick={handleToggle}
        className="flex min-[421px]:hidden cursor-pointer bg-orange-400 p-1 rounded-full max-[370px]:mx-1 "
      >
        {darkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </div>
    </>
  );
}

export default Toggle;