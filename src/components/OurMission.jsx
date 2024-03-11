import "../styles/Common.css"
const OurMission = () => {
  return (
    <section className="  text-gray-400 body-font  brown-bg" >
    <div className="container px-5 py-10 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Our <span className="text-white">Mission</span></h1>
        {/* <hr className="block bg-brown h-1 lg:w-16 w-24 rounded mr-0 mb-7 lg:ml-1 sm:ml-2 border-none" /> */}
      </div>
      {/* ========= */}
      <div className="flex -mt-16 flex-wrap">
        <div className="xl:w-1/3 mb-2 md:w-1/2">
          <div className="h-full border-2 border-white border-opacity-75 p-6 mr-2 pb-8 rounded-lg" style={{borderTopLeftRadius: '60px', borderBottomRightRadius: '60px'}}>
            <div className="w-10 h-10 border-2 border-white inline-flex items-center justify-center rounded-full bg-gray-800 text-white mb-4">
              {/* Your icon or content here */}
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <p className="text-white leading-relaxed text-base">To offer the best technical solutions at a competitive price with best-in-class quality and on-time delivery.</p>
          </div>
        </div>
        <div className="xl:w-1/3 mb-2 md:w-1/2">
          <div className="h-full border-2 border-white border-opacity-75 p-6 mr-2 pb-8 rounded-lg" style={{borderTopLeftRadius: '60px', borderBottomRightRadius: '60px'}}>
            <div className="text-center w-10 h-10  border-2 border-whiteinline-flex items-center justify-center rounded-full bg-gray-800 text-white mb-4">
            <i className="mt-3  fa-solid fa-chart-line"></i>
            </div>
            <p className="text-white leading-relaxed text-base">To develop and continuously improve our business process cycle in line with the ever-changing needs of our customers.</p>
          </div>
        </div>
        <div className="xl:w-1/3 mb-2 md:w-1/2">
          <div className="h-full border-2 border-white border-opacity-75 p-6 mr-2 pb-8  rounded-lg" style={{borderTopLeftRadius: '60px', borderBottomRightRadius: '60px'}}>
            <div className="w-10 border-2 border-white h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-white mb-4">
            <i className="fa-solid fa-handshake"></i>
            </div>
            <p className="text-white leading-relaxed text-base">To become a &nbsp;‘<span className="text-white font-bold italic">preferred business partner</span>’ of the customers we serve, &nbsp;‘<span className="text-white font-bold italic">by choice</span>’</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default OurMission;
