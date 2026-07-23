import { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import PrivacyContent from "../sections/PrivacyContent";
import TCContent from "../sections/TCContent";
import HeaderCarousel from "../sections/HeaderCarousel";
import { Helmet } from "react-helmet-async";



function TermsAndConditions() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Helmet>
  <title>
    Terms & Conditions | Global Connect Solution
  </title>

  <meta
    name="description"
    content="Read the Terms & Conditions for using Global Connect Solution's website and communication services."
  />

  <link
    rel="canonical"
    href="https://globalconnectsolution.store/terms-conditions"
  />
</Helmet>
    <HeaderCarousel />
            <Navbar setOpen={setOpen} />

      <div className="home w-full relative">
        <TCContent />
        <Sidebar open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default TermsAndConditions;