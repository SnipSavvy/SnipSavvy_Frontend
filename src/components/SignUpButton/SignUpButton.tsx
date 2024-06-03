"use client";
import { baseURL } from "@/config";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import React, { useLayoutEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useRouter } from "next/navigation";

interface ButtonProps {
  description: string;
}
export function SignUpButton({ description }: ButtonProps) {
  const router = useRouter();
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
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
          router.push("/workspace");
        },
        (error) => {
          console.log(error);
        }
      );
    };
    if(localStorage.getItem("token")){
      router.push("/workspace");
    }else if(session && session.status === "authenticated") {
      setIsLoading(true);


      CreateUser();
    }
  }, [session]);
  const handleSignInGoogle = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    signIn("google");
  };
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <button
        onClick={(e) => handleSignInGoogle(e)}
        className="px-3 py-2 bg-[#045AA6] text-white font-semibold rounded-xl"
      >
        {description}
      </button>
    </>
  );
}
