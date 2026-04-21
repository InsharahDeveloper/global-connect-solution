import "../../App.css"
import {Logs} from "lucide-react"
import Toggle from "./Toggle"
import Logo from "./Logo"

function Navbar({setOpen}) {
  return (
    <>
    <nav className="navbar mt-2 px-6 sm:px-8 h-[10vh] min-[200px]:w-[94%] sm:mt-5 sm:h-[12vh] md:h-[12vh] sm:w-[96%]">
      <Logo/>
      <Toggle />
      <div className="menu flex items-center"><Logs className="menu_icon w-10 h-10" onClick={() => setOpen(true)}/></div>
    </nav>
    </>
  )
}

export default Navbar