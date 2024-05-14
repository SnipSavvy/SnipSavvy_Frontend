"use client"
import React, { Suspense,useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Unauthorized from "@/components/Collab/Unauthorized";
import Image from "next/image";
import { baseURL } from "@/config";
import axios from "axios";
import CollabCodeBlock from "@/components/Collab/CollabCodeBlock";

function Page() {
  const [status, setStatus] = useState()
  const [codeData, setCodeData]= useState<any>({})
  const searchParams = useSearchParams()
  const snippet = searchParams.get("snippet") ? searchParams.get("snippet") : ""
  const sharing = searchParams.get("sharing") ? searchParams.get("sharing") : ""
  const email = searchParams.get("email") ? searchParams.get("email") : ""

  useEffect(()=> {
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
    const checkAccess = async() => {
      const headers = {
        Authorization: `Bearer ${token}`,
      }
      if(email){
        await axios.get(`${baseURL}/v1/api/snippet/check-access/${snippet}/${email}`, { headers }).then((res) => {
          setStatus(res.data.status)
        }).catch((error) =>{
          console.log(error)
        })  
      }
    }
    const fetchCode = async() => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios
        .get(`${baseURL}/v1/api/snippet?snippet_id=` + `${snippet}`, {
          headers,
        })
        .then((response) => {
          console.log(response.data);
          setCodeData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    checkAccess()
    if(status==="true") {
      fetchCode() 
    }
    if(sharing==="true"){
      fetchCode()
    }
  }, [])
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="">
      <Image
          src="/logo.png"
          width={80}
          height={80}
          alt="logo"
          className="pt-6 pl-4 pb-4 opacity-80"
        />
       {snippet && (sharing === "true" || status==="true") ? (
        <div className="flex justify-center items-center">
        <div className="top-0 fixed h-screen z-[1] w-[50vw] bg-zinc-800">
          <CollabCodeBlock codeData={codeData}/>
        </div>
        </div>
      ) : (
        <Unauthorized />
      )}
    </div>
    </Suspense>
  );
}

export default Page;
