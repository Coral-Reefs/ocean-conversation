import React from "react";
import { FiUsers } from "react-icons/fi";
import { GiCo2, GiTurtle } from "react-icons/gi";
import { FaFish } from "react-icons/fa";
import { BiWind } from "react-icons/bi";

const statsArray = [
  {
    title: "1/2",
    content:
      "Half of the oxygen we breathe comes from the natural processes of ocean plankton. That’s every other breath.",
    icon: FiUsers,
  },
  {
    title: "90%",
    content:
      "Since the Industrial Revolution, the ocean has absorbed about 90% of the excess heat in our atmosphere.",
    icon: BiWind,
  },
  {
    title: "3B",
    content:
      "More than 3 billion people depend on fish and other ocean species for food and income.",
    icon: FaFish,
  },
  {
    title: "8%",
    content: "Only 8% of the ocean is legally protected.",
    icon: GiTurtle,
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center text-white container p-6 lg:py-24 my-6 lg:px-48">
      <div className="flex flex-col me-3">
        <h1 className="text-4xl md:text-6xl font-bold mb-3">
          Stats out of the blue
        </h1>
        <div className="h-1 bg-[#b3fd71] w-1/2 mb-6 md:mt-6"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {statsArray.map((stat, index) => {
          let IconComponent = stat.icon;
          return (
            <div key={index}>
              <h2 className="font-bold text-xl px-6 py-2 w-full mb-6 bg-white text-[#b3fd71] flex gap-3 relative items-center justify-center">
                <span className="absolute left-0 text-7xl text-[#b3fd71]">
                  <IconComponent />
                </span>{" "}
                {stat.title}
              </h2>
              <p>{stat.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
