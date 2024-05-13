import React, { Suspense } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { baseURL } from "@/config";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShareSnippet from "@/components/RightDrawer/ShareSnippet";
import CodeBlock from "@/components/RightDrawer/CodeBlock";
import DeleteSnippet from "./DeleteSnippet";
interface SnippetCardProps {
  title: string;
  code: string;
  description: string;
  tags: (
    | "C++"
    | "Python"
    | "JavaScript"
    | "Java"
    | "TypeScript"
    | "React"
    | "Node"
  )[];
  _id: string;
}

const SnippetCard: React.FC<SnippetCardProps> = ({
  title,
  code,
  tags,
  _id,
}) => {
  const languageIcon =
    "https://img.icons8.com/?size=50&id=22183&format=png&color=808080";

  const languages = {
    Python: "/icon_py.png",
    JavaScript: "/icon_js.png",
    Java: "/icon_java.png",
    TypeScript: "/icon_ts.png",
    "C++": "/icon_cpp.png",
    React: "/icon_react.png",
    Node: "/icon_node.png",
  };

  const searchParams = useSearchParams();
  const snippet_id = searchParams.get("snippet") || "";
  console.log("snippet_id=>", snippet_id);
  console.log("id=>", _id);

  const [shareSnippet, setShareSnippet] = useState(false);

  const Router = useRouter();
  const updateUrl = (id: string) => {
    const workspace = searchParams.get("workspace") || "";
    const collection = searchParams.get("collection") || "";
    const query: Record<string, string> = {
      workspace,
      collection,
    };
    if (id) {
      query.snippet = id;
    }
    Router.push(`?${new URLSearchParams(query).toString()}`);
  };

  const BasicPopover: React.FC<{}> = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
      null
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
      setShareSnippet(false);
    };
    const newUpdateUrl = () => {
      const workspace = searchParams.get("workspace") || "";
      const collection = searchParams.get("collection") || "";
      // const snippet = searchParams.get("snippet") || "";
      const query: Record<string, string> = {
        workspace,
        collection,
        // snippet,
      };
      query.snippet = _id;
      query.edit = "true";
      Router.push(`?${new URLSearchParams(query).toString()}`);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const [deleteSnippetOpen, setDeleteSnippetOpen] = useState(false);
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Button aria-describedby={id} onClick={handleClick}>
            <MoreVertIcon />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ width: 75, height: 95 }} className="no-scrollbar">
              <div className="z-200 flex flex-col bg-zinc-950 p-2 absolute w-[10-vw] text-white">
                <button
                  className="bg-zinc-700 px-2 mb-1 hover:bg-zinc-800"
                  onClick={(e) => setDeleteSnippetOpen(true)}
                >
                  Delete
                  {deleteSnippetOpen && (
                    <DeleteSnippet
                      open={deleteSnippetOpen}
                      onClose={() => setDeleteSnippetOpen(false)}
                      snippet_id={_id || ""}
                    />
                  )}
                  {/* <DeleteSnippetonClose={() => setDeleteSnippetOpen(false)} snippet_id = {_id || ""} /> */}
                </button>
                <button
                  onClick={() => newUpdateUrl()}
                  className="bg-zinc-700 px-2 mb-1 hover:bg-zinc-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => setShareSnippet(true)}
                  className="bg-zinc-700 px-2 hover:bg-zinc-800"
                >
                  share
                </button>
              </div>
            </Typography>
          </Popover>

        {shareSnippet && <ShareSnippet snippet_id={_id} onClose={() => handleClose()} />}
      </div>
         
      </Suspense>
    );
  };

  const lang_icon = tags[0];
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
      // style={{borderRadius:"1rem"}}
        className={`flex relative border-zinc-800  ${snippet_id == _id ? "bg-zinc-950 border-zinc-300" : "hover:bg-zinc-950 hover:border-zinc-300"} border-transparent shadow-xl overflow-hidden mb-6 mr-4 p-3 transition-border duration-500 rounded-xl`}
      >
        <div
          onClick={() => updateUrl(_id)}
          className={`flex items-start border-zinc-800 rounded-lg ${snippet_id == _id ? "bg-zinc-950 border-zinc-300" : ""} border-transparent  `}
          style={{
            width: "18vw",
            height: "26vh",
            borderRadius: "0.6rem",
            gap: "11px",
            marginLeft: "2px",
          }}
        >
          <div className="flex items-center mr-2 text-gray-200">
            <Image
              src={languages[lang_icon] || languageIcon}
              alt="Icon"
              className="mt-1"
              width={25}
              height={25}
            />
          </div>
          <div className="flex flex-col justify-start w-full">
            <div className="text-2xl text-start font-semibold font-mono text-gray-300 mb-2">
              {title}
            </div>
            <div className="text-md text-start font-semibold leading-7 text-gray-400 pt-2 pb-2 ">
              {code.substring(0, 60)}
            </div>
            <div className="flex  flex-wrap mt-2">
              {tags.slice(0, 3).map((tag, index) => (
                <div
                  key={index}
                  className="bg-blue-100 text-blue-800 rounded-full py-1 px-3 text-sm font-medium mr-2 mb-2"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ml-auto">
          <div className="rounded-full h-10 w-10 flex items-center justify-center border-zinc-700 hover:border-zinc-400">
            <BasicPopover />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SnippetCard;
