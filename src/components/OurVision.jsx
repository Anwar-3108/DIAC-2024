import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/common.css";


const OurVision = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    document.title = "DIAC | About Us";
  }, []);
  return (
    <div>
      <section className="text-white body-font lg:px-14 px-4 justify-center align-middle lg:block sm:block md:hidden">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <motion.div
            className="lg:flex-grow mb-14  md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-start text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="title-font sm:text-4xl sm:text-left text-3xl mb-4 font-medium text-black lg:text-left pl-4">
              <span className="text-brown">Our{""} </span>Vision
              <br className="hidden lg:inline-block text-black " />
            </h1>
            {/* <hr className="block bg-white h-0.5 lg:w-20 rounded  w-14 -mt-2 mr-0 mb-7 lg:ml-5  ml-7 border-none " /> */}

            <motion.p
              className="lg:mb-8 sm:mb-2 lg:text-sm pl-3 lg:mr-12 leading-relaxed text-black text-left font-semibold sm:text-left md:text-left lg:text-left"
              variants={textVariants}
            >
              Welcome to{" "}
              <span className="text-brown font-bold">
                AZtec Automation Solutions
              </span>
              ,
              <br className="lg:hidden md:hidden sm:block" /> a{" "}
              <span className="text-brown font-bold italic">
                Process Automation
              </span>{" "}
              company, established with the major goal to provide comprehensive
              yet simple and easily implementable automation solutions. The idea
              was born to address the challenging process applications by
              utilising both - the knowledge of process know-how of our team and
              the cutting-edge technological products. It was also driven to
              meet the increasing need for automation in the process industry.
            </motion.p>
            <br className="lg:hidden md:hidden sm:block" />

            <motion.p
              className=" pl-3 lg:text-sm lg:-mt-6 md:-mt-6 sm:-mt-10 lg:mr-16 leading-relaxed text-black font-semibold text-left sm:text-left md:text-left lg:text-left"
              variants={textVariants}
            >
              Incorporated in 2015 by a team of professionals having rich and
              diversified industry experience in the field of{" "}
              <span className="text-brown font-bold">
                {" "}
                Process Automation Products and Solutions{" "}
              </span>{" "}
              . At AZtec, we recognise the dynamic landscape of today’s process
              industry and the ever-growing demand for increased efficiency and
              cost optimisation through better{" "}
              <span className="text-brown font-bold italic">
                {" "}
                process management{" "}
              </span>{" "}
              /{" "}
              <span className="text-brown font-bold italic">
                {" "}
                energy management{" "}
              </span>{" "}
              to produce high-quality products at a competitive price. Over the
              years, we have positioned ourselves as a leading provider of
              comprehensive process automation solutions that empower our
              clients to optimise their manufacturing processes and stay ahead
              of the prevailing industry standards.
            </motion.p>
            <br className="lg:hidden md:hidden sm:block" />

            <motion.p
              className=" pl-3 lg:text-sm lg:mt-2 lg:mr-16 leading-relaxed text-black font-semibold text-left sm:text-left md:text-left lg:text-left"
              variants={textVariants}
            >
              We develope confidence in our clients by recommending to improve
              their process using the cutting-edge automation technologies and
              leveraging our team’s{" "}
              <span className="text-brown font-bold italic">
                {" "}
                field experience
              </span>
              ,{" "}
              <span className="text-brown font-bold italic">
                {" "}
                process engineering knowledge
              </span>
              ,{" "}
              <span className="text-brown font-bold italic">
                {" "}
                proven technical skills
              </span>{" "}
              and{" "}
              <span className="text-brown font-bold italic">
                {" "}
                professional ethics
              </span>
              .
            </motion.p>
            <br className="lg:hidden md:hidden sm:block" />

            <motion.p
              className=" pl-3 lg:text-sm lg:mt-2 lg:mr-16 leading-relaxed text-black font-semibold text-left sm:text-left md:text-left lg:text-left"
              variants={textVariants}
            >
              We feel a sense of pride in having successfully executed various
              process automation solutions across major industry verticals
              earning a reputation for their{" "}
              <span className="text-brown font-bold italic">
                {" "}
                high reliability
              </span>
              ,{" "}
              <span className="text-brown font-bold italic">
                {" "}
                excellent operability{" "}
              </span>
              and{" "}
              <span className="text-brown font-bold italic">
                {" "}
                easy maintainability
              </span>
              .
            </motion.p>
          </motion.div>
          <div className="lg:max-w-lg lg:order-last order-first lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover   object-center mb-10  rounded"
              alt="hero"
              // src={who_we_are_img}
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVision;
