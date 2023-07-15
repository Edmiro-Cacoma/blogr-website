import React from "react";
import DesktopIlustration from "../images/illustration-editor-desktop.svg";
import MobileIlustration from "../images/illustration-editor-mobile.svg";

const showCaseOne = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <section className="max-w-[69.5rem] mx-auto my-[5.625rem] md:my-[7.5rem] p-5 md:p-7">
          <h2 className="font-heading font-[600] text-[1.4rem] md:text-[2.1rem] lg:text-[2.3rem] text-center pb-11 md:pb-24 text-Very-dark-blue">
            Designed for the future
          </h2>

          <div className="flex flex-col lg:gap-20 gap-11 md:flex-row">
            <img
              src={MobileIlustration}
              alt="destopIlustration"
              className="mx-auto w-full max-w-[30rem]  object-contain lg:hidden"
            />

            <img
              src={DesktopIlustration}
              alt="mobileIllustration"
              className="object-contain hidden lg:block lg:-translate-y-56 lg:max-w-[55rem]"
            />

            <section className="md:text-left md:-order-1 md:max-w-[32rem] md:basis-[100%] text-center lg:flex-shrink-0 max-w-[30rem] mx-auto md:mx-0">
              <div className="pb-11 lg:pb-16">
                <h3 className="font-heading text-[1.4rem] lg:text-[1.6rem] font-[600] text-Very-dark-blue mb-2 lg:mb-4 mx-auto max-[30rem]:max-w-[11.5625rem]">
                  Introducing an extensible editor
                </h3>
                <p className="text-very-dark-grayish-blue leading-relaxed">
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, video, and Markdown. Extensibility with
                  plugins and themes provide easy ways to add functionality or
                  change the looks of a blog.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-[1.4rem] lg:text-[1.6rem] font-[600] text-Very-dark-blue mb-2 lg:mb-4 mx-auto max-[30rem]:max-w-[11.5625rem]">
                  Robust content management
                </h3>

                <p className="text-very-dark-grayish-blue leading-relaxed">
                  Flexible content management enables users to easily mve
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you're in full control.
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default showCaseOne;
