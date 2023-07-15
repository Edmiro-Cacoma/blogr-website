import MobileIlustration from "../images/illustration-phones.svg";

import React from "react";

const ShowCaseTwo = () => {
  return (
    <section className="bg-[url('/src/images/bg-pattern-circles.svg')] bg-no-repeat max-[25.625rem]:bg-[center_top_-21rem] bg-[center_top_-18rem] md:bg-[left_-8.5rem_top_-14rem] lg:bg-[left_-14rem_top_-33rem] lg:bg-[lenght:63rem_63rem] bg-[lenght:42rem_42rem] relative bg-Very-dark-grayblue rounded-tr-[3.125rem]rounded-bl-[3.125rem] lg:rounded-tr-[5.625rem] lg:rounded-bl-[5.625rem] text-white text-center md:text-left w-full lg:-mt-[20.625rem] md:-mt-5 mt-[7rem]">
      <div className="max-w-[69.5rem] mx-auto md:flex md:gap-5 lg:gap-14 items-center px-5 pt-24 pb-28 md:py-2">
        <img
          src={MobileIlustration}
          alt=""
          className="max-w-[23rem] md:max-w-[24rem] lg:max-w-[100%] w-full relative md:static -top-[15rem] left-1/2 -translate-x-1/2 md:translate-x-0 lg:relative lg:left-0 lg:-top-[4rem] -mb-[15rem] md:mb-0 lg:-mb-[10rem]"
        />

        <div className="md:basis-[100%] max-w-[30rem] mx-auto md:mx-0 md:max-w-none">
          <h3 className="text-[1.8rem] lg:text-[1.9rem] font-[600] font-heading max-[48rem]:max-w-[210px] mx-auto leading-[1.3] mb-5 md:mb-4">State of the Art Infrastructure</h3>
          <p className="text-grayish-blue leading-relaxed">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter wher eyour readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ShowCaseTwo;
