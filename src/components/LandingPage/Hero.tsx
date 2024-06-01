"use client";
import React, { useState } from "react";
import { SignUpButton } from "../SignUpButton/SignUpButton";
import Image from "next/image";
import Link from "next/link"; // Import Link

const Hero: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <div className="relative w-full h-screen bg-[#0E1116]">
        <div className="hidden md:block">
          <Image
            className="w-full h-full relative"
            src="/hero.png"
            alt=""
            layout="fill"
            // objectFit="contain"
            sizes="100vw"
          />
        </div>
        <nav className="lg:hidden relative z-50">
          <div className="flex py-2 justify-between items-center px-4">
            <div>
              <Image
                width={45}
                height={45}
                className="w-[45vw] mt-10"
                src="/fullLogo.png"
                alt="logo"
              />
            </div>
            <div className="visible flex items-center">
              <button
                id="open"
                onClick={() => setMenu(!menu)}
                className={`${menu ? "hidden" : ""} focus:outline-none focus:ring-2 focus:ring-black`}
              >
                {/* <Image src="/fullLogo.png" alt="menu" /> */}
              </button>
              <ul
                id="list"
                className={`${menu ? "" : "hidden"} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24`}
              >
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <Link href="/" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                    <span className="font-bold">Home</span>
                  </Link>
                </li>
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <Link href="/features" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                    <span className="font-bold">Features</span>
                  </Link>
                </li>
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
                  <Link href="/" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                    <span className="font-bold">Pricing</span>
                  </Link>
                </li>
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <Link href="/" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                    <span className="font-bold">Github</span>
                  </Link>
                </li>
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <Link href="/" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                    <span className="font-bold">Sign In</span>
                  </Link>
                </li>
              </ul>
              <div className="xl:hidden">
                <button
                  id="close"
                  className={`${menu ? "" : "hidden"} close-m-menu focus:ring-2 focus:ring-black focus:outline-none`}
                  onClick={() => setMenu(!menu)}
                >
                  <Image
                    width={20}
                    height={20}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg"
                    alt="close"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <nav className="f-f-l relative z-10">
          <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
            <div>
              <Image
                width={200}
                height={15}
                // className="w-[14vw]"
                src="/fullLogo.png"
                alt="logo"
              />
            </div>
            <div className="flex items-center text-white text-base font-medium">
              <ul className="flex items-center pr-3 xl:pr-12">
                <li className="cursor-pointer hover:text-gray-300 ease-in">
                  <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-white">
                    Home
                  </Link>
                </li>
                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                  <Link href="#features" className="focus:outline-none focus:ring-2 focus:ring-white">
                    Features
                  </Link>
                </li>
                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                  <Link href="https://github.com/SnipSavvy?tab=repositories" target="_blank" className="focus:outline-none focus:ring-2 focus:ring-white">
                    Github
                  </Link>
                </li>
              </ul>
              <SignUpButton description="Sign In"></SignUpButton>
            </div>
          </div>
        </nav>
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
            className="w-full mt-8 md:mt-0 object-fill md:w-[60%] md:-ml-10 lg:-ml-10 xl:ml-16"
            src="/photo.png"
            alt="sample page"
            role="Image"
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
