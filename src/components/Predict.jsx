import React from "react";
import bubble from "../assets/img/Bubble.png";
import gif from "../assets/img/gif.svg";

const Predict = () => {
  return (
    <div className="px-5 sm:py-20 py-10" id="video">
      <div className="container 2xl:max-w-[1320px] mx-auto py-5 ">
        <div className="max-w-[760px] mx-auto">
          <iframe
            className="md:min-h-[450px] min-h-[200px] sm:min-h-[350px] sm:h-[350px]"
            id="youtubeiframe300644794"
            class="t347__iframe"
            width="100%"
            height="350px"
            src="https://www.youtube.com/embed/H86OGVc9Pj8?autoplay=1&amp;rel=0"
            frameborder="0"
            allowfullscreen=""
            allow="autoplay"
          ></iframe>
        </div>
        <div className="max-w-[250px] mx-auto pt-10">
          <img className="w-full h-full" src={gif} alt="gif" />
        </div>
      </div>
    </div>
  );
};

export default Predict;
