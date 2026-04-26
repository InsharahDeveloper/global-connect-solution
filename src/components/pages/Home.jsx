import { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Sidebar from "../sections/Sidebar";
import Carousel from "../sections/Carousel";
import WhyChoose from "../sections/WhyChoose";
import Services from "../sections/Services";
import JoinUs from "../sections/JoinUs";
import HowItWorks from "../sections/HowItWorks";
import Testimonials from "../sections/Testimonials";
import FAQs from "../sections/FAQs";
import ContactUs from "../sections/ContactUs";
import Footer from "../sections/Footer";
import WaMe from "../sections/WaMe";
import FeedbackForm from "../sections/FeedBackForm";
import FeedbackList from "../sections/FeedBackShow";


function Home() {
  const [open, setOpen] = useState(false);

  // 👇 ref for services section
  const servicesRef = useRef(null);

  // 👇 scroll function
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="main w-full">
        <div className="home relative">
          <Navbar setOpen={setOpen} />
          
          {/* 👇 pass function to Hero */}
         <Hero scrollToServices={scrollToServices} />

          <Sidebar open={open} setOpen={setOpen} />
        </div>

        <Carousel />
        <WhyChoose scrollToServices={scrollToServices}/>

        {/* 👇 attach ref here */}
        <div ref={servicesRef}>
  <Services />
</div>

        <JoinUs />
        <HowItWorks />
        <Testimonials />
        <FeedbackList />
        <FeedbackForm />
        <FAQs />
        <ContactUs />
        <Footer />
        <WaMe />
      </div>
    </>
  );
}

export default Home;