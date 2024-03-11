const StickyContactInfo = () => {
  return (
    <div  id="about-us"  className="bg-white justify-around text-white py-2 z-50 hidden lg:flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="flex justify-between gap-14 w-full lg:w-auto mb-2 lg:mb-0">
        {/* left */}
        <div className="flex gap-4 items-center  ">
          <span className="bg-brown rounded-full px-2 ml-8 text-brown flex h-6 w-6 items-center justify-center">
            <i className="text-white fa-solid fa-phone"></i>
          </span>
          <p className="text-sm">
            <a href="tel:+919711287737">(+91) 97112 87737 &nbsp;&nbsp;</a>
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <span className="bg-white rounded-full h-6 w-6 px-2 text-brown flex items-center justify-center">
            <i className="text-brown fa-regular fa-envelope font-bold "></i>
          </span>
          <p className="text-sm">
            <a href="mailto:training@diac.co.in">
            training@diac.co.in &nbsp;&nbsp;
            </a>{" "}
        
          </p>
        </div>
       
        
      </div>
      {/* <div className="w-full lg:w-auto mb-2 lg:mb-0 flex gap-4 items-center ">
      <span className="bg-white rounded-full h-6 w-6 px-2 text-brown flex items-center justify-center">
           
            <i className="text-brown fa-solid fa-briefcase"></i>
          </span>
        <p className="text-sm">
          Working Days: Mon - Sat &nbsp;&nbsp;|&nbsp;&nbsp; Working Hours: 9:30 - 18:00 Hrs.
        </p>
      </div> */}
      <div className="flex gap-4">
        {/* right */}
        <div className="linkedin bg-white rounded-full w-6 h-6 flex items-center justify-center">
          <a
            href="https://www.linkedin.com/company/aztec-automation-solutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-blue-600 fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className=" mr-10 linkedin bg-white rounded-full w-6 h-6 flex items-center justify-center">
          <a
            href="https://x.com/AutomationAztec?s=20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="  text-black fa-brands fa-x-twitter font-bold "></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyContactInfo;
