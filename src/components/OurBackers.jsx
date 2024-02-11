import React from "react";
import { partnersData } from "./Helper";

const OurBackers = () => {
  return (
    <div className="px-5" id="backers">
      <div className="container 2xl:max-w-[1320px] mx-auto py-5">
        <h2 className="xl:text-[56px] sm:text-[40px] text-[35px] font-[600] text-center md:pb-10 sm:pb-5 leading-[100%]">
          Our backers & partners
        </h2>
        <div className="flex flex-wrap xl:gap-10 sm:gap-7 gap-3 my-10 pb-10 justify-center">
          {partnersData.map((obj, i) => (
            <div
              key={i}
              className="sm:w-[180px] w-[140px] h-[140px] sm:h-[180px] bg-white rounded-[16px] flex flex-col justify-center items-center sm:p-4 p-3 cursor-pointer hover:translate-y-[-5px] transition-all duration-300 ease-in-out"
            >
              <img
                width={obj.width}
                height={obj.height}
                src={obj.logo}
                alt="logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBackers;
