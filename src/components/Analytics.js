import React from "react";
import laptop from "../assets/laptop.jpg";
import Button from "./button";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2">
        <img src={laptop} alt="/" className="w-[500px] my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-primary font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl mb-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            nostrum voluptatibus deserunt similique animi autem eligendi,
            corrupti expedita consequatur aspernatur ullam. Quae praesentium
            inventore laudantium iure ab ratione repellendus a!
          </p>
          <Button className="bg-black text-primary sm:mx-0">Get started</Button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
