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
import HeaderCarousel from "../sections/HeaderCarousel";
import PricingSection from "../sections/PricingSection";
import { Helmet } from "react-helmet-async";


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
    <Helmet>
    <title>
      Business Google Voice | Global Connect Solution
    </title>

    <meta
      name="description"
      content="Get Business Google Voice, VoIP Solutions, Toll-Free Numbers, and Virtual Phone Numbers."
    />

    <link
      rel="canonical"
      href="https://globalconnectsolution.store/"


    />



 <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Global Connect Solution",

    url: "https://globalconnectsolution.store/",

    logo: "./../assets/herosection/logo.png",

    description:
      "Global Connect Solution provides Business Google Voice, Zoom Phone, VoIP Solutions, Toll-Free Numbers, Virtual Phone Numbers, Business SMS , Social Accounts , Gmail Accounts and cloud communication services.",

    email: "contact@globalconnectsolution.store",

    telephone: "+923000584969",

    sameAs: [
      "https://www.facebook.com/profile.php?id=61591805276296",
      "https://www.instagram.com/gcs_solutions_official/",],

    contactPoint: {
      "@type": "ContactPoint",

      telephone: "+923000584969",

      contactType: "Customer Support",

      areaServed: "Worldwide",

      availableLanguage: [
        "English" , "Urdu" , "Hindi"
      ]
    }
  })}
</script>
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "Global Connect Solution",

    url: "https://globalconnectsolution.store/",

    inLanguage: "en",

    publisher: {
      "@type": "Organization",
      name: "Global Connect Solution"
    }
  })}
</script>
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",

    serviceType: "Business Communication Services",

    provider: {
      "@type": "Organization",
      name: "Global Connect Solution",
      url: "https://globalconnectsolution.store/"
    },

    areaServed: {
      "@type": "Place",
      name: "Worldwide"
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Communication Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Google Voice"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "VoIP Solutions"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Toll-Free Numbers"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Virtual Phone Numbers"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business SMS"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "eSIM Services"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dialer Solutions"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Accounts"
          }
        },        
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gmail Accounts"
          }
        },        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zoom Phone"
          }
        }
      ]
    }
  })}
</script>
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
        <div className="home relative">

          {/* 👇 pass function to Hero */}
          <Hero scrollToServices={scrollToServices} />

          <Sidebar open={open} setOpen={setOpen} />
        </div>

        <Carousel />

        <PricingSection />

        {/* 👇 attach ref here */}
        <div ref={servicesRef}>
          <Services />
        </div>
        <WhyChoose scrollToServices={scrollToServices} />

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