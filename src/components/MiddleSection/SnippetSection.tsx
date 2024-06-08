import React, { Suspense, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import SnippetCard from "./SnippetCard/Card";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import Welcome from "./Welcome";
import useFetch from "@/network/useFetch";
import { baseURL } from "@/config";
import { Skeleton } from "@mui/material";
interface SnippetSectionProps {
  isRefresh: any;
}

const SnippetSection: React.FC<SnippetSectionProps> = ({ isRefresh }) => {
  const [openSnippet, setIsOpenSnippet] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const Router = useRouter();

  const collection = searchParams.get("collection") || "";
  const snippet = searchParams.get("snippet") || "";
  const [isSnippetDataLoading, setIsSnippetDataLoading] = useState(false);
  const updateUrl = (name: string) => {
    const workspace = searchParams.get("workspace") || "";
    const collection = searchParams.get("collection") || "";
    const query: Record<string, string> = {
      workspace,
      collection,
    };
    if (name) {
      query.snippet = name;
    }
    Router.push(`?${new URLSearchParams(query).toString()}`);
    setIsOpenSnippet(true);
  };

  const [isSnippet, setIsSnippet] = useState<any>([]);
  
  useLayoutEffect(() => {
    const fetchSnippets = async () => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        setIsSnippetDataLoading(true);
        const response = await axios.get(
          `${baseURL}/v1/api/snippet?cat_id=${collection}`,
          { headers }
        );
        setIsSnippetDataLoading(false);
        setIsSnippet(response.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (collection) {
      fetchSnippets();
    }
  }, [collection, isRefresh]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        {collection ? (
          <div
            style={{ height: "100vh" }}
            className="h-screen-full w-full  overflow-y-auto"
          >
            <div className={`${snippet ? "w-1/3 " : "vw-75 "} flex flex-col `}>
              <div className="w-full flex mt-2">
                <div className="w-full flex flex-wrap">
                  <div className="flex flex-wrap justify-start items-center pb-20 ">
                  {isSnippetDataLoading ? (
                    <div className={`${snippet ? "vw-25 " : "vw-75 "}flex flex-wrap justify-around   ml-8 mt-10 `}>
                      <div style={{borderRadius: "2rem"}} className="w-96 mr-4 mb-6 bg-zinc-800 h-56  text-zinc-800 text-7xl overflow-hidden">the skeleton reactangular</div>
                      <div style={{borderRadius: "2rem"}} className="w-96 mr-4 mb-6 bg-zinc-800 h-56  text-zinc-800 text-7xl overflow-hidden">the skeleton reactangular</div>
                      <div style={{borderRadius: "2rem"}} className="w-96 mr-4 mb-6 bg-zinc-800 h-56  text-zinc-800 text-7xl overflow-hidden">the skeleton reactangular</div>
                      <div style={{borderRadius: "2rem"}} className="w-96 mr-4 mb-6 bg-zinc-800 h-56  text-zinc-800 text-7xl overflow-hidden">the skeleton reactangular</div>
                      <div style={{borderRadius: "2rem"}} className="w-96 mr-4 mb-6 bg-zinc-800 h-56  text-zinc-800 text-7xl overflow-hidden">the skeleton reactangular</div>
                      
                      
                      
                    
                   
                    
                  </div>
                  ):( <div className="flex flex-wrap justify-start">
                    {isSnippet?.map((snip: any) => (
                      <button key={snip._id}>
                        <SnippetCard {...snip} />
                      </button>
                    ))}
                  </div> )}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : collection == "" || snippet == "" ? (
          <div className=" m-auto">
            <Welcome />
          </div>
        ) : (
          <div>
            <div className="h-10 w-10">+</div>
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default SnippetSection;