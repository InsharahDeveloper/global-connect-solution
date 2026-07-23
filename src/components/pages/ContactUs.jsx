import { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import HowItWorks from "../sections/HowItWorks";
import FAQs from "../sections/FAQs";
import ContactUs from "../sections/ContactUs";
import Footer from "../sections/Footer";
import WaMe from "../sections/WaMe";
import CPageHeading from "../sections/CPageHeading";
import Newsletter from "../sections/Newsletter";
import HeaderCarousel from "../sections/HeaderCarousel";
import { Helmet } from "react-helmet-async";


function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Helmet>
  <title>
    Contact Us | Global Connect Solution
  </title>

  <meta
    name="description"
    content="Contact Global Connect Solution for Business Google Voice, VoIP, and communication solutions."
  />

  <link
    rel="canonical"
    href="https://globalconnectsolution.store/contact"
  />


  <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply contact us on WhatsApp and place your order in a few steps."
        }
      },
      {
        "@type": "Question",
        name: "Do you work with international clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we serve clients globally with secure and efficient service delivery."
        }
      },
      {
        "@type": "Question",
        name: "Why these services are used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "These services are commonly used for business communication, account verification, marketing, and managing multiple online identities safely."
        }
      },
      {
        "@type": "Question",
        name: "Which payment methods do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept secure payments through multiple trusted methods including mobile wallets and bank transfers."
        }
      }
    ]
  })}
</script>
</Helmet>
      <div className="main w-full">
        <HeaderCarousel />
        <Navbar setOpen={setOpen} />
        <div className="relative">
        <CPageHeading/>
        <Sidebar open={open} setOpen={setOpen} />
        </div>
        <FAQs />
        <ContactUs />
        <Newsletter />
        <Footer />
        <WaMe />
      </div>
    </>
  );
}

export default Contact;