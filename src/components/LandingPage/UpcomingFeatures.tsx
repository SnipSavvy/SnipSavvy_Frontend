"use client"
import React from "react";
import { SiGooglegemini } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import { IoExtensionPuzzle } from "react-icons/io5";
import Image from "next/image";
import { useThemeContext } from "./ThemeContext";

const UpcomingFeature: React.FC = () => {

  const { theme, setTheme } = useThemeContext()

  return (
    <div className={`${theme === "true" ? "bg-[#0E0E11] text-gray-200" : "bg-white text-black"} overflow-y-hidden px-32`}>
      <div className="xl:mx-auto xl:container mb-20 xl:px-20 md:px-6 px-4 ">
        <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
          <div className="w-[80%]">
            <p
              // style={{ textShadow: "0px 0px 10px #006BCB" }}
              className="lg:text-6xl text-3xl font-extrabold"
            >
              Upcoming Features
            </p>
            <p className="text-lg leading-7 mt-4 w-full">
              Empowering developer&apos; community with our upcoming features.
            </p>
            <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
              <Image
                width={100}
                height={100}
                src="/goku.gif"
                alt="ongoing meeting"
                unoptimized
                className="w-full obejct-fit object-center object-fill h-full"
              />
            </div>
            <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
              <div className="flex items-center">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <SiGooglegemini size={40} color="#F9C23C" />
                  </div>
                </div>
                <div className="flex items-start flex-col ml-2 pt-8">
                  <h2 className="text-xl font-bold leading-4">
                    AI-Enhancements
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2">
                    Harness AI capabilities to automate tasks.
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-4">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <FaHistory size={40} color="#FF5B5B" />
                  </div>
                </div>
                <div className="flex items-start flex-col ml-2 pt-8">
                  <h2 className="text-xl font-bold leading-4">
                    History Tracking
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2">
                    Track changes and revert to previous versions of snippets.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <TbUsersGroup size={40} color="#00AEFF" />
                  </div>
                </div>
                <div className="flex items-start flex-col ml-2 pt-8">
                  <h2 className="text-xl font-bold leading-4">
                    Community
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2">
                    Enhance foster collaboration and knowledge sharing.{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-4">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <IoExtensionPuzzle size={40} color="#AB2BB4" />
                  </div>
                </div>
                <div className="flex items-start flex-col ml-2 pt-8">
                  <h2 className="text-xl font-bold leading-4">
                    Integrate Extensions
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2">
                    Seamlessly integrate with Chrome and VS Code.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
            <Image
              width={72}
              height={53}
              src="/goku.gif"
              alt="ongoing meeting"
              unoptimized
              className={`${theme === "true" ? "" : "shadow-2xl shadow-black"} w-[72%] object-fit object-center object-fill h-[53vh] ml-28 rounded-xl opacity-90`}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default UpcomingFeature;
