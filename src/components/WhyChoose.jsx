import why_choose_aztec_img from "../assets/images/pages/About/why-choose-aztec-0.1.png";
const WhyChoose = () => {
  return (
    <div>
    <section className="text-gray-950 px-2 body-font lg:block sm:block md:hidden ">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
            // src={our_vision_img}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center p-4">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950  -ml-40 md:-ml-0 lg:-ml-0 lg:p-16 p-0">
            Why Choose<span className="text-brown">DIAC ?</span>{" "}
          </h1>

          {/* 

          <hr className="block bg-brown h-1 lg:w-16 rounded  w-24 -mt-3 mr-0 mb-7 lg:ml-1  sm:ml-2 border-none " />
          
           */}

          <p className="mb-8 text-black font-bold leading-relaxed lg:p-16 p-0 lg:-mt-28 mt-6">
            In a highly competitive business environment, we strive to become
            the most preferred company by offering{" "}
            <span className="text-brown font-bold">SIMPLE</span> Automation
            Solutions for{" "}
            <span className="text-brown font-bold">COMPLEX</span> process
            applications through innovative and quality products with
            customers delight at the core of each business process that we
            follow.
          </p>

          {/*
           <div className="flex lg:flex-row md:flex-col">
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"></button>
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
            </button>
           </div>
           */}
        </div>
      </div>
    </section>
  </div>
  );
};

export default WhyChoose;
