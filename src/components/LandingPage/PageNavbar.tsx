import React, { useState } from "react";
import { SignUpButton } from "../SignUpButton/SignUpButton";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PageNavbar() {
  useGSAP(() => {
    // gsap code here...
    gsap.from(".nav_box", {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power1.out",
    }); // <-- automatically reverted
  });

  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <nav className="nav_box lg:hidden relative z-40">
        <div className="flex py-2 justify-between items-center px-4">
          <div>
            <Image
              width={200}
              height={15}
              className="w-[30vw]"
              src="/fullLogo.png"
              alt="logo"
            />
          </div>
          <div className="visible">
            <button
              id="open"
              onClick={() => setMenu(!menu)}
              className={`${menu ? "hidden" : ""} pr-2 focus:outline-none focus:ring-2 focus:ring-black`}
            >
              <Image
                src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000"
                width={20}
                height={20}
                alt="menu"
                className="invert scale-125"
              />
            </button>
            <ul
              id="list"
              className={`${menu ? "" : "hidden"} pl-4 flex flex-col text-center justify-center w-screen p-2 border-r bg-[#222222] text-white absolute rounded top-0 left-0`}
            >
              <li className="cursor-pointer text-sm leading-3 tracking-normal mt-10 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <Link
                  href="/"
                  className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <span className="font-bold">Home</span>
                </Link>
              </li>
              <li className="cursor-pointer text-sm leading-3 mt-1 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <Link
                  href="/features"
                  className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <span className="font-bold">Features</span>
                </Link>
              </li>
              <li className="cursor-pointer text-sm leading-3 mt-1 tracking-normal py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
                <Link
                  href="/"
                  className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <span className="font-bold">Pricing</span>
                </Link>
              </li>
              <li className="cursor-pointer text-sm leading-3 mt-1 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <Link
                  href="/"
                  className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <span className="font-bold">Github</span>
                </Link>
              </li>
              <li className="cursor-pointer text-sm leading-3 mt-1 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <Link
                  href="/"
                  className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <span className="font-bold">Sign In</span>
                </Link>
              </li>
            </ul>
            <div className="xl:hidden">
              <button
                id="close"
                className={`${menu ? "" : "hidden"} pr-2 close-m-menu focus:ring-2 focus:ring-black focus:outline-none`}
                onClick={() => setMenu(!menu)}
              >
                <Image
                  width={20}
                  height={20}
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg"
                  alt="close"
                  className="invert scale-125"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav className="nav_box f-f-l relative z-10">
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
                <Link
                  href="/"
                  className="focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Home
                </Link>
              </li>
              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                <Link
                  href="#features"
                  className="focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Features
                </Link>
              </li>
              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                <Link
                  href="https://github.com/SnipSavvy?tab=repositories"
                  target="_blank"
                  className="focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Github
                </Link>
              </li>
            </ul>
            <SignUpButton description="Sign In"></SignUpButton>
          </div>
        </div>
      </nav>
    </>
  );
}
