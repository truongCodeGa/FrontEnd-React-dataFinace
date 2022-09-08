import React from "react";
import Button from "./button";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold py-2 pr-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex gap-4 flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter email"
              className="p-3 flex w-full text-black rounded-md outline-none"
            />
            <Button className="bg-primary text-black">Notify Me</Button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="text-primary"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
