"use client";

import { useState,useEffect, Suspense } from "react";
import CodeBlock from "./CodeBlock";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MdCancel } from "react-icons/md";
// import { Suspense } from 'react'

interface Props {
  isOpen: boolean;
  setIsOpen: any;
  isEditable: boolean;
  setIsEditable: any;
  className: string;
  shared: any
}
const RightDrawer = ({isOpen, setIsOpen, isEditable, setIsEditable, className, shared }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter()
  const pathName = usePathname()
  const snippet = searchParams.get("snippet")
    ? searchParams.get("snippet")
    : "";
  const edit = searchParams.get("edit")
    ? searchParams.get("edit")
    : "";
  const collection = searchParams.get("collection")
    ? searchParams.get("collection")
    : "";
  const add = searchParams.get("add")
    ? searchParams.get("add")
    : "";

  const updateUrl = () => {
    const nextSearchParams = new URLSearchParams(searchParams.toString());
    nextSearchParams.delete("snippet");
    if(edit){
      nextSearchParams.delete("edit")
    }
    if(add){
      nextSearchParams.delete("add")
    }
    router.push(`${pathName}?${nextSearchParams.toString()}`);
    setIsOpen(false)
  };

  const closeDrawer = () => {
    const nextSearchParams = new URLSearchParams(searchParams.toString());
    if(add){
      nextSearchParams.delete("add")
    }
    router.push(`${pathName}?${nextSearchParams.toString()}`);
  }
  if(snippet) {
    setIsOpen(true)
  }
  const flag = shared ==="true" ? true : false
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex items-center justify-center">
      { (add==="true" || snippet ) ? (

        <div className={`${className}  min-h-full w-1/2 bg-zinc-900 shadow-lg shadow-zinc-700 border-l-1 border-black transition-all duration-300 overflow-y-auto`}>
          <div className="p-4 overflow-auto">
            {snippet ? (flag != true ? <button className="absolute top-2 right-2 text-white text-2xl" onClick={updateUrl}>
              <MdCancel />
            </button>: null) : (<button className="absolute top-2 right-2 text-white text-2xl" onClick={closeDrawer}>
              <MdCancel />
            </button>)}
            <CodeBlock isEditable={isEditable} setIsEditable={setIsEditable} setIsOpen={setIsOpen} shared={shared}/>
          </div>
        </div>
      ) : null} 
    </div>
     </Suspense>
    )
};

export default RightDrawer;
