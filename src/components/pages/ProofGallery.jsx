import { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import PrivacyContent from "../sections/PrivacyContent";
import Footer from "../sections/Footer"
import Testimonials from "./../sections/Testimonials"
import PPageHeading from "../sections/PPageHeading";
import FeedbackForm from "../sections/FeedBackForm";
import FeedbackList from "../sections/FeedBackShow";



function ClientProofGallery() {
    const [open, setOpen] = useState(false);

  return (
    <>
      <div className="home w-full relative">
        <Navbar setOpen={setOpen} />
        <PPageHeading/>

        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <Testimonials />
      <FeedbackList />
      <FeedbackForm />
      <Footer />
    </>
  );
}

export default ClientProofGallery;