import { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import PrivacyContent from "../sections/PrivacyContent";
import Footer from "../sections/Footer"
import Testimonials from "./../sections/Testimonials"
import SPageHeading from "../sections/SPageHeading";
import ServicesList from "../sections/ServicesList";
import HeaderCarousel from "../sections/HeaderCarousel";
import Badges from "../sections/badges";
import { Helmet } from "react-helmet-async";



function ServicePage() {
    const [open, setOpen] = useState(false);

  return (
    <>
    <Helmet>
      
<title>
Business Communication Services | Google Voice, VoIP & Toll-Free , Business Numbers
</title>

<meta
  name="description"
  content="Explore Business Google Voice, VoIP, Toll-Free Numbers, Virtual Phone Numbers, SMS Services and cloud communication solutions."
/>

  <link
    rel="canonical"
    href="https://globalconnectsolution.store/services"
  />
</Helmet>
      <div className="w-full relative">
        <HeaderCarousel />
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