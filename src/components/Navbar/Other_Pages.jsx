
import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

const Other_Pages = ({ buttonContent, dropdownContent }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleMouseEnter = (index) => {
      setIsDropdownOpen(true);
      setActiveIndex(index);
    };
  
    const handleMouseLeave = () => {
      setIsDropdownOpen(false);
      setActiveIndex(null);
    };
  
  return (
    <div className="relative">
    <button
      id="multiLevelDropdownButton"
      className="text-white  font-lg rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center transition-colors duration-500 ease-in-out"
      type="button"
      onMouseEnter={() => handleMouseEnter(null)}
      onMouseLeave={handleMouseLeave}
    >
      {buttonContent}{" "}
      <svg
        className={`w-4 h-4 ml-2 transform transition-transform duration-300 ease-in-out ${isDropdownOpen ? "rotate-180" : ""}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    {isDropdownOpen && (
      <div className="">
        <div
          id="multi-dropdown"
          className="z-10 absolute left-0 bg-gray-900 shadow-lg border dark:border-gray-700 rounded-lg w-full sm:w-72"
          onMouseEnter={() => handleMouseEnter(null)}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-2 text-sm text-white dark:text-gray-200">
            {dropdownContent.map((item, index) => (
              <li key={index} onMouseEnter={() => handleMouseEnter(index)}>
                <Link
                  to={item.labelLink} // Link for the main label
                  className={`flex items-center text-left justify-between w-full px-4 py-2 hover:bg-gray-950 bg-gray-900 ${
                    index === activeIndex ? "bg-gray-100 dark:bg-gray-700" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  {item.label}
                  {item.submenu && (
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform duration-300 ease-in-out ${
                        index === activeIndex ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  )}
                </Link>
                {item.submenu && index === activeIndex && (
                  <div className="z-10 absolute top-0 left-full mt-0 bg-gray-800  rounded-lg w-full sm:w-72 h-96 max-h-screen overflow-y-auto">
                    <ul className="py-2 text-sm text-white ">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.link || "#"}
                            className="block px-4 py-2 hover:bg-gray-700"
                          >
                            {subItem.subLabel}{" "}
                            {/* Render the subLabel property */}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </div>
  )
}

export default Other_Pages
