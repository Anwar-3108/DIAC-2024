import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WhyChoose from "../../components/WhyChoose";
import OurVisionmd from "../../components/OurVisionmd";
import OurVision from "../../components/OurVision";
import OurMission from "../../components/OurMission";
import Contact from "../../components/Contact";
import WhoWeAre from "../../components/WhoWeAre";
import Who_We_Are_md from "../../components/Who_We_Are_md";
const AboutUs = () => {
  useEffect(() => {
    document.title = "DIAC | About Us";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <WhoWeAre />
      <Who_We_Are_md />
      <WhyChoose />
      <OurVision />
      <OurVisionmd />
      <OurMission />
      <Contact />
    </div>
  );
};

export default AboutUs;
