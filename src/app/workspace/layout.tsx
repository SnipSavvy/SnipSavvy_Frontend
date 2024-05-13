import React from "react";
import Collection from "@/components/LeftPanel/Collection";
import Sidebar from "@/components/LeftPanel/Sidebar";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#18181B] min-h-screen w-screen flex">
      <div className="w-[25vw] flex">
        {/* Sidebar content goes here */}
        <Sidebar />
      </div>

      {children}
    </div>
  );
};

export default Layout;
