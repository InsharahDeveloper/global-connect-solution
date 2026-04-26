import { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import PrivacyContent from "../sections/PrivacyContent";
import Footer from "../sections/Footer"
import Testimonials from "./../sections/Testimonials"
import SPageHeading from "../sections/SPageHeading";
import ServicesList from "../sections/ServicesList";



function ServicePage() {
    const [open, setOpen] = useState(false);

  return (
    <>
      <div className="home w-full relative">
        <Navbar setOpen={setOpen} />
        <SPageHeading/>

        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <ServicesList />
      <Footer />
    </>
  );
}

export default ServicePage;