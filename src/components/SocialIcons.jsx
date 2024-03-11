const SocialIcons = () => {
  return (
    <div id="about" >
      <div className="flex pt-1 pb-1 brown-bg lg:hidden   justify-around">
        <div className="linkedin bg-white rounded-full w-6 h-6 text-center  ">
          <a
           href="tel:+919319018881"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <i className=" text-brown fa-solid fa-phone"></i>
          </a>
        </div>
        <div className="linkedin bg-white rounded-full w-6 h-6 text-center  ">
          <a
           href="mailto:info@aztec-automation.com" target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" text-brown fa-regular fa-envelope font-bold "></i>
          </a>
        </div>
        <div className="linkedin bg-white rounded-full w-6 h-6 text-center  ">
          <a
            href="https://www.linkedin.com/company/aztec-automation-solutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" text-blue-500 fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="twitt  bg-white rounded-full w-6 h-6 text-center  ">
          <a
            href="https://x.com/AutomationAztec?s=20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" text-black fa-brands fa-x-twitter font-bold "></i>
          </a>
        </div>{" "}
      </div>
    </div>
  );
};

export default SocialIcons;
