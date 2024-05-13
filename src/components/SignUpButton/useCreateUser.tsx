"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "@/config";

export function useCreateUser() {
  const session = useSession();

  useEffect(() => {
    if (session && session.status === "authenticated") {
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
          },
          (error) => {
            console.log(error);
          }
        );
      };

      CreateUser();
    }
  }, [session]);
}
