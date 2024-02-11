import React from "react";
import { footerLinks } from "./Helper";
import { TelegramIcon, TwitterIcon } from "./Icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="px-10 bg-[#00041a] py-5">
      <div className="flex justify-center py-5 mb-5">
        <a
          className="px-2 inline-block hover:scale-[1.1] transition-all duration-300 ease-in-out"
          href=""
        >
          <TwitterIcon />
        </a>
        <a
          className="px-2 inline-block hover:scale-[1.1] transition-all duration-300 ease-in-out"
          href=""
        >
          <TelegramIcon />
        </a>
      </div>
      <div className="flex justify-between items-center">
        <div className="whitespace-nowrap">© {year} Prosper.so</div>
        <ul className="flex px-[10%] flex-wrap justify-center ">
          {footerLinks.map((obj, i) => (
            <li key={i} className="px-4 whitespace-nowrap text-center py-1">
              <a
                className="text-center hover:opacity-70 text-[14px]"
                href={obj.url}
              >
                {obj.link}
              </a>
            </li>
          ))}
        </ul>
        <div className="whitespace-nowrap cursor-pointer">Back to top</div>
      </div>
    </div>
  );
};

export default Footer;
