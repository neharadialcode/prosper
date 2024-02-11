import React from "react";
import { tokenData } from "./Helper";

const Token = () => {
  return (
    <div className="px-5 bg_line py-20">
      <div className="container 2xl:max-w-[1320px] mx-auto py-5">
        <h2 className="xl:text-[56px] sm:text-[40px] text-[35px] font-[600] text-center md:pb-10 sm:pb-5 leading-[100%]">
          Token utility
        </h2>
        <div className="flex flex-wrap xl:gap-10 sm:gap-7 gap-3 my-10 pb-10 justify-center max-w-[900px] mx-auto">
          {tokenData.map((obj, i) => (
            <div className="w-[200px] sm:h-[200px] border-[1.5px] border-[#FFDD00] rounded-[16px] flex flex-col justify-between items-center sm:px-4 px-3 sm:py-8 py-5 cursor-pointer hover:translate-y-[-5px] transition-all duration-300 ease-in-out">
              <span>{obj.icon}</span>
              <p className="text-center pt-5 sm:text-[20px] text-[18px] leading-[120%]">
                {obj.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Token;
