"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
function Navbar() {
  const session = useSession();
  useEffect(() => {
    if (session && session.status === "authenticated") {
      redirect("/workspace");
    }
  }, [session]);
  const handleSignInGoogle = async () => {
    await signIn("google", { callbackUrl: "http://localhost:3000/workspace" });
  };
  return (
    <div className="border-b border-zinc-600 text-white font-bold px-2 pt-2 bg-black flex flex-row justify-around">
      <Logo className="text-3xl mt-2" />
      <div className="flex flex-row gap-5">
        <button onClick={handleSignInGoogle}>Sign In With Google</button>
      </div>
    </div>
  );
}

export default Navbar;
