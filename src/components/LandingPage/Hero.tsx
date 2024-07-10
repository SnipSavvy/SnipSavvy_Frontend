"use client";
import React, { useState } from "react";
import { SignUpButton } from "../SignUpButton/SignUpButton";
import Image from "next/image";
import PageNavbar from "./PageNavbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero: React.FC = () => {
  useGSAP(() => {
    gsap.from(".img_box", {
      x: 360,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    });
  });
  return (
    <>
      <div className="relative w-full h-screen bg-[#0E1116]">
        <PageNavbar></PageNavbar>
        <div className="hidden md:block">
          <Image
            className="w-full h-full relative "
            src="/hero.png"
            alt=""
            layout="fill"
          />
        </div>

        <div className="relative px-4 xl:px-0 container mx-auto md:flex mt-20 justify-between items-center gap-4">
          <div className="text-color w-full md:w-[40%]">
            <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-white font-extrabold f-f-l">
              Manage Your Code Snippets with Ease
            </h1>
            <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
              <h2>
                SnipSavvy provides a clean and intuitive interface to help you
                quickly find, organize, and share your code snippets. Never
                waste time searching for that one snippet you need again.
              </h2>
            </div>
            <div className="lg:flex mt-4">
              <SignUpButton description="Get Started Now"></SignUpButton>
              {/* <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
                Try it out
              </button> */}
            </div>
          </div>
          <Image
            className="img_box w-full mt-8 md:mt-0 object-cover md:w-[60%] md:-ml-10 lg:-ml-10 xl:ml-16"
            src="/photo.png"
            alt="sample page"
            role="Image"
            style={{}}
            width={1500}
            height={100}
          />
        </div>
      </div>

      <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
    </>
  );
};

export default Hero;
