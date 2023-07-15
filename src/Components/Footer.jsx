import React from "react";
import logo from "../images/logo.svg";

const Footer = () => {
    return (
      <footer className="bg-very-dark-black-blue text-grayish-blue px-5 py-16 md:py-10 lg:py-16 rounded-tr-[3.125rem] lg:rounded-tr-[5.625rem] lg:mt-[4rem]">
        <div className="max-w-[69.5rem] mx-auto grid gap-12 text-center md:text-left md:grid-cols-[1fr_1fr_1fr_1fr]">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="mx-auto md:mx-0 w-[4.8rem] md:w-[auto]"
            />
          </a>

          <div>
            <h4 className="text-white font-heading font-[600] text-[1.1rem] mb-[.8rem] lg:mb-[1.2rem]">
              Product
            </h4>
            <ul>
              <li className="p-1">
                <a href="/" className="hover:underline">
                  Overview
                </a>
              </li>

              <li className="p-1">
                <a href="/" className="hover:underline">
                  Pricing
                </a>
              </li>

              <li className="p-1">
                <a href="/" className="hover:underline">
                  Marketplace
                </a>
              </li>

              <li className="p-1">
                <a href="/" className="hover:underline">
                  Features
                </a>
              </li>

              <li className="p-1">
                <a href="/" className="hover:underline">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-heading font-[600] text-[1.1rem] mb-[.8rem] lg:mb-[1.2rem]">
              Company
            </h4>
            <ul>
              <li className="p-1">
                <a href="/" className="hover:underline">
                  About
                </a>
              </li>
              <li className="p-1">
                <a href="/" className="hover:underline">
                  Team
                </a>
              </li>
              <li className="p-1">
                <a href="/" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="p-1">
                <a href="/" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-heading font-[600] text-[1.1rem] mb-[.8rem] lg:mb-[1.2rem]">
              Connect
            </h4>
            <ul>
              <li className="p-1">
                <a href="/" className="hover:underline">
                  Contact
                </a>
              </li>
              <li className="p-1">
                <a href="/" className="hover:underline">
                  Newsletter
                </a>
              </li>

              <li className="p-1">
                <a href="/" className="hover:underline">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
}
export default Footer;