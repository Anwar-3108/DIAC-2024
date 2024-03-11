import comprehensiveAutomationSolutionImg from "../assets/images/pages/Home/comprehensive-automation-0.5.png";
// import comprehensiveAutomationSolutionImg  from "../assets/images/pages/Home/comprehensive-automation-solution-with-streach.png"

const ComprehensiveAutomationSolution = () => {
  return (
    <div>
      <section className="text-gray-600 body-font lg:block sm:block md:hidden mr-0">
        <div className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
          <div className="lg:flex-grow box-border md:w-1/2 lg:ml-28 lg:pr-24 text-gray-950 md:pr-16 flex flex-col md:items-start md:text-left mb-2 items-center p-4">
            <h1 className="title-font lg:p-20 p-0 sm:text-3xl text-2xl mb-2 font-medium text-gray-950  ">
              Comprehensive{" "}
              <span className="text-brown">Automation Solutions</span>{" "}
            </h1>
            {/* <hr className="block bg-brown rounded h-1 lg:w-16  w-24 -mt-3 mr-0 mb-7 lg:ml-1  sm:ml-2 border-none " /> */}

            <p className="mb-2 lg:p-20 p-0 text-black font-semibold leading-relaxed  lg:-mt-36 mt-6">
              Whether our customer is planning to automate its manufacturing
              process, enhance{" "}
              <span className="text-brown font-bold italic">
                {" "}
                operational efficiency
              </span>{" "}
              or implement{" "}
              <span className="text-brown font-bold italic">
                system integration
              </span>
              , <span className="italic">AZtec</span> <br /> has the required
              expertise to turn customer’s vision into a reality.
            </p>

            
            <p className="mb-2 lg:p-20 p-0 text-black font-semibold leading-relaxed lg:-mt-36 -mt-1 ">
              From conceptualisation to implementation, we offer solutions that
              empower our clients to thrive in the current digital era.
            </p>

            <div className="flex lg:flex-row md:flex-col"></div>
          </div>
          <div className="lg:max-w-lg lg:order-last order-first lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover   object-center mb-10  rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
              // src={`${comprehensiveAutomationSolutionImg}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveAutomationSolution;
