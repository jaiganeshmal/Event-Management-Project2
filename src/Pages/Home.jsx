import React, { lazy, Suspense } from "react";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/ServicesSection";
import HotelsSection from "../Components/HotelsSection";
import FullBanner from "../Components/FullBanner";
import EventHighlight from "../Components/EventHighlight";
import ContactForm from "../Components/ContactForm";
import InfoSection from "../Components/InfoSection";
import Loader from "../Components/Loader"; // ✅ loader component tum already bana chuke ho
import Achievements from "../Components/Achievements";
import FaqSection from "../Components/FaqSection";

// 🔹 Lazy imports (sirf heavy sections ko lazy load karna better hai)
const Testimonials = lazy(() => import("../Components/Testimonials"));
const Clients = lazy(() => import("../Components/Clients"));
const SocialGallery = lazy(() => import("../Components/SocialGallery"));

const Home = () => {
  return (
    <main>
      <HeroSection />
      {/* <AboutSection /> */}
      <ServicesSection />
      {/* <HotelsSection /> */}
      {/* <FullBanner /> */}
      {/* <EventHighlight /> */}

      {/* ✅ Suspense wrapper with Loader */}
      <Suspense fallback={<Loader />}>
        {/* <Testimonials /> */}
        <Clients />
        <SocialGallery />
      </Suspense>
      <Achievements />
      {/* <ContactForm /> */}
      <FaqSection />
      <InfoSection />
    </main>
  );
};

export default Home;
