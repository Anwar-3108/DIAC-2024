// import coreObjective from "../assets/images/coreObjective.jpg";
import { motion } from "framer-motion";
const WhomeDoWeServe2 = () => {
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
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
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
                WHOME <span className="text-brown"> DO WE SERVE</span>
                <br className="hidden lg:inline-block text-white " />
                {/* Dummy text here */}
              </h1>
              <motion.p
                className="lg:mb-8 sm:mb-2 lg:text-sm pl-3 lg:mr-12 leading-relaxed text-gray-950 text-left sm:text-left md:text-left lg:text-left"
                variants={textVariants}
              >
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores cupiditate quae dolor aspernatur incidunt libero magni repudiandae labore laboriosam ipsa dolorum soluta velit eaque, repellendus aliquid alias, atque recusandae.
              </motion.p>
              <br className="lg:hidden md:block sm:block" />

              <motion.p
                className=" pl-3 lg:text-sm lg:-mt-6 md:-mt-1 sm:-mt-10 lg:mr-16 leading-relaxed text-gray-950 text-left sm:text-left md:text-left lg:text-left"
                variants={textVariants}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus voluptatum illum velit earum neque aliquid blanditiis quibusdam, eligendi quidem numquam hic veritatis quam consequuntur, quis laudantium aspernatur soluta modi est ducimus tenetur. Dolorum amet reiciendis perspiciatis incidunt fuga veritatis vel. Error incidunt molestiae fugiat vel voluptatem impedit facilis suscipit sequi.
              </motion.p>
              <br className="lg:hidden md:block sm:block" />
              <motion.p
                className=" pl-3 lg:text-sm lg:mt-2 lg:mr-16 leading-relaxed text-gray-950 text-left sm:text-left md:text-left lg:text-left"
                variants={textVariants}
              >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus voluptas dolore quam praesentium voluptatem voluptate deserunt cum nostrum dolorum nihil eos eius fuga omnis, aliquid ullam natus sint, sit accusamus aperiam nulla labore quidem. Itaque accusantium, expedita tempore, saepe inventore molestias consequuntur deserunt, facilis in voluptatem debitis! Dolores, aperiam eligendi.
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

export default WhomeDoWeServe2;
