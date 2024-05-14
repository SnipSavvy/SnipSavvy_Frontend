'use client'
import React from 'react'
import { Badge } from "@/components/ui/badge";
import { LuCopyPlus } from "react-icons/lu";
import "prismjs";
import "prismjs/themes/prism-twilight.css";

interface props {
    codeData: Array<any>;
}
function CollabCodeBlock({codeData}:props) {
  const copyToClipboard = (code: string) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert('Code Copied to clipboard')
      })
      .catch((error) => {
        console.error("Unable to copy code to clipboard", error);
      });
  };
  const flag = Array.isArray(codeData) ? true : false;
  const cleanCode = flag===true && codeData[0].code.trim().replace(/`/g, "");
  return (
    <div className='w-full z-[2]'>
        {flag===true && (<div>
            <h2 className="text-3xl text-white p-2 mb-2 font-bold overflow-y-auto">
              {codeData[0].title}
            </h2>
            <h2 className="text-lg text-white p-2 font-semibold mb-2 ">
              {codeData[0].description}
            </h2>
            <div className='mb-8'>
                {codeData[0].tags.map((tag: any, index: any) => (
              <div key={index} className="inline-flex">
                <Badge
                  variant="default"
                  className="px-2 py-1 rounded-xl bg-purple-700 hover:bg-purple-500 mx-1 mb-2"
                >
                  {tag}
                </Badge>
              </div>))}
              <button
              className="float-right mr-4 text-zinc-100 font-bold bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2"
              onClick={() => copyToClipboard(cleanCode)}
              >
                    <LuCopyPlus />
              </button>
            </div>
            <div className="min-h-[50vh] min-w-[40vw] w-full h-[55vh] rounded-lg overflow-y-auto flex py-2 rounded-b-md border-zinc-900 bg-zinc-900 text-white">
                <pre className="p-4 outline-none">
                  <code>
                    {cleanCode}
                  </code>
                </pre>
            </div>
        </div>)}
    </div>
  )
}

export default CollabCodeBlock