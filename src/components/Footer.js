import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
import { dataFooter } from "../constants";

const Footer = () => {
  return (
    <div className="w-full  px-4  text-gray-300">
      <div className="max-w-[1240px] mx-auto lg:grid-cols-3 grid  lg:gap-8 py-16">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="Footer200 col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-6">
          {dataFooter.length > 0 &&
            dataFooter.map((item) => (
              <div className="text-center" key={item.category}>
                <h6 className="font-medium text-gray-600 rounded-t-lg bg-primary">
                  {item.category}
                </h6>
                <ul>
                  {item.text.map((sub) => (
                    <li
                      className="py-2 text-sm border-b-[1px] border-b-gray-400"
                      key={sub.title}
                    >
                      {sub.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
