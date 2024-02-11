import React from "react";
import bubble from "../assets/img/Bubble.png";
import gif from "../assets/img/gif.svg";

const Liquidity = () => {
  return (
    <div className="px-5 sm:py-20 py-10">
      <div className="container 2xl:max-w-[1320px] mx-auto py-5 ">
        <h2 className="xl:text-[56px] sm:text-[40px] text-[35px] font-[600] text-center md:pb-10 sm:pb-5 leading-[100%]">
          Liquidity program
        </h2>
        <div className="sm:flex pt-10 xl:pt-16">
          <div className="sm:w-1/2 sm:max-w-[560px] md:pe-10">
            <p className="sm:text-[20px] text-[18px] tracking-[.5px]">
              The main problem of the crypto prediction markets is a lack of
              liquidity. We are aiming to solve that by implementing binary
              models of liquidity provision. As PROSPER is a short-term
              prediction market, the results of each pool are pretty much
              randomized.
            </p>
            <p className="sm:text-[20px] text-[18px font-bold mt-10 md:mt-20 tracking-[.5px]">
              This means, that in general the expected value for liquidity
              providers is always positive.
            </p>
          </div>
          <div className="sm:w-1/2 xl:ps-32 sm:ps-10 mt-10 sm:mt-0">
            <p className="sm:text-[20px] text-[18px font-bold sm:ps-4 tracking-[.5px]">
              What do we offer for liquidity providers:
            </p>
            <ul className="mt-4 ">
              <li className="flex items-center sm:text-[20px] text-[18px] tracking-[.5px]">
                <img className="w-[50px]" src={bubble} alt="bubble" /> Free
                maximum insurance fund
              </li>
              <li className="flex items-center sm:text-[20px] text-[18px] tracking-[.5px]">
                <img className="w-[50px]" src={bubble} alt="bubble" /> High
                annual percentage rate income
              </li>
              <li className="flex items-center sm:text-[20px] text-[18px] tracking-[.5px]">
                <img className="w-[50px]" src={bubble} alt="bubble" />
                0% treasury
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[250px] mx-auto pt-10">
          <img className="w-full h-full" src={gif} alt="gif" />
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
