import React from "react";
import { footerLinks } from "./Helper";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="px-10">
      <div className="flex justify-between items-center">
        <div className="whitespace-nowrap">© {year} Prosper.so</div>
        <ul className="flex px-[10%] flex-wrap justify-center ">
          {footerLinks.map((obj, i) => (
            <li key={i} className="px-4 whitespace-nowrap text-center py-1">
              <a className="text-center hover:opacity-70" href={obj.url}>
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
