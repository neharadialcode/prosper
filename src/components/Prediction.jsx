import React from "react";
import bubble from "../assets/img/Bubble.png";
import gif from "../assets/img/gif.svg";
import prediction from "../assets/img/prediction.png";

const Prediction = () => {
  return (
    <div className="px-5 sm:py-20 py-10">
      <div className="container 2xl:max-w-[1320px] mx-auto py-5 ">
        <h2 className="xl:text-[56px] text-[40px] font-[600] text-center md:pb-10 sm:pb-5 leading-[100%]">
          Prediction insurance
        </h2>
        <div className="lg:flex pt-5 ">
          <div className="lg:w-1/2 lg:max-w-[560px] pt-10">
            <p className="sm:text-[20px] text-[18px] tracking-[.5px]">
              At the moment of prediction placing, each user may reserve some
              amount of PROS tokens in order to ensure his prediction. The
              maximum amount of the reserved tokens equals 10% of the user
              prediction amount. Each exact pool has its own insurance fund.
            </p>
            <p className="sm:text-[20px] text-[18px] tracking-[.5px] mt-8">
              At the moment of the reward distribution,
            </p>
            <p className="sm:text-[20px] text-[18px] tracking-[.5px] ">
              15% of the prize is taken to the pool insurance fund and
              distributed to users who lost their predictions, but reserved PROS
              tokens for the insurance.
            </p>
            <p className="sm:text-[20px] text-[18px] tracking-[.5px] mt-8 ">
              The distribution is linearly based on the amount of reserved
              tokens.
            </p>
            <p className="sm:text-[20px] text-[18px font-bold mt-8 tracking-[.5px]">
              This feature is currently in development and will be released
              soon.
            </p>
          </div>
          <div className="lg:w-1/2 xl:ps-32 lg:ps-10 mt-10 lg:mt-0">
            <img src={prediction} alt="prediction" />
          </div>
        </div>
        <div className="max-w-[250px] mx-auto pt-10">
          <img className="w-full h-full" src={gif} alt="gif" />
        </div>
      </div>
    </div>
  );
};

export default Prediction;
