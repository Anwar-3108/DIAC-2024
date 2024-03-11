import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Circle_Model";
import NavLinks from "./NavLinks";
import StickyContactInfo from "../StickeyContactInfo";
import SocialIcons from "../SocialIcons";
import MultiLevelDropdown from "./MultiLevelDropdown";
import {NavigationData, OtherPages} from "./Navigation_Data";
import "../../styles/Navbar.css"
import { Dropdown } from "flowbite-react";
import diac_logo_img from "../../assets/images/diac-logo-0.1.png";
import Other_Pages from "./Other_Pages";
import Circle_Model from "../Circle_Model";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <StickyContactInfo /> */}
      <SocialIcons />
      <nav className=" navbar sticky top-0 z-50 shadow-md w-full">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-2 md:w-auto w-full flex justify-between">
            <Link to={"/"}>
              <img
                loading="lazy"
                src="https://automationtraining.diac.co.in/wp-content/uploads/2023/07/DIAC-Logo-1.png"
                // src={diac_logo_img}
                alt="logo"
                className="md:cursor-pointer h-12 lg:h-16 lg:w-[50]"
              />
            </Link>
            <div
              className="text-3xl mt-2  md:hidden"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden  items-center  md:gap-0  lg:gap-6 font-sans">
            <li className="text-white">
              <Link
                to="/about-us"
                className="py-7  md:px-2 font-lg text-lg px-3 inline-block"
              >
                About us
              </Link>
            </li>
            {NavigationData.map((item, index) => (
              <li key={index} className="hover:text-red-950">
                <MultiLevelDropdown
                  buttonContent={item.buttonContent}
                  dropdownContent={item.dropdownContent}
                />
              </li>
            ))}
            {/* <NavLinks /> */}
            <li className="text-white">
              <Link to="/corporate-training" className="py-7 md:px-0 px-3 font-lg text-lg inline-block">
                Corporate Training
              </Link>
            </li>
            <li className="text-white">
              <Link to="/placement" className="py-7 md:px-0 px-3  font-lg text-lg inline-block">
                Placement
              </Link>
            </li>
            
            <li className="font-lg text-lg">
            {OtherPages.map((item, index) => (
              <li key={index} className="hover:text-white">
                <Other_Pages
                  buttonContent={item.buttonContent}
                  dropdownContent={item.dropdownContent}
                />
              </li>
            ))}
            </li>
          </ul>
          <div className="md:block hidden md:mr-2 ">
            <Circle_Model />
            {/* <Example/> */}
          </div>
          {/* ======== Mobile nav ===========*/}
          <ul
            className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            {/* <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li> */}

            {/* <li onClick={() => setOpen(!open)} className="hover:text-white">
              <Link to="/about-us" className="py-7 px-3 inline-block">
                About
              </Link>
            </li> */}
            <li onClick={() => setOpen(!open)} className="hover:text-white">
              <Link to="/about-us" className="py-7  md:px-2 px-3 inline-block">
                About us
              </Link>
            </li>
            <NavLinks />
            {/* <li onClick={() => setOpen(!open)} className="hover:text-white">
              <Link to="/blog" className="py-7 px-3 inline-block">
                Blog
              </Link>
            </li> */}
            {/* <li  onClick={() => setOpen(!open)} className="hover:text-white">
              <Link to="/careers" className="py-7 px-3 inline-block">
                CAREERS
              </Link>
            </li> */}
            <div className="py-5 w-1/2 text-center">
              <Circle_Model />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
