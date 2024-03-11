import React from "react";
import { motion } from "framer-motion";
const Who_We_Are_md = () => {
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
  return (
    <section className="text-gray-950 body-font bg-white hidden lg:hidden sm:hidden md:block">
      <div className="container px-5 py-24 mx-auto flex flex-col items-center justify-center">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-8 justify-center ">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="sm:w-2/3 w-full text-center sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 max-w-3xl"
              style={{ maxWidth: "700px" }}
            >
              <h1 className="title-font sm:text-4xl sm:text-left text-3xl mb-4 font-medium text-gray-950 lg:text-left pl-4">
                Who <span className="text-brown"> we are ?</span>
                <br className="hidden lg:inline-block text-white " />
                {/* Dummy text here */}
              </h1>
              <motion.p
                className="lg:mb-8 sm:mb-2 lg:text-sm pl-3 lg:mr-12 leading-relaxed text-gray-950 text-left sm:text-left md:text-left lg:text-left"
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
                company, established with the major goal to provide
                comprehensive yet simple and easily implementable automation
                solutions. The idea was born to address the challenging process
                applications by utilising both - the knowledge of process
                know-how of our team and the cutting-edge technological
                products. It was also driven to meet the increasing need for
                automation in the process industry.
              </motion.p>
              <br className="lg:hidden md:block sm:block" />

              <motion.p
                className=" pl-3 lg:text-sm lg:-mt-6 md:-mt-1 sm:-mt-10 lg:mr-16 leading-relaxed text-gray-950 text-left sm:text-left md:text-left lg:text-left"
                variants={textVariants}
              >
                Incorporated in 2015 by a team of professionals having rich and
                diversified industry experience in the field of{" "}
                <span className="text-brown font-bold">
                  {" "}
                  Process Automation Products and Solutions{" "}
                </span>{" "}
                . At AZtec, we recognise the dynamic landscape of today’s
                process industry and the ever-growing demand for increased
                efficiency and cost optimisation through better{" "}
                <span className="text-brown font-bold italic">
                  {" "}
                  process management{" "}
                </span>{" "}
                /{" "}
                <span className="text-brown font-bold italic">
                  {" "}
                  energy management{" "}
                </span>{" "}
                to produce high-quality products at a competitive price. Over
                the years, we have positioned ourselves as a leading provider of
                comprehensive process automation solutions that empower our
                clients to optimise their manufacturing processes and stay ahead
                of the prevailing industry standards.
              </motion.p>
              <br className="lg:hidden md:block sm:block" />
              <motion.p
                className=" pl-3 lg:text-sm lg:mt-2 lg:mr-16 leading-relaxed text-gray-950 text-left sm:text-left md:text-left lg:text-left"
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
              <br className="lg:hidden md:block sm:block" />
              <motion.p
                className=" pl-3 lg:text-sm lg:mt-2 lg:mr-16 leading-relaxed text-gray-950 text-left sm:text-left md:text-left lg:text-left"
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
              {/* <br className="lg:hidden md:block sm:block" />
            <motion.p
              className=" pl-3 lg:text-sm lg:mt-2 lg:mr-16 leading-relaxed text-white text-left sm:text-left md:text-left lg:text-left"
              variants={textVariants}
            >
              We feel a sense of pride in having successfully executed various
              process automation solutions across major industry verticals
              earning a reputation for their high reliability, excellent
              operability and easy maintainability.
            </motion.p> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who_We_Are_md;
