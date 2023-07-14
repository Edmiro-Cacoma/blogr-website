import { useState } from "react";
import subLinks from "../Data";
import logo from "../images/logo.svg";
import Hamburguer from "../images/icon-hamburger.svg";
import IconClose from "../images/icon-close.svg";
import arrowDark from "../images/icon-arrow-dark.svg";
import arrowLight from "../images/icon-arrow-light.svg";

const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOPen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 max-w-[69.5rem] mt-0 mx-auto flex gap-x-12 items-center px-5 md:px-7 h-[6.875rem] md:h-[10.625rem] text-white">
        {/**logo */}
        <a
          href="/"
          aria-label="logo"
          className="w-[4.5rem] md:w-[auto] flex-shrink-0 mr-auto md:mr-0"
        >
          <img src={logo} alt="" />
        </a>

        {/**Hamburguer Menu */}
        {isMenuOpen ? (
          <button className="flex-shrink-0">

            <img
              src={IconClose}
              alt=""
              className="md:hidden cursor-pointer p-2 h-[2.5rem]"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            />
            
          </button>
        ) : (
          <button className="flex-shrink-0" aria-label="mobile menu">
            <img
              src={Hamburguer}
              alt=""
              className="md:hidden cursor-pointer p-2"
              onClick={() => setIsMenuOpen(true)}
            />
          </button>
        )}

        {/**Navabar */}
        <div
          className={`absolute rounded-md top-[6.25rem] left-5 right-5 bg-white md:bg-[transparent] text-Very-dark-grayblue md:static md:text-white py-5 md:flex md:items-center md:w-full drop-shadow-xl md:drop-shadow-none ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <nav className="flex flex-col gap-5 items-center w-full md:flex-row md:gap-10 md:w-full font-[500] px-7 pb-3 md:pb-0">
            <ul className="flex flex-col gap-2 md:flex-row md:gap-9 md:mr-auto w-full text-center md:text-left">
              {/**Nav Item*/}
              {subLinks.map((item, index) => {
                const { links, page } = item;
                return (
                  <li className=" relative group p-2" key={index}>
                    <button
                      type="button"
                      id="dropdownDefaultButton"
                      className="flex items-center gap-3 mx-auto md:gap-4"
                    >
                      {page}
                      <div
                        className={`md:group-hover:rotate-180 shrink-0 ${
                          isDropdownOPen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <img src={arrowDark} alt="" className="md:hidden" />

                        <img
                          src={arrowLight}
                          alt=""
                          className="md:block md:scale-125 hidden"
                        />
                      
                      </div>
                    </button>

                    {/**Submenu*/}

                    <div
                      className={`group-hover:block md:absolute md:top-0 md:left-0 md:translate-y-[2.5rem] md:w-full pt-1 ${
                        isDropdownOPen ? "block" : "hidden"
                      }`}
                    >
                      <ul className="md:text-very-dark-black-blue md:px-7 md:py-5 md:min-w-[10rem] p-2 rounded-md bg-gray-200 mt-4 md:mt-0">
                        {links.map((item, index) => {
                          const { url, label } = item;
                          return (
                            <li className="p2" key={index}>
                              <a
                                href={url}
                                className="text-very-dark-grayish-blue hover:text-very-dark-grayish-blue md:font[400]"
                              >
                                {label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>

            <ul className="flex flex-col items-center gap-5 md:flex-row md:items-center md:gap-10 border-t border-grayish-blue border-solid w-full md:w-auto md:border-t-0">
              <li className="p-2 mt-5 md:mt-0">
                <a href="/">Login</a>
              </li>

              <li>
                <button
                  type="button"
                  className="font-[500] w-[7.75rem] h-[2.5rem] max-[48rem]:bg-gradient-to-r from-very-light-red to-light-red  text-white md:w-[8.5625rem] md:h-[46px] rounded-[3rem] md:bg-white md:text-light-red duration-200 hover:bg-light-red-CTA hover:text-white"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
