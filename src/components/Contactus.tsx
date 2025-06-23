'use client';
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FadeInOnScroll } from "@/components/animation";

const ContactSection: React.FC = () => {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <FadeInOnScroll>
        <div className="container pt-10 xl:pt-14 lg:pt-14 md:pt-14 pb-8 xl:pb-10 lg:pb-10 md:pb-10">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
            <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
              <figure className="m-0 p-0">
                <img
                  className="w-auto"
                  src="/Contact.gif"
                  alt="Contact Us"
                />
              </figure>
            </div>

            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
              <h2 className="!text-[.75rem] uppercase text-line relative align-top !pl-[1.4rem] inline-flex !tracking-[0.02rem] !leading-[1.35] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#279445] !text-[#279445] !mb-3">
                Get In Touch
              </h2>
              <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-7">
                Got any questions? Don't hesitate to get in touch.
              </h3>

              <div className="flex flex-row mb-4">
                <MapPin className="text-[#279445] xl:text-[1.4rem] text-[calc(1.265rem+0.18vw)] mr-4 mt-[-0.25rem]" />
                <div>
                  <h5 className="!mb-1">Address</h5>
                  <address className="not-italic leading-[inherit] mb-0">
                    7/F ORE Central, 9th St. cor. 31st Ave., BGC, Taguig
                  </address>
                </div>
              </div>

              <div className="flex flex-row mb-4">
                <Phone className="text-[#279445] xl:text-[1.4rem] text-[calc(1.265rem+0.18vw)] mr-4 mt-[-0.25rem]" />
                <div>
                  <h5 className="!mb-1">Phone</h5>
                  <p>+63 977-817-0723</p>
                </div>
              </div>

              <div className="flex flex-row">
                <Mail className="text-[#279445] xl:text-[1.4rem] text-[calc(1.265rem+0.18vw)] mr-4 mt-[-0.25rem]" />
                <div>
                  <h5 className="!mb-1">E-mail</h5>
                  <p className="mb-0">
                    <a href="mailto:info.lifecoreph@gmail.com" className="text-[#279445]">
                      info.lifecoreph@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ContactSection;
