import React, { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { BsFillBackspaceReverseFill } from "react-icons/bs";
import { dataNav } from "../constants";

const Navbar = ({ children }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleNavOpen = () => {
    setNav(true);
  };
  const handleNavClose = () => {
    setNav(false);
  };

  return (
    <div className="fixed top-0 left-0 bg-black text-white  px-4 w-full z-10">
      <div
        className="flex max-w-[1240px] 
         mx-auto items-center
       justify-between font-medium"
      >
        <h1
          className="w-full text-3xl font-bold 
      text-primary py-4"
        >
          REACT.
        </h1>
        <ul className="md:flex items-center justify-end hidden w-full">
          {dataNav.length > 0 &&
            dataNav.map((item) => (
              <li className="pl-8 py-4" key={item.title}>
                {item.title}
              </li>
            ))}
        </ul>
        <div
          onClick={handleNav}
          className="flex cursor-pointer md:hidden hover:bg-gray-600 rounded-md p-2 -mr-2 select-none"
        >
          <RiMenuLine size={25}></RiMenuLine>
        </div>
      </div>

      <div
        className={`navbarMb200 fixed right-0 top-0 h-full
      border-r border-r-gray-900 bg-[#000300] z-20
      transition-all duration-500 md:hidden
      ${nav ? "" : "-right-[200%]"}
      `}
      >
        <div className="flex">
          <div
            onClick={handleNavClose}
            className="w-full flex items-center cursor-pointer justify-center py-4 
            relative group
            "
          >
            <BsFillBackspaceReverseFill
              size={25}
              className="z-40"
            ></BsFillBackspaceReverseFill>
            <div
              className="w-0 h-[57px] absolute left-0 bg-primary transition-all duration-500
  group-hover:w-2 group-hover:left-[95%]
  "
            ></div>
          </div>
        </div>

        <ul className="p-4 uppercase">
          {dataNav.length > 0 &&
            dataNav.map((item) => (
              <li
                className="px-2 py-4 sm:p-4 border-b border-gray-600 cursor-pointer hover:border-r-2 hover:border-r-primary"
                key={item.title}
              >
                {item.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
