"use client";
import { baseURL } from "@/config";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import Splash from "../SplashScreen/Splash";
interface ButtonProps {
  description: string;
}
export function SignUpButton({ description }: ButtonProps) {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const CreateUser = async () => {
      const body = {
        name: session.data?.user?.name,
        image: session.data?.user?.image,
        email: session.data?.user?.email,
      };
      console.log("body->", body);
      await axios.post(`${baseURL}/v1/api/user`, body).then(
        (response) => {
          console.log(response);
          localStorage.setItem("token", `${response.data.token}`);
        },
        (error) => {
          console.log(error);
        }
      );
    };
    if (session && session.status === "authenticated") {
      console.log("before fn call");
      setIsLoading(true);
      CreateUser();
      // setTimeout(() => {
      //   setIsLoading(false);
      const token = localStorage.getItem("token");
      if (token) {
        redirect("/workspace");
      }
      // }, 2000);
    }
  }, [session]);
  const handleSignInGoogle = (e: any) => {
    e.preventDefault();
    console.log("in signin");
    signIn("google");
  };
  return (
    <button
      onClick={(e) => handleSignInGoogle(e)}
      className="px-3 py-2 bg-[#045AA6] text-white font-semibold rounded-xl"
    >
      {description}
    </button>
  );
}
