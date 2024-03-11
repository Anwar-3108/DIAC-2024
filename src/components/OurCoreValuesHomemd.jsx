import { motion } from "framer-motion";
import core_values_landscape_img from "../assets/images/pages/Home/core-values-landscape-0.1.png";
const OurCoreValuesHomemd = () => {
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
              src={`${core_values_landscape_img}`}
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
                OUR <span className="text-brown"> CORE VALUES</span>
                <br className="hidden lg:inline-block text-white " />
                {/* Dummy text here */}
              </h1>
              <motion.p
                className="lg:mb-8 sm:mb-2 lg:text-sm pl-3 lg:mr-12 leading-relaxed text-gray-950 text-left sm:text-left md:text-left lg:text-left"
                variants={textVariants}
              >
                Our success is rooted in a set of core values that define who we
                are and how we operate.
              </motion.p>
              <br className="lg:hidden md:block sm:block" />

              <motion.p
                className=" pl-3 lg:text-sm lg:-mt-6 md:-mt-1 sm:-mt-10 lg:mr-16 leading-relaxed text-gray-950 text-left sm:text-left md:text-left lg:text-left"
                variants={textVariants}
              >
                <span className="text-brown font-bold italic">
                  Excellence
                </span>
                ,{" "}
                <span className="text-brown font-bold italic">
                  Commitment
                </span>
                ,{" "}
                <span className="text-brown font-bold italic">Ownership</span>
                ,{" "}
                <span className="text-brown font-bold italic">Integrity</span>
                , and{" "}
                <span className="text-brown font-bold italic">Agility</span>{" "}
                form the foundation of our company’s culture. We believe in
                fostering strong and long-lasting business relationships with
                our clients by understanding their operational challenges and
                delivering customized automation solutions that offer great
                value proposition.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoreValuesHomemd;
