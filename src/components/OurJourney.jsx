import React from "react";
import ourStory from "../assets/images/pages/Home/our-story-0.3.png";

const OurJourney = () => {
  return (
    <section className="text-gray-950 body-font lg:block sm:block md:hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-5 py-14 lg:gap-20 md:gap-20 sm:gap-10">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full  mb-10 lg:mb-0 p-4">
          <img
            loading="lazy"
            className="object-cover object-center rounded w-full"
            alt="Our Story"
            src={ourStory}
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 lg:ml-10 text-gray-950 p-4">
          <h1 className="title-font font-semibold text-3xl md:text-4xl mb-6">
            Our <span className="text-brown">Story</span>{" "}
          </h1>
          <Paragraph>
            Incorporated in 2015 by a team of professionals having rich and
            diversified industry experience in the field of{" "}
            <span className="text-brown font-bold italic">Process Automation Products and Solutions</span>.
          </Paragraph>
          <Paragraph>
            At <span className="italic">AZtec</span>, we recognize the dynamic landscape of today’s process
            industry and the ever-growing demand for increased efficiency and
            cost optimization through better process management/energy
            management to produce high-quality products at a competitive
            price. Over the years, we have positioned ourselves as a leading
            provider of comprehensive process automation solutions that
            empower our clients to optimize their manufacturing process and
            stay ahead of the prevailing industry standards.
          </Paragraph>
          <Paragraph>
            We develop confidence in our clients by recommending to improve
            their process using cutting-edge automation technologies and
            leveraging our team’s field experience, process engineering knowledge,
            proven technical skills, and professional ethics.
          </Paragraph>
          <Paragraph>
            We feel a sense of pride in having successfully executed various
            process automation solutions across major industry verticals
            earning a reputation for their high reliability, excellent
            operability, and easy maintainability.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

const Paragraph = ({ children }) => <p className="mb-4 leading-relaxed font-semibold">{children}</p>;

export default OurJourney;
