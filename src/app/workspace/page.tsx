"use client";
import Drawer from "@/components/RightDrawer/Drawer";
import SnippetSection from "@/components/MiddleSection/SnippetSection";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import { IoIosAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import Welcome from "@/components/MiddleSection/Welcome";
import { useSession } from "next-auth/react";
import axios from "axios";
import { baseURL } from "@/config";
import { IoIosArrowForward } from "react-icons/io";
import { RiRefreshLine } from "react-icons/ri";
import SearchParamsHandler from "./SearchParamHandler";
import { ToastContainer } from "react-toastify";

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const WorkspacePage: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [isEditable, setIsEditable] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter()
  const pathname = usePathname()
  const handleAdd = () => {
    setOpenDrawer(true);
    const nextSearchParams = new URLSearchParams(searchParams.toString());
    nextSearchParams.append("add", "true");
    router.push(`${pathname}?${nextSearchParams.toString()}`);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        handleOpen();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [inpText, setInpText] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const globalSearch = async () => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios
        .get(`${baseURL}/v1/api/snippet/global?text=${inpText}`, { headers })
        .then((response) => {
          setSearchData(response.data);
        });
    };
    inpText ? globalSearch() : setSearchData([]);
  }, [inpText]);

  const searchParams = useSearchParams();
  const collection = searchParams.get("collection") ? searchParams.get("collection") : ""
  const snippet = searchParams.get("snippet") ? searchParams.get("snippet") : ""
  const Router = useRouter();

  const updateURL = (snippet: any) => {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);

    searchParams.set("workspace", snippet.workspace_id);
    searchParams.set("collection", snippet.category_id);
    searchParams.set("snippet", snippet._id);

    const newUrl = `${currentUrl.origin}${currentUrl.pathname}?${searchParams.toString()}`;

    window.history.replaceState({}, "", newUrl);
    handleClose();
  };

  const [isRefresh, setIsRefresh] = useState<boolean>()
  const toggleRefresh = () => {
    setIsRefresh(!isRefresh)
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler closeGlobalSearch={()=>handleClose()}/>
      </Suspense>
      <div
        style={{ width: "75vw" }}
        className="fixed top-0 right-0 h-screen text-white bg-zinc-900"
      >
        <div
          style={{ width: "75vw" }}
          className="fixed top-0   pr-3 flex flex-col justify-between items-start bg-zinc-900  py-4"
        >
          <div className="flex w-full justify-end">
            <div className="flex w-full border-b-1 border-gray-700 shadow-md">
              <div className=" ml-6 px-2 h-10 flex items-center rounded-l">
                <SearchIcon />
              </div>
              {open && (
                <div>
                  <Modal
                    className="backdrop-blur-sm"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        ...style,
                        height: 500,
                      }}
                      className="bg-zinc-950  rounded-xl"
                    >
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Search Snippet
                        {/* <hr className="my-4"/> */}
                      </Typography>
                      {/* <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, display: "flex" , width:'100vw'}}
                    > */}
                      
                        <div>
                          <SearchParamsHandler closeGlobalSearch = {() => handleClose()} />
                        </div>
                      
                     

                      {inpText && (
                        <div className="w-[95%] m-auto mt-4 max-h-[40vh] overflow-auto">
                          {searchData &&
                            searchData.map((snippet: any, index: any) => (
                              <div
                                key={index}
                                onClick={() => updateURL(snippet)}
                                className="shadow-2xl mr-2 flex flex-col gap-2 rounded-xl mb-6 cursor-pointer border-2 border-zinc-950 hover:border-2 hover:border-slate-500 p-2"
                              >
                                <p className="flex">
                                  {" "}
                                  <IoIosArrowForward className="mt-1 mr-1" />
                                  workspace{" "}
                                  <IoIosArrowForward className="mt-1 mr-1" />
                                  collection{" "}
                                  <IoIosArrowForward className="mt-1 mr-1" />
                                  {snippet.title}{" "}
                                </p>
                                <div className="flex">
                                  <div>
                                    <p className="text-2xl font-semibold">
                                      {" "}
                                      {snippet.title}{" "}
                                    </p>
                                    <p> {snippet.description} </p>
                                  </div>
                                </div>
                                <div className="flex">
                                  {snippet.tags.map((tag: any, index: any) => (
                                    <p
                                      key={index}
                                      className="bg-black mr-2 p-1 pl-2 pr-2 rounded-xl"
                                    >
                                      {" "}
                                      {tag}{" "}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            ))}
                        </div>
                      )}
                    </Box>
                  </Modal>
                </div>
              )}
              <input
                type="text"
                className="w-full h-10 vh-5 bg-zinc-900 px-4 hover:shadow-outline focus:outline-none rounded-r text-lg text-gray-600 placeholder-gray-500 font-mono"
                placeholder="Find by Tag, Description , title..."
                onClick={handleOpen}
              />
              <div
                onClick={handleOpen}
                className="px-4 py-2 rounded-xl mb-2 flex   items-center text-xs text-gray-600 border-2 border-gray-600 shadow-lg   w-fit"
              >
                <span>CTRL+K</span>
              </div>
              <div className="w-2/12 vh-6 flex justify-between pl-6 items-center">
                <button
                  className="bg-blue-600 hover:bg-blue-400 duration-300 rounded-xl text-xl px-3 py-2 mb-2 text-white"
                  onClick={handleAdd}
                >
                  <IoIosAdd />
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-400 duration-300 rounded-xl text-xl px-3 py-2 mb-2 text-white"
                  onClick={toggleRefresh}
                >
                  <RiRefreshLine />
                </button>
                {collection && (
                  <Drawer
                    className="fixed top-16 right-0"
                    isOpen={openDrawer}
                    setIsOpen={setOpenDrawer}
                    isEditable={true}
                    setIsEditable={setIsEditable}
                    shared="false"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 overflow-hidden p-4">
            <SnippetSection isRefresh={isRefresh} />
            <Drawer
              className="fixed top-16 right-0"
              isOpen={openDrawer}
              setIsOpen={setOpenDrawer}
              isEditable={isEditable}
              setIsEditable={setIsEditable}
              shared="false"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default WorkspacePage;
