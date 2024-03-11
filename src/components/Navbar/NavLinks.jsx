import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, idx) => (
        <div key={idx}>
          <div className="px-3 md:px-0 text-left md:cursor-pointer group">
            <h2
              className="  hover:text-red-700 py-7 flex justify-between items-center md:pr-2 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:text-sm md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h2>
            {link.submenu && (
              <div>
                <div className="absolute top-14 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    {/* <div
                      className="w-4 h-6 left-3 absolute 
                    mt-1 bg-gray-900 rotate-45 border-white "
                    ></div> */}
                  </div>
                  <div className="bg-gray-900  rounded-lg p-5 grid grid-cols-1 gap-10  mr-[3%]"> 
                    {link.sublinks.map((mysublinks, idx) => (
                      <div key={idx}>
                        {/* <h1 className="text-md text-brown font-semibold">
                          {mysublinks.Head.toLowerCase()}
                        </h1> */}

                        {mysublinks.sublink.map((slink, idx) => (
                          <ul key={idx}  >
                            <li className="text-sm text-white my-2.5">
                              <Link
                                to={slink.link}
                                className="hover:text-primary  inline-block transition-transform duration-300 transform hover:translate-x-4"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          </ul>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/*================ Mobile menus ==================== */}

          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, idx) => (
              <div key={idx}>
                <div>
                  <div
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("") 
                    }
                    className="py-4 pl-7 font-semibold flex-col justify-between items-center md:pr-0 pr-5"
                  >
                    {/* {slinks.Head} */}
                      {slinks.sublink.map((slink, idx) => (
                      <ul key={idx}>
                        <li  key={idx} className="py-3 pl-14">
                          <Link onClick={() => setOpen(!open)}
                            className="hover:text-primary  transition-transform duration-300 transform hover:translate-x-4"
                            to={slink.link}
                          >
                            {slink.name}
                            {/* {console.log(slink.name)} */}
                          </Link>
                        </li>
                      </ul>
                    ))}
                    {/* {console.log("this is heading",slinks.Head)} */}

                    {/* <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span> */}
                  </div>
                  {/* <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, idx) => (
                      <ul key={idx}>
                        <li key={idx} className="py-3 pl-14">
                          <Link
                            className="hover:text-primary  transition-transform duration-300 transform hover:translate-x-4"
                            to={slink.link}
                          >
                            {slink.name}
                            {console.log(slink.name)}
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
