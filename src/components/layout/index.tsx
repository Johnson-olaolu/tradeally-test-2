import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;
  return (
    <div className=" h-screen w-screen flex bg-[#F3F4F8]">
      <Sidebar />
      <div className=" grow flex flex-col">
        <Header />
        <div className="grow">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
