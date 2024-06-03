import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" xl:px-20 lg:px-12 sm:px-6 px-4 py-12 bg-[#0E0E11]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row">
          <Image width={200} height={100} src="/fullLogo.png" alt="" />
        </div>
        <div className="flex flex-row gap-4">
        <div className="flex items-center gap-x-8 mt-6">
          <a
            href="https://www.linkedin.com/company/snipsavvy-official"
            target="_blank"
            className="cursor-pointer"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
        <div className="flex items-center gap-x-8 mt-6">
          <a
            href="https://www.github.com/SnipSavvy/"
            target="_blank"
            className="cursor-pointer"
          >
            <FaGithub size={25} />
          </a>
        </div>
        </div>
        <div className="flex items-center mt-6">
          <p className="text-base leading-4 text-gray-300">
            2021 <span className="font-semibold">SnipSavvy</span>
          </p>
          <div className="border-l border-gray-800 pl-2 ml-2">
            <p className="text-base leading-4 text-gray-300">
              Inc. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
