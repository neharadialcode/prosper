import React from "react";
import logo from "../assets/img/logo_PROSPER.svg";
import scroll from "../assets/img/scroll.svg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="px-5 sm:py-20 py-10 md:h-screen bg_hero">
      <div className="container 2xl:max-w-[1320px] mx-auto py-5 md:h-auto h-[70vh] flex flex-col justify-center ">
        <div className="md:flex max-w-[900px] mx-auto pt-20">
          <div className="md:w-1/2 md:border-r md:h-[60vh] md:pe-10 ">
            <img
              className="mx-auto w-full max-w-[320px]"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="md:w-1/2 lg:ps-20 md:ps-10 md:pt-20 sm:pt-10 pt-5">
            <div className="text-[20px] sm:text-[24px] text-center sm:text-start lg:w-[400px] sm:w-[320px]">
              <Typewriter
                options={{
                  strings:
                    "   World's first prediction market with the on-chain liquidity aggregation",
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center md:pt-5 pt-8">
          <a
            href="#video"
            className="inline-block hover:translate-y-[5px] transition-all duration-300 ease-in-out scroll_animation"
          >
            <img className="mx-auto" src={scroll} alt="scroll" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
