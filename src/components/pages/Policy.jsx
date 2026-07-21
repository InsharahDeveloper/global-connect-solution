import { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import PrivacyContent from "../sections/PrivacyContent";
import HeaderCarousel from "../sections/HeaderCarousel";



function PrivacyPolicy() {
  const [open, setOpen] = useState(false);

  return (
    <>
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