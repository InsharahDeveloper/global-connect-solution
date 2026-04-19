import "../../App.css"
import {Logs} from "lucide-react"
import Toggle from "./Toggle"
import Logo from "./Logo"

function Navbar({setOpen}) {
  return (
    <>
    <nav className="navbar mt-2 px-6 sm:px-8 h-18 min-[200px]:w-[94%] sm:mt-5 sm:h-20 md:h-25 sm:w-[96%]">
      <Logo/>
      <Toggle />
      <div className="menu flex items-center"><Logs className="menu_icon w-10 h-10" onClick={() => setOpen(true)}/></div>
    </nav>
    </>
  )
}

export default Navbar