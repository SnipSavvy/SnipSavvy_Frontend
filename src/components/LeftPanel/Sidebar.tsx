"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import { CiSettings, CiLogout } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";

import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Modal from "./Modal";
import Collection from "./Collection";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { MdEdit, MdDelete } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import { baseURL } from "@/config";
import SettingsModal from "../Settings/SettingsModal";
import DeleteModal from "./DeleteModal";
import useFetch from "@/network/useFetch";
import { signOut, useSession } from "next-auth/react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import ShareModal from "./ShareModal";
import EditModal from "./EditModal";
import { styled } from "@mui/material/styles";

import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

// const Tooltip = styled(({ className, ...props }: TooltipProps) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))({
//   [`& .${tooltipClasses.tooltip}`]: {
//     maxWidth: 500,
//   },
// });

const Sidebar = () => {
  const [workspace, setWorkspace] = useState<any>([]);
  const [sharedWorkspace, setSharedWorkspace] = useState<any>([]);
  const [isSharedOpen, setIsSharedOpen] = useState(false);

  const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(
    null
  );

  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeWorkspaceIndex, setActiveWorkspaceIndex] = useState<
    number | null
  >(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: any) => {
    console.log("in here");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [singleWorkSpace, setSingleWorkspace] = useState<Workspace>({
    _id: "",
    name: "",
    description: "",
  });
  const [modalClose, setModalClose] = useState(false);
  // const [singleWorkSpace, setSingleWorkspace] = useState<Workspace>();
  const router = useRouter();
  const session = useSession();
  const email = session.data?.user?.email;

  const fetchWorkspace = () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(`${baseURL}/v1/api/workspace`, { headers })
      .then((response) => {
        setWorkspace(response.data);
        // setIsDataLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setIsDataLoading(false);
      });
    axios
      .get(`${baseURL}/v1/api/workspace?email=${email}`, { headers })
      .then((response) => {
        setSharedWorkspace(response.data);
        setIsDataLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsDataLoading(false);
      });
  };
  console.log(email)
  useEffect(() => {
    setIsDataLoading(true);
    const fetchWorkspace = async () => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios
        .get(`${baseURL}/v1/api/workspace`, { headers })
        .then((response) => {
          setWorkspace(response.data);
          console.log("My wworkspaces", response.data)
          // setIsDataLoading(false);
        })
        .catch((error) => {
          console.log(error);
          // setIsDataLoading(false);
        });
      await axios
        .get(`${baseURL}/v1/api/workspace?email=${email}`, { headers })
        .then((response) => {
          setSharedWorkspace(response.data);
          console.log("shared workspaces =>", response.data);
          setIsDataLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsDataLoading(false);
        });
    };

    fetchWorkspace();
  }, [email]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    signOut({ callbackUrl: "https://snipsavvy.vercel.app/" });
  };

  const updateUrl = (name: string) => {
    setSelectedWorkspace(name);
    localStorage.setItem("selectedWorkspace", name);

    const query = { workspace: name };
    router.push(`?${new URLSearchParams(query).toString()}`);
  };

  interface Workspace {
    _id: string;
    name: string;
    description: string;
  }
  const colorOptions = [
    "#2E135D",
    "#164D41",
    "#4A173E",
    "#0E2954",
    "#3C2A21",
    "#2D4263",
  ];
  const sharedcolorOptions = [
    "#0E2954",
    "#3C2A21",
    "#2D4263",
    "#2E135D",
    "#164D41",
    "#4A173E",
  ];

  const searchParams = useSearchParams();
  const w_id = searchParams.get("workspace") || "";

  useEffect(() => {
    // Add event listener for clicks on the document
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Cleanup: Remove event listener when component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !isDropdownButton(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const isDropdownButton = (target: Node) => {
    return (
      target instanceof Node &&
      dropdownRef.current &&
      dropdownRef.current.contains(target)
    );
  };
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteWorkspaceId, setDeleteWorkspaceId] = useState<string>();

  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
    workspace: any,
    check: string
  ) => {
    e.preventDefault();
    setDropdownPosition({ x: e.clientX, y: e.clientY });
    setActiveWorkspaceIndex(index);
    setIsDropdownOpen(true);
    setSingleWorkspace(workspace);
    setDeleteWorkspaceId(workspace._id);
    if (check === "shared") {
      setIsSharedOpen(true);
      setDeleteWorkspaceId(workspace.workspace_id);
    } else setIsSharedOpen(false);
  };
  const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const handleOptionClick = (option: string) => {
    console.log("Option clicked:", option);
    setIsDropdownOpen(false);

    switch (option) {
      case "edit":
        console.log("Edit clicked");
        setEditModalOpen(true);
        break;
      case "delete":
        console.log("Delete clicked");
        setDeleteModalOpen(true);
        break;

      case "share":
        console.log("Share clicked");
        setShareModalOpen(true);

        break;
      default:
        break;
    }
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" w-[5vw] flex flex-col items-center bg-[#141415] rounded">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="logo"
          className="mt-6 pb-4 opacity-80"
        />

        {/* Main Workspace */}

        <div className="flex-col flex-wrap justify-center">
          <div className="flex-col flex-wrap justify-center overflow-y-auto " style={{maxHeight:"300px"}}>
          {!isDataLoading ? (
            workspace?.map((workspace: Workspace, i: number) => {
              return (
                <Tooltip
                  title={workspace.name}
                  key={workspace._id}
                  placement="top"
                >
                  <div
                    onClick={() => updateUrl(workspace._id)}
                    onContextMenu={(e) =>
                      handleRightClick(e, i, workspace, "owns")
                    }
                    key={workspace._id}
                    className="h-14 w-14 m-4 rounded-xl cursor-pointer hover:border-4 flex items-center justify-center"
                    style={{
                      backgroundColor: colorOptions[i % 6],
                      boxShadow: "1px 1px 3px 1px #0a0a0aad",
                      border: w_id === workspace._id ? "4px solid white" : "",
                    }}
                  >
                    <p className="text-slate-300 font-bold text-xl pl-4 pt-4">
                      {workspace?.name?.substring(0, 2)}
                    </p>
                  </div>
                </Tooltip>
              );
            })
          ) : (
            <div className="flex flex-col gap-4 mt-6">
              <Skeleton
                sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                variant="rectangular"
                width={55}
                height={55}
              />

              <Skeleton
                sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                variant="rectangular"
                width={55}
                height={55}
              />

              <Skeleton
                sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                variant="rectangular"
                width={55}
                height={55}
              />

              <Skeleton
                sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                variant="rectangular"
                width={55}
                height={55}
              />
            </div>
          )}
          </div>
          <hr className="opacity-40 w-[70%] m-auto" />

          {/* Shared Workspace */}
          
          <div className="flex-col flex-wrap justify-center overflow-y-auto " style={{maxHeight:"160px"}}  >
          {!isDataLoading ? (
            sharedWorkspace?.map((workspace: any, i: number) => {
              return (
                <Tooltip
                  title={`${workspace.workspace_name} - @shared`}
                  placement="top"
                  key={workspace.workspace_id}
                >
                  <div
                    onClick={() => updateUrl(workspace.workspace_id)}
                    onContextMenu={(e) =>
                      handleRightClick(e, i, workspace, "shared")
                    }
                    key={workspace.workspace_id}
                    className="h-14 w-14 m-4 rounded-xl cursor-pointer hover:border-4 flex items-center justify-center"
                    style={{
                      backgroundColor: sharedcolorOptions[i % 6],
                      boxShadow: "1px 1px 3px 1px #0a0a0aad",
                      border:
                        w_id === workspace.workspace_id
                          ? "4px solid white"
                          : "",
                    }}
                  >
                    <p className="text-slate-300 font-bold text-xl pl-4 pt-4">
                      {workspace?.workspace_name?.substring(0, 2)}
                    </p>
                  </div>
                </Tooltip>
              );
            })
          ) : (
            <div className="flex flex-col gap-4 mt-6">
              <Skeleton
                sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                variant="rectangular"
                width={55}
                height={55}
              />
            </div>
          )}
          </div>
        </div>
        <div className="">
          <Modal fetchWorkspace={fetchWorkspace} />
        </div>
        <div className="fixed bottom-0 left-2 w-full p-4 text-center">
          <ul className="flex-col">
            <li className="mb-4">
              <CiSettings
                onClick={() => setIsSettingsModalOpen(true)}
                className="text-white text-3xl cursor-pointer"
              />
            </li>
            <Avatar
              className=" cursor-pointer"
              aria-describedby={id}
              onClick={(e) => handleClick(e)}
              sx={{ width: 30, height: 30 }}
              alt="Cindy Baker"
              src={
                session?.data?.user?.image?.toString() ||
                "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-HD-/photo.png"
              }
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              className="ml-2"
            >
              <CiLogout
                onClick={() => handleLogOut()}
                className="ml-2 text-4xl cursor-pointer"
              />
            </Popover>
          </ul>
        </div>
      </div>
      <Collection />
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          style={{
            position: "fixed",
            padding: "10px",
            top: dropdownPosition.y,
            left: dropdownPosition.x,
            backgroundColor: "#131211c4",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(3px)",
            zIndex: 9999,
          }}
          onBlur={() => closeDropdown()}
        >
          {!isSharedOpen ? (
            <ul className="w-20">
              <li
                className="cursor-pointer flex justify-between hover:bg-slate-300 hover:text-black p-1 rounded"
                onClick={() => handleOptionClick("share")}
              >
                Share <FaShareAlt className="mt-1" />
              </li>
              <li
                className="cursor-pointer flex justify-between hover:bg-slate-300 hover:text-black p-1 rounded"
                onClick={() => handleOptionClick("edit")}
              >
                Edit <MdEdit className="mt-1" />
              </li>
              <li
                className="cursor-pointer flex justify-between hover:bg-slate-300 hover:text-black p-1 rounded"
                onClick={() => handleOptionClick("delete")}
              >
                Delete <MdDelete className="mt-1" />
              </li>
            </ul>
          ) : (
            <ul className="w-20">
              <li
                className="cursor-pointer flex justify-between hover:bg-slate-300 hover:text-black p-1 rounded"
                onClick={() => handleOptionClick("delete")}
              >
                Delete <MdDelete className="mt-1" />
              </li>
            </ul>
          )}
        </div>
      )}
      <SettingsModal
        open={isSettingsModalOpen}
        setOpen={setIsSettingsModalOpen}
      />
      <DeleteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        workspace_id={deleteWorkspaceId || ""}
        type={isSharedOpen ? "shared" : ""}
        email={isSharedOpen ? email : ""}
      />
      <ShareModal
        open={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        workspace={singleWorkSpace}
      />
      <EditModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        workspace={singleWorkSpace}
      />
    </Suspense>
  );
};

export default Sidebar;
