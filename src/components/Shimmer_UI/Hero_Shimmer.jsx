import React from "react";
// import Hero_Shimmer_Img from "../../assets/images/Shimmer_Img/Hero_Shimmer_Img.png"
const Hero_Shimmer = () => {
  return (
    <div className="main-hero bg-gray-950">
      <main className="lg:-top-6  flex flex-col md:flex-row">
        <div className="lg:w-1/2 p-4 lg:mt-12 md:w-1/2">
          <h1 className=" text-white title-font bg-white md:whitespace-nowrap  sm:text-4xl sm:text-left text-3xl mb-8 font-normal  lg:text-left lg:pl-1 md:pl-0 sm:pl-2 "></h1>
          <p className="text-white lg:ml-1 bg-white"></p>
          <div className="flex flex-wrap align-middle  justify-center">
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 bg-white">
              <h2 className="title-font font-medium text-3xl text-white"></h2>
              <p className="leading-relaxed lg:-ml-2 bg-white font-bold  lg:whitespace-nowrap "></p>
            </div>
            <div className="p-4 lg:pl-1 sm:w-1/2 lg:w-1/4 w-1/2 bg-white">
              <h2 className="title-font font-medium text-3xl text-white"></h2>
              <p className="leading-relaxed bg-white font-bold whitespace-nowrap "></p>
            </div>
            <div className="p-4  lg:pl-2 sm:w-1/2 lg:w-1/4 w-1/2 bg-white">
              <h2 className="title-font font-medium lg:pl-10 text-3xl text-white"></h2>
              <p className="leading-relaxed bg-white font-bold lg:whitespace-nowrap whitespace-nowrap "></p>
            </div>
            <div className="p-4 pl-10 sm:w-1/2 lg:w-1/4 w-1/2 bg-white">
              <h2 className="title-font font-medium text-3xl text-white bg-white"></h2>
              <p className="leading-relaxed  bg-white font-bold lg:whitespace-nowrap whitespace-nowrap "></p>
            </div>
          </div>
        </div>
        {/* SWIPER */}
      </main>
    </div>
  );
};

export default Hero_Shimmer;
