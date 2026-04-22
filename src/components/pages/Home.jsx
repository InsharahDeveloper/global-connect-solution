import Navbar from "../sections/Navbar"
import "../../App.css"
import Hero from "../sections/Hero"
import Sidebar from "../sections/Sidebar"
import Carousel from "../sections/Carousel"
import { useState } from "react";
import WhyChoose from "../sections/WhyChoose"
import Services from "../sections/Services"
import JoinUs from "../sections/JoinUs"
import HowItWorks from "../sections/HowItWorks"
import Testimonials from "../sections/Testimonials"
import FAQs from "../sections/FAQs"
import ContactUs from "../sections/ContactUs"

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="main">
    <div className="home relative">
    <Navbar setOpen={setOpen}/>
    <Hero />
    <Sidebar open={open} setOpen={setOpen}/>
    </div>
    <Carousel />
    <WhyChoose />
    <Services />
    <JoinUs />
    <HowItWorks />
    <Testimonials />
    <FAQs />
    {/* <ContactUs /> */}
    </div>
    </>
  )
}

export default Home
