import Navbar from "../sections/Navbar"
import "../../App.css"
import Hero from "../sections/Hero"
import Sidebar from "../sections/Sidebar"
import { useState } from "react";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="home">
    <Navbar setOpen={setOpen}/>
    <Hero />
    <Sidebar open={open} setOpen={setOpen}/>
    </div>
    </>
  )
}

export default Home
