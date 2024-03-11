import { motion } from "framer-motion";
import customer_satisfaction_landscape_img from "../assets/images/pages/Home/customer-satisfaction-landscape-0.1.png";

const CustomerSatisfactionmd = () => {
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
          <div className="rounded-lg h-96 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              // src="https://dummyimage.com/1200x500"
              src={customer_satisfaction_landscape_img}
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
                CUSTOMER <span className="text-brown">SATISFACTION</span>
                <br className="hidden lg:inline-block text-white " />
                {/* Dummy text here */}
              </h1>
              <motion.p
                className="lg:mb-8 sm:mb-2 lg:text-sm pl-3 lg:mr-12 leading-relaxed text-gray-950 text-left sm:text-left md:text-left lg:text-left"
                variants={textVariants}
              >
                Customer satisfaction is at the heart of everything we do. We
                prioritize{" "}
                <span className="text-brown font-bold italic">
                  open communication
                </span>
                ,{" "}
                <span className="text-brown font-bold italic">
                  transparency
                </span>
                , and a{" "}
                <span className="text-brown font-bold italic">
                  collaborative approach
                </span>{" "}
                to ensure that our customers are not only satisfied but
                delighted with the outcome of the discussion. Our commitment to
                excellence in our business process has resulted in enduring
                business relationships and a{" "}
                <span className="text-brown font-bold italic">high rate</span>{" "}
                of{" "}
                <span className="text-brown font-bold italic">
                  customer retention
                </span>
                .
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSatisfactionmd;
