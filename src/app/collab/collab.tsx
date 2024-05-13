"use client";
import Unauthorized from "@/components/Collab/Unauthorized";
import RightDrawer from "@/components/RightDrawer/Drawer";
import { useSearchParams } from "next/navigation";

export default function Collab({
  isOpen,
  setIsOpen,
  isEditable,
  setIsEditable,
}: any) {
  const searchParams = useSearchParams();
  const snippet = searchParams.get("snippet")
    ? searchParams.get("snippet")
    : "";
  const shared = searchParams.get("shared") ? searchParams.get("shared") : "";

  return (
    <>
      {snippet && shared === "true" ? (
        <div className="">
          <RightDrawer
            className="fixed top-0"
            isOpen={!isOpen}
            setIsOpen={setIsOpen}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
            shared={shared}
          />
        </div>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
