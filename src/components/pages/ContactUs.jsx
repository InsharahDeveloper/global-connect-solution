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


function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="main w-full">
        <div className="home relative">
        <CPageHeading />
        <Navbar setOpen={setOpen} />
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

export default Home;