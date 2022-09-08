import React from "react";
import Typed from "react-typed";
import Button from "./button";
const Hero = () => {
  return (
    <div className="text-white w-full px-4">
      <div
        className="max-w-[800px] sm:h-screen mb-10
      justify-center flex flex-col mx-auto
      text-center"
      >
        <p className="text-primary font-bold px-4 py-2 sm:mt-0 mt-20">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl">Grow with data.</h1>
        <div className="sm:flex sm:justify-center sm:items-center">
          <p className="md:text-5xl sm:text-4xl text-xl pt-4 px-4 sm:py-4 font-bold">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl
            text-[#4D505B]
             text-xl font-bold"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></Typed>
        </div>
        <p className="md:text-2xl text-xl text-gray-500 font-bold px-4">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <div className="px-4">
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
