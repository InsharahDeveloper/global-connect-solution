// Navbar.jsx
import "../../App.css";
import { Logs } from "lucide-react";
import Toggle from "./Toggle";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Navbar({ setOpen }) {
  return (
    <nav data-aos="zoom-in-down" className="w-[95%] navbar fixed top-1 max-[315px]:px-2 px-5 sm:px-6 md:px-8 lg:px-12 lg:w-[98%] py-2 lg:py-3 2xl:py-5 flex justify-between items-center">
      <Link to="/"><Logo/></Link>

      <div className="flex items-center gap-4 tg">
        <Toggle />

        <Logs
          className="w-8 h-8 cursor-pointer menu-icon hover:text-orange-400"
          onClick={() => setOpen(true)}
        />
      </div>
    </nav>
  );
}

export default Navbar;