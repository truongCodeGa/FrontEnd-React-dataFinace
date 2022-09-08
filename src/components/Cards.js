import React from "react";
import { DataTextGB } from "../constants";

import Button from "./button";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      {/* map */}
      <div className=" max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {DataTextGB.length > 0 &&
          DataTextGB.map((card) => {
            return (
              <div
                key={card.title}
                className="w-full shadow-xl flex flex-col p-4 my-8 
        rounded-lg hover:scale-110 duration-150"
              >
                <img
                  src={card.img}
                  alt="Single"
                  className="w-20 mx-auto mt-[-3rem] bg-white "
                />
                <h2 className="text-xl sm:text-2xl font-bold text-center py-8">
                  {card.title}
                </h2>
                <p className="text-center text-4xl font-bold">{card.money}</p>
                <div className="text-center mt-8 ">
                  <hr className="mx-4" />
                  {card.offer.map((sub) => (
                    <p className="py-2 border-b mx-4 sm:mx-8 ">{sub.text}</p>
                  ))}
                </div>
                <Button className="bg-primary w-full text-black">
                  Start Trial
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
