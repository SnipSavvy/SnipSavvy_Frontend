"use client";
import React, { Suspense } from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { useSearchParams } from "next/navigation";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import axios from "axios";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const SnippetModal = () => {
  const searchParams = useSearchParams();
  const collection = searchParams.get("collection")
    ? searchParams.get("collection")
    : "";
  const workspace = searchParams.get("workspace")
    ? searchParams.get("workspace")
    : "";
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [data, setData] = React.useState({
    title: "",
    description: "",
    code: "",
    tags: [],
    category_id: "",
  });
  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput) {
      e.preventDefault();
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      padding: "0.6rem",
      fontSize: "1rem",
    },
  }));

  const handleCreateSnippet = async () => {
    const body = {
      title: data.title,
      description: data.description,
      code: data.code,
      tags: tags,
      category_id: `${collection}`,
      workspace_id: `${workspace}`,
    };

    {
      collection &&
        (await axios.post("http://localhost:8001/v1/api/snippet", body).then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        ));
    }
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-5/6 ">
        <Sheet>
          <SheetTrigger>
            <div className="relative">
              <BootstrapTooltip title="Add a Snippet">
                <div className="text-2xl rounded-full bg-blue-800 h-10 w-10 items-center flex self-center justify-center hover:bg-blue-900 transition-colors duration-300">
                  <span className="text-white">+</span>
                </div>
              </BootstrapTooltip>
              {/* {tooltip && (
              <div className="absolute w-100 text-sm  text-white top-8   px-5 py-1 rounded-lg shadow-lg bg-zinc-800">
                Add a snippet
              </div>
            )} */}
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Make your new snippet with SnipSavvy</SheetTitle>
              <SheetDescription>
                <div className="fixed top-16 right-5 h-full w-1/5 bg-black transition-all duration-900 z-50">
                  <div className="p-4 space-y-4">
                    <div>
                      <label className="block text-md font-medium text-gray-200">
                        Title
                      </label>
                      <input
                        type="text"
                        placeholder="Title"
                        onChange={(e) =>
                          setData({ ...data, title: e.target.value })
                        }
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-md font-medium text-gray-200">
                        Description
                      </label>
                      <input
                        type="text"
                        placeholder="Description"
                        onChange={(e) =>
                          setData({ ...data, description: e.target.value })
                        }
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-md font-medium text-gray-200">
                        Code
                      </label>
                      <textarea
                        placeholder="Code..."
                        onChange={(e) =>
                          setData({ ...data, code: e.target.value })
                        }
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-md font-medium text-gray-200">
                        Tags
                      </label>
                      <input
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={handleAddTag}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                      />
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      style={{ height: "3rem" }}
                      onClick={() => handleCreateSnippet()}
                      variant="contained"
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </Suspense>
  );
};

export default SnippetModal;
