import { Button } from "@/components/LandingPage/Button";
import Link from "next/link";
import { SignUpButton } from "@/components/SignUpButton/SignUpButton";
import Hero from "@/components/LandingPage/Hero";
import UpcomingFeature from "@/components/LandingPage/UpcomingFeatures";
import Features from "@/components/LandingPage/Features";
import Footer from "@/components/LandingPage/Footer";
import Working from "@/components/LandingPage/Bug";
import Bug from "@/components/LandingPage/Bug";
import GoToTop from "@/components/LandingPage/scrollToTop";
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] text-gray-50">
      <main className="flex-1">
        <Hero />
       
        <section className="w-full py-12 md:py-24 lg:py-24 bg-[#151519] text-gray-50">
          <div className="container px-4 md:px-6">
            <div className=" items-center gap-6  lg:gap-10">
              <div className="flex justify-center space-y-4">
                {/* <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-lg text-gray-50">
                    Key Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00AEFF]">
                    Organize Your Code Snippets with Ease
                  </h2>
                  <p className="max-w-[600px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    SnipSavvy provides a clean and intuitive interface to help
                    you quickly find, organize, and share your code snippets.
                    Never waste time searching for that one snippet you need
                    again.
                  </p>
                </div> */}
                <Features />

                {/* <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#00B4D8]" />
                    <span className="text-[#00B4D8]">
                      Powerful search and filtering
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#00B4D8]" />
                    <span className="text-[#00B4D8]">
                      Seamless integration with your workflow
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#00B4D8]" />
                    <span className="text-[#00B4D8]">
                      Secure sharing and collaboration
                    </span>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-20 lg:pt-32 pb-24 bg-[#0E0E11] px-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2
                // style={{ textShadow: "0px 0px 10px #006BCB" }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-50"
              >
                SnipSavvy Offers
              </h2>
              <p className="mx-auto max-w-[700px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"></p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"></div>
          </div>
          <div className="overflow-y-hidden">
            <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
              <section className="bg-[#0E0E11] py-2">
                <div
                  tabIndex={0}
                  aria-label="group of cards"
                  className="focus:outline-none px-4 lg:px-0"
                >
                  <div className="mx-auto container flex flex-wrap px-2 lg:px-24">
                    <div
                      tabIndex={0}
                      aria-label="card 1"
                      className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pb-10 lg:pt-10"
                    >
                      {/* <div className=" flex flex-shrink-0 mr-5 text-white">
                        <ClockIcon className="h-8 w-8 text-[#045AA6]" />
                      </div> */}

                      <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                        <div className="absolute text-white bottom-0 left-0 bg-[#045AA6] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                          <ClockIcon className="h-8 w-8 text-[#fff]" />
                        </div>
                      </div>

                      <div className="md:w-9/12 lg:w-9/12">
                        <h2
                          tabIndex={0}
                          className="focus:outline-none text-lg font-semibold leading-5 text-white"
                        >
                          Save Time
                        </h2>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                        >
                          Quickly find and reuse the code snippets you need,
                          reducing development time and increasing productivity.
                        </p>
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      aria-label="card 2"
                      className="focus:outline-none pl-8 flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10"
                    >
                      {/* <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                        <FolderIcon className="h-8 w-8 text-[#045AA6]" />
                      </div> */}
                      <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                        <div className="absolute text-white bottom-0 left-0 bg-[#045AA6] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                          <FolderIcon className="h-8 w-8 text-[#fff]" />
                        </div>
                      </div>
                      <div className="md:w-9/12 lg:w-9/12 ">
                        <h2
                          tabIndex={0}
                          className="focus:outline-none text-lg font-semibold leading-5 text-white"
                        >
                          Stay Organized
                        </h2>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                        >
                          Keep your code snippets neatly organized and easily
                          accessible, so you can focus on writing great code.
                        </p>
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      aria-label="card 3"
                      className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pt-10 lg:pb-20"
                    >
                      {/* <div className=" flex flex-shrink-0 mr-5 text-white">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg3.svg"
                          alt="html-tag"
                        />
                      </div> */}
                      <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                        <div className="absolute text-white bottom-0 left-0 bg-[#045AA6] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                          <LayersIcon className="h-8 w-8 text-[#fff]" />
                        </div>
                      </div>
                      <div className="md:w-9/12 lg:w-9/12 ">
                        <h2
                          tabIndex={0}
                          className="focus:outline-none text-lg font-semibold leading-5 text-white"
                        >
                          Personalized Experience
                        </h2>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                        >
                          Empowers users with personalized workspaces and
                          repositories tailored to their individual preferences
                          and workflow.
                        </p>
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      aria-label="card 4"
                      className="focus:outline-none pl-8 flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-indigo-400 pt-10 lg:pb-20"
                    >
                      {/* <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                        <UsersIcon className="h-8 w-8 text-[#045AA6]" />
                      </div> */}

                      <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                        <div className="absolute text-white bottom-0 left-0 bg-[#045AA6] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                          <UsersIcon className="h-8 w-8 text-[#fff]" />
                        </div>
                      </div>
                      <div className="md:w-9/12 lg:w-9/12 ">
                        <h2
                          tabIndex={0}
                          className="focus:outline-none text-lg font-semibold leading-5 text-white"
                        >
                          Effortless Collaboration
                        </h2>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                        >
                          Share and collaborate on code snippets with your team,
                          ensuring everyone has access to the resources they
                          need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* </dh-component> */}
              {/* Code block ends */}
            </div>
          </div>
        </section>

        {/* <Working /> */}

        <UpcomingFeature />
        <Bug />
      </main>
      <GoToTop/>
      <Footer />
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FolderIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LayersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
