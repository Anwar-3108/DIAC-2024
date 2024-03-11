import React from "react";
import "../styles/Common.css"
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-black p-10 black-bg"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="w-40 mb-6">
            <img
              src="https://automationtraining.diac.co.in/wp-content/uploads/2023/07/DIAC-Logo-1.png"
              alt=""
              
            />
          </div>
          <p className="text-sm leading-7">
            DIAC is a premier Industrial Automation and Robotics training
            institute in Delhi/NCR.
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Job Oriented Courses</div>
          <div className="flex flex-col gap-4">
            <a href="https://www.diac.co.in/courses/6-months-industrial-training/" className="text-sm hover:underline">
            Industrial Training
            </a>
            <a href="https://www.diac.co.in/courses/summerwinter-training/" className="text-sm hover:underline">
            Summer Training
            </a>
            <a href="https://www.diac.co.in/courses/plc-training/" className="text-sm hover:underline">
              {" "}
              PLC Training
            </a>
            <a href="https://www.diac.co.in/courses/scada-and-hmi-training/" className="text-sm hover:underline">
            SCADA & HMI Training
            </a>
            <a href="https://www.diac.co.in/courses/drives-motors/" className="text-sm hover:underline">
            Drives and Motor
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Professional Courses</div>
          <div className="flex flex-col gap-4">
            <a href="https://www.diac.co.in/courses/simotion-training/" className="text-sm hover:underline">
            Simotion Training
            </a>
            <a href="https://www.diac.co.in/courses/robotics-training/" className="text-sm hover:underline">
            Robotics Training
            </a>
            <a href="https://www.diac.co.in/courses/servo-motor-training/" className="text-sm hover:underline">
            Servo Motors Training
            </a>
            <a href="https://www.diac.co.in/courses/process-instrumentation/" className="text-sm hover:underline">
            {/* Aviva SCADA Training */}
            Process Instrumentation Training
            </a>
            <a href="https://www.diac.co.in/courses/panel-designing-autocad/" className="text-sm hover:underline">
            Panel Designing & AUTOCAD
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div>
          <i className="  mr-2 fa-solid fa-envelope"></i>
            <a href="mailto:training@diac.co.in" className="text-sm mb-4">
              training@diac.co.in
            </a>
          </div>
          <div>
          <i className="mr-2 fa-solid fa-phone"></i>
            <a href="tel:+919953489987" className="text-sm">
              +91 99534 89987
            </a>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/DIACTRAINING/" className="hover:scale-110 text-xl">
            <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/diactraining/" className="hover:scale-110 text-xl">
            <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@diactraining" className="hover:scale-110 text-xl">
            <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/school/diactraining/" className="hover:scale-110 text-xl">
            <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      {/* ==== */}
      <div>
      <div className="text-gray-400 align-middle justify-center text-center text-white body-font">
        <div className="container px-5 py-8 mx-auto  items-center text-center ">
          <p className="text-sm align-middle justify-center text-center">
            {" "}
            © 2024 DIAC.
            <br className="lg:hidden md:hidden " />
            &nbsp;All rights reserved.&nbsp;
            <br className="lg:hidden md:hidden " />
            <span>We respect your privacy.</span>
          </p>
        </div>
      </div>
    </div>

      {/* ==== */}
    </motion.div>
  );
};

export default Footer;
