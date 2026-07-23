import { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import PrivacyContent from "../sections/PrivacyContent";
import HeaderCarousel from "../sections/HeaderCarousel";
import { Helmet } from "react-helmet-async";



function PrivacyPolicy() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Helmet>
  <title>
    Privacy Policy | Global Connect Solution
  </title>

  <meta
    name="description"
    content="Read Global Connect Solution's Privacy Policy and understand how we collect, use, and protect your information."
  />

  <link
    rel="canonical"
    href="https://globalconnectsolution.store/privacy-policy"
  />
</Helmet>
    <HeaderCarousel />
        <Navbar setOpen={setOpen} />
      <div className="home w-full relative">
        <PrivacyContent />
        <Sidebar open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default PrivacyPolicy;