import "./App.css";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./components/pages/Policy";

import TermsAndConditions from "./components/pages/Terms&Conditions"
import ClientProofGallery from "./components/pages/ProofGallery";
import ServicePage from "./components/pages/Services";

function App() {
useEffect(() => {
    if (document.getElementById("ai-sales-agent-embed")) return;

    const script = document.createElement("script");
    script.id = "ai-sales-agent-embed";
    script.src = "https://your-24-7-biz-pal.lovable.app/embed.js";
    script.async = true;

    script.onload = () => console.log("AI Sales Agent loaded");
    script.onerror = (e) => console.error("AI Sales Agent failed to load" , e);

    document.body.appendChild(script);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/trust-wall" element={<ClientProofGallery />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </>
  );
}

export default App;