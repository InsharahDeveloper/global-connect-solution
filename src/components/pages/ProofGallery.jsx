import { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import PrivacyContent from "../sections/PrivacyContent";
import Footer from "../sections/Footer"
import Testimonials from "./../sections/Testimonials"
import PPageHeading from "../sections/PPageHeading";
import FeedbackForm from "../sections/FeedBackForm";
import FeedbackList from "../sections/FeedBackShow";
import HeaderCarousel from "../sections/HeaderCarousel";
import { Helmet } from "react-helmet-async";



function ClientProofGallery() {
    const [open, setOpen] = useState(false);

  return (
    <>
    <Helmet>
  <title>
    Client Success Stories | Global Connect Solution
  </title>

  <meta
    name="description"
    content="Read customer testimonials and client success stories for our Google Voice and VoIP services."
  />

  <link
    rel="canonical"
    href="https://globalconnectsolution.store/trust-wall"
  />
</Helmet>
      <div className="w-full relative">
        <HeaderCarousel />
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