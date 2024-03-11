import React, { useEffect } from "react";
import Hero from "../components/Hero";
import OurExpertise from "../components/OurExpertise";
import OurCoreValuesHome from "../components/OurCoreValuesHome";
import OurExpertisemd from "../components/OurExpertisemd";
import OurCoreValuesHomemd from "../components/OurCoreValuesHomemd";
import OurClients from "../components/OurClients";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import OurAnimatedCoreValues from "../components/FramerAnimationComponent/OurAnimatedCoreValues";
import Offer_Cards from "../components/Offer_Cards";
import New_Offers from "../components/New_Offers";
import Top_Demand_Courses from "../components/Top_Demand_Courses";
import Stats from "../components/Stats";

const Home = () => {
  useEffect(() => {
    document.title = "DIAC | Home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Hero />
      <Stats/>
      <New_Offers/>
      <Offer_Cards/>
      <OurExpertise />
      <OurExpertisemd />
      <OurCoreValuesHome />
      <OurCoreValuesHomemd />
      <OurAnimatedCoreValues />
      <OurClients />
      <Top_Demand_Courses/>
      <Testimonials/>
      <Contact />
    </div>
  );
};

export default Home;
