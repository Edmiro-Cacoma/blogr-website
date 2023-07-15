import React from "react";
import mobileLaptopIlustration from "../images/illustration-laptop-mobile.svg";
import desktopLaptopIlustration from "../images/illustration-laptop-desktop.svg";

const showCaseThree = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="max-w-[69.5rem] mx-auto my-[5.625rem] md:my-[8rem] p-5 md:p-7 lg:mt-[17rem]">
        <div className="flex flex-col gap-11 md:gap-9 md:flex-row lg:gap-20 lg:grid lg:grid-cols-[1fr_1fr]">
          <img
            src={mobileLaptopIlustration}
            alt=""
            className="mx-auto w-full scale-[1.2] max-w-[26rem] object-contain lg:hidden"
          />
          <div></div>
          <img
            src={desktopLaptopIlustration}
            alt=""
            className="object-contain hidden lg:absolute ltr:-translate-y-56 lg:-translate-x-[20rem] lg:block lg:max-w-[55rem]"
          />

          <div className="md:text-left text-center md:max-w-[32rem] md:basis-[100%] lg:-translate-y-[3.2rem] max-w-[30rem] mx-auto md:mx-0">
            <div className="pb-11 lg:pb-16">
              <h3 className="font-heading text-[1.4rem] lg:text-[1.6rem] font-[600] text-Very-dark-blue mb-2 lg:mb-4 mx-auto max-[30rem]:max-w[11.5625rem]">
                Free, open, simple
              </h3>

              <p className="text-very-dark-grayish-blue leading-relaxed">
                Blogr is a free and open source application baked by a large
                community of helpful developers. It supports features such as
                code syntax highlighting. RSS feeds, social media integration,
                third-party commenting tools, and work seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-[1.4rem] lg:text-[1.6rem] font-[600] text-Very-dark-blue mb-2 lg:mb-4 mx-auto max-[30rem]:max-w-[11.5625rem]">
                {" "}
                Powerful tooling
              </h3>

              <p className="text-very-dark-grayish-blue leading-relaxed">
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing een the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default showCaseThree;
