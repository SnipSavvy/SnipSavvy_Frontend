"use client"
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { useThemeContext } from "./ThemeContext";

const Footer = () => {

  const { theme, setTheme } = useThemeContext()

  return (
    <div className={`${theme==="true"?"bg-[#0E0E11] text-gray-300":"bg-white text-black"} xl:px-20 lg:px-12 sm:px-6 px-4 py-12`}>
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image width={200} height={100} src="/fullLogo.png" alt="" />
        </div>

        <div className="flex items-center gap-x-8 mt-6">
          <a
            href="https://www.linkedin.com/company/snipsavvy-official"
            target="_blank"
            className="cursor-pointer"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="text-base leading-4">
            2021 <span className="font-semibold">SnipSavvy</span>
          </p>
          <div className="border-l border-gray-800 pl-2 ml-2">
            <p className="text-base leading-4">
              Inc. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
