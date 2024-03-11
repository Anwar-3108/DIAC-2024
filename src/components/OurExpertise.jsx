import React from "react";
import ourExpertiseImg from "../assets/images/pages/Home/expertise-with-technology-0.1.png";

const OurExpertise = () => {
  return (
    <section className="text-gray-600 body-font lg:block sm:block md:hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 py-10">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full  mb-10 lg:mb-0 p-4 lg:order-last order-first">
          <img
            className="object-cover object-center rounded w-full"
            alt="Our Expertise"
            // src={ourExpertiseImg}
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 lg:ml-10 p-4 lg:order-first order-last lg:mt-[5%] lg:pr-[5%]">
  <h1 className="title-font lg:text-3xl md:text-2xl text-2xl  font-semibold text-gray-950 mb-4">
  <h3 className="h-4 bg-gray-200 rounded-full dark:bg-gray-700" style={{ width: '40%' }}></h3>
     
  </h1>
  <p className="mb-6 text-black font-semibold leading-relaxed">
  <ul className="mt-5 space-y-3">
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
      </ul> </p>
</div>

      </div>
    </section>
  );
};

export default OurExpertise;
