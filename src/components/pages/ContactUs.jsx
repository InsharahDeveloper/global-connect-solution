import { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import HowItWorks from "../sections/HowItWorks";
import FAQs from "../sections/FAQs";
import ContactUs from "../sections/ContactUs";
import Footer from "../sections/Footer";
import WaMe from "../sections/WaMe";
import CPageHeading from "../sections/CPageHeading";
import Newsletter from "../sections/Newsletter";
import HeaderCarousel from "../sections/HeaderCarousel";


function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="main w-full">
        <HeaderCarousel />
        <Navbar setOpen={setOpen} />
        <div className="relative">
        <CPageHeading/>
        <Sidebar open={open} setOpen={setOpen} />
        </div>
        <FAQs />
        <ContactUs />
        <Newsletter />
        <Footer />
        <WaMe />
      </div>
    </>
  );
}

export default Contact;