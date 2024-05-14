import React, { useState, useEffect, useRef, Suspense } from "react";
import { FaFolderOpen } from "react-icons/fa";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { BsDot } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import { MdEdit, MdDelete } from "react-icons/md";
import { baseURL } from "@/config";
import DeleteCollectionModal from "./DeleteCollectionModal";
import EditCollection from "./EditCollection";
const Collection = () => {
  const [showInput, setShowInput] = useState(false);
  const [collection, setCollection] = useState<any>([]);
  const [data, setData] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const workspace = searchParams.get("workspace") || "";
  const collectionid = searchParams.get("collection") || "";
  const shared = searchParams.get("shared") || "";
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeCollectionIndex, setActiveCollectionIndex] = useState<
    number | null
  >(null);
  const [singleCollection, setSingleCollection] = useState<collectionItem>({
    _id: "",
    name: "",
    description: "",
  });
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
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

  interface Workspace {
    _id: string;
    name: string;
    description: string;
  }
  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
    collection: collectionItem
  ) => {
    e.preventDefault();
    setDropdownPosition({ x: e.clientX, y: e.clientY });
    setActiveCollectionIndex(index);
    setIsDropdownOpen(true);
    setSingleCollection(collection);
  };
  const [deleteCollectionModalOpen, setDeleteCollectionModalOpen] =
    useState(false);
  const [editCollectionOpenby, setEditCollectionOpenby] =
    useState<boolean>(false);
  const handleOptionClick = (option: string) => {
    console.log("Option clicked:", option);
    switch (option) {
      case "edit":
        setEditCollectionOpenby(true);
        console.log("Edit clicked");
        break;
      case "delete":
        console.log("Delete clicked");
        setDeleteCollectionModalOpen(true);

        break;

      case "share":
        console.log("Share clicked");
        break;
      default:
        break;
    }
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  console.log("w_id=>", workspace);

  const fetchCategories = () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(`${baseURL}/v1/api/category/${workspace}`, { headers })
      .then((response) => {
        setCollection(response.data);
        console.log("collections=>", response.data.data);

        setIsDataLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setIsDataLoading(true);
    workspace && fetchCategories();
  }, [workspace]);

  const handleAddClick = () => {
    setShowInput(!showInput);
  };

  const handleCreateCollection = async () => {
    setIsLoading(true);
    const body = {
      id: workspace,
      name: data,
      description: "SnipSavvy Project Snippets",
    };
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    await axios
      .post(`${baseURL}/v1/api/category`, body, { headers })
      .then((response) => {
        console.log(response);
        // [FIX ME] at a toast here, instead of alert
        fetchCategories();
        setShowInput(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateCollection();
    }
  };

  const updateUrl = (name: string) => {
    if (shared) {
      const query = { shared, workspace, collection: name };
      router.push(`?${new URLSearchParams(query).toString()}`);
    } else {
      const query = { workspace, collection: name };
      router.push(`?${new URLSearchParams(query).toString()}`);
    }
  };

  const colorOptions = [
    "#5AC341",
    "#ACA035",
    "#A33B3A",
    "#3C50A6",
    "#A73C5F",
    "#3CA686",
  ];

  interface collectionItem {
    name: string;
    description: string;
    _id: string;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-[20vw] bg-[#1a1b1c] overflow-none">
        <div>
          <div className="flex m-8 items-center justify- ">
            <div className="mr-3 text-gray-400  ">
              <FaFolderOpen size={20} />
            </div>
            <div className="flex justify-between w-full">
              <p className="text-md text-gray-400 font-bold">COLLECTIONS</p>
              <button
                className="font-extrabold rounded-full text-2xl -mt-1.5  text-gray-400 hover:text-white"
                onClick={handleAddClick}
              >
                {showInput ? <FiMinus /> : "+"}
              </button>
            </div>
            <hr />
          </div>
          {showInput && (
            <div className="flex items-center ">
              <Input
                value={data}
                type="text"
                className="mb-8 ml-4 w-64 h-10 rounded p-1 pl-4 text-white"
                placeholder="Collection name .."
                onChange={(e) => setData(e.target.value)}
                onKeyDown={handleKeyPress}
              />

              {!isLoading ? (
                <Button
                  variant="outline"
                  className="mb-8 w-16 ml-2 mr-2 rounded h-8 bg-gray-600"
                  onClick={handleCreateCollection}
                >
                  Save
                </Button>
              ) : (
                <CircularProgress
                  color="success"
                  className="mb-10 ml-2"
                  size={25}
                />
              )}
            </div>
          )}
          <div className="-mt-4">
            {workspace ? (
              !isDataLoading ? (
                collection?.map((item: collectionItem, index: number) => (
                  <div
                    key={item._id}
                    onContextMenu={(e) => handleRightClick(e, index, item)}
                    style={{
                      backgroundColor:
                        collectionid === item?._id ? "#131212" : "",
                      color: collectionid === item?._id ? "white" : "",
                    }}
                    onClick={() => updateUrl(item._id)}
                    className="hover:bg-[#131212] h-10 w-64 rounded-xl m-auto ml-4 pt-1 text-lg mt-1 text-slate-300 hover:text-white cursor-pointer flex"
                  >
                    <span className="-mt-2.5">
                      <BsDot size={50} color={colorOptions[index % 6]} />
                    </span>
                    {item?.name}
                  </div>
                ))
              ) : (
                <div className="w-60 ml-8 mt-10 flex flex-col gap-4">
                  <Skeleton
                    sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                    height={30}
                    variant="rectangular"
                  />
                  <Skeleton
                    sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                    height={30}
                    variant="rectangular"
                  />
                  <Skeleton
                    sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                    height={30}
                    variant="rectangular"
                  />
                  <Skeleton
                    sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                    height={30}
                    variant="rectangular"
                  />
                </div>
              )
            ) : (
              <h1 className="font-bold text-2xl opacity-50 text-center mt-20">
                Select a workspace to get started
              </h1>
            )}
          </div>
        </div>
      </div>
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
          <ul className="w-20">
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
        </div>
      )}
      <DeleteCollectionModal
        open={deleteCollectionModalOpen}
        onClose={() => setDeleteCollectionModalOpen(false)}
        collection={singleCollection}
        fetchCategories={fetchCategories}
      />
      <EditCollection
        open={editCollectionOpenby}
        onClose={() => setEditCollectionOpenby(false)}
        workspace={workspace}
        collection={singleCollection}
        fetchCategories={fetchCategories}
      />
    </Suspense>
  );
};

export default Collection;
