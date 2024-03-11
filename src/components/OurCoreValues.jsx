const OurCoreValues = () => {
  return (
    <div>
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
          <div className="lg:flex-grow box-border md:w-1/2 lg:pr-24 text-gray-950 md:pr-16 flex flex-col md:items-start md:text-left mb-24 lg:ml-28 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950">
              Our <span className="text-brown">Core Values</span>{" "}
            </h1>
            {/* <hr className="block bg-brown rounded h-1 lg:w-16  w-24 -mt-3 mr-0 mb-7 lg:ml-1  sm:ml-2 border-none " /> */}

            <p className="mb-8  text-black font-semibold leading-relaxed text-left ">
              Our success is rooted in a set of our core values that define who
              we are and how we operate.
            </p>

            <p className="text-sm mt-0 text-black font-semibold mb-8 w-full">
              <span className="italic text-brown font-bold">Integrity</span>,{" "}
              <span className="italic text-brown font-bold">Ownership</span>,{" "}
              <span className="italic text-brown font-bold">Excellence</span>,{" "}
              <span className="italic text-brown font-bold">Commitment</span>{" "}
              and <span className="italic text-brown font-bold">Agility</span>{" "}
              form the foundation of our company’s culture.{" "}
              <br className="hidden lg:block" /> We believe in fostering strong
              and long-lasting business relationship with our clients by
              understanding their operational challenges and delivering
              customised automation solutions that offer great value
              proposition.
            </p>
            <div className="flex lg:flex-row md:flex-col"></div>
          </div>
          <div className="lg:max-w-lg lg:order-last order-first lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover   object-center mb-10  rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCoreValues;
