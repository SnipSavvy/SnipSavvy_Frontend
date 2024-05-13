"use client";
import React, { Suspense,useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import RightDrawer from "@/components/RightDrawer/Drawer";
import Unauthorized from "@/components/Collab/Unauthorized";
import Image from "next/image";

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const searchParams = useSearchParams()
  const token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
  const snippet = searchParams.get("snippet") ? searchParams.get("snippet") : ""
  const sharing = searchParams.get("sharing") ? searchParams.get("sharing") : ""
  const email = searchParams.get("email") ? searchParams.get("email") : ""
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
       {token && snippet && (sharing === "true" || email) ? (
        <div className="">
          <RightDrawer
            className="fixed top-0"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
            shared={sharing}
          />
        </div>
      ) : (
        <Unauthorized />
      )}
    </div>
    </Suspense>
  );
}

export default Page;
