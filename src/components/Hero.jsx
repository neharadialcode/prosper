import React from "react";
import logo from "../assets/img/logo_PROSPER.svg";
import scroll from "../assets/img/scroll.svg";

const Hero = () => {
  return (
    <div className="px-5 sm:py-20 py-10 h-screen bg_hero">
      <div className="container 2xl:max-w-[1320px] mx-auto py-5 ">
        <div className="flex max-w-[900px] mx-auto">
          <div className="w-1/2 border-r h-[60vh] ">
            <img src={logo} alt="logo" />
          </div>
          <div className="w-1/2 ps-20">
            <p>
              World's first prediction market with the on-chain liquidity
              aggregation
            </p>
          </div>
        </div>
        <div className="text-center">
          <img className="mx-auto" src={scroll} alt="scroll" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
