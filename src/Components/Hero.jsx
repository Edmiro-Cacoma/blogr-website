import React from "react";
import heroMobile from "../images/bg-pattern-intro-mobile.svg";
import heroDesktop from "../images/bg-pattern-intro-desktop.svg";

const Hero = () => {
  return (
    <>
      <section className="relative h-[100vh] max-h-[32.6875rem] md:max-h-[37.5rem] bg-gradient-to-br from-very-light-red to-light-red grid place-content-center md:bg-gradient-to-r md:from-very-light-red md:to-light-red rounded-bl-[3.125rem] rounded-lg-[5.625rem] overflow-hidden">
        <div>
          <img
            src={heroMobile}
            alt=""
            className="scale-[3.6] translate-x-36  translate-y-60 md:hidden"
          />

          <img
            src={heroDesktop}
            alt=""
            className="scale-[2] md:translate-x-[13rem] md:translate-y-[8rem] lg:translate-x-[23rem] lg:translate-y-[27rem] hidden md:block"
          />
        </div>
      </section>
    </>
  );
};
export default Hero;
