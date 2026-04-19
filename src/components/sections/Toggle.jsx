import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import "../../App.css";

function Toggle() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    // toggle body class properly
    document.body.classList.toggle("dark-theme", newMode);

    // notify all components
    window.dispatchEvent(new Event("themeChange"));
  };

  return (
    <div className="toggle_div hidden sm:flex" onClick={handleToggle}>
      <div className="light">
        <Sun className="toggle" />
      </div>

      <div className="dark">
        <Moon className="toggle" />
      </div>

      <div className={darkMode ? "toggle-btn active" : "toggle-btn"}></div>
    </div>
  );
}

export default Toggle;