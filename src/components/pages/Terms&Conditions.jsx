import { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import PrivacyContent from "../sections/PrivacyContent";
import TCContent from "../sections/TCContent";
import HeaderCarousel from "../sections/HeaderCarousel";



function TermsAndConditions() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <HeaderCarousel />
            <Navbar setOpen={setOpen} />

      <div className="home w-full relative">
        <TCContent />
        <Navbar setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default TermsAndConditions;