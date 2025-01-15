import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center pb-10 mb-[100px] md:mb-5 w-full"
      id="contact"
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple"> YOUR </span> digital
          presence to the next level{" "}
        </h1>
        <p className="text-center text-white-200 md:mt-10 my-5 ">
          Reach out to me today and let&apso;s bring your vision to life!
        </p>
        <a href="mailo:motazyasser84@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex md:flex-row flex-col items-center justify-between">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025
          <span className="text-purple"> MoTaz_Y</span>
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img, link }) => (
            <div
              key={id}
              className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-blur-lg backdrop-filter saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={link}>
                {" "}
                <img src={img} alt="social-media" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
