import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo_PROSPER.svg";
import { headerLink } from "./Helper";
import { CrossIcon, Toggle } from "./Icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <nav className="fixed w-full bg-[#00000044]">
      <div className=" mx-auto sm:px-10 px-5">
        <div className="flex items-center justify-between py-4 ">
          <div className=" block">
            <img
              className="sm:max-w-[180px] max-w-[130px] w-full"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-baseline ">
              {headerLink.map((obj, i) => (
                <li key={i}>
                  <a
                    href={obj.url}
                    className=" relative after:content-['']  after:w-0 after:h-[1px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-white  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%]  font-inter hover:text-blue font-normal leading-normal rounded-md text-[16px] xl:me-9 me-5"
                  >
                    {obj.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            target="
          _blank"
            href="https://social.prosper.so/"
            className="bg-[#5900f7] py-[10px] sm:px-7 px-3 text-[14px] rounded-md font-[500]"
          >
            Predict now
          </a>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="relative z-50"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "opacity-1" : "opacity-0"}
            >
              {!isOpen ? <Toggle /> : <CrossIcon />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:opacity-0 transition-all duration-500 fixed h-screen w-screen z-30 bg-[#5900f7] top-0 ${
          isOpen ? " translate-x-0" : "translate-x-[-100%]"
        }`}
        id="mobile-menu"
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center h_mobile h-full">
          {headerLink.map((obj, i) => (
            <li key={i} onClick={() => setIsOpen(!isOpen)} className="py-3">
              <a
                href={obj.url}
                className=" relative after:content-['']  after:w-0 after:h-[1px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-white  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%]  font-inter hover:text-blue font-normal leading-normal rounded-md sm:text-[5vw] text-[8vw]"
              >
                {obj.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
