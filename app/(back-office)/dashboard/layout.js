"use client"
import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React, { useState } from "react";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  console.log(showSidebar);
  return (
    <div className="flex flex-row">
      <Sidebar showSidebar={showSidebar} />
      <div className="ml-0 sm:ml-[14.25rem] w-full">
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <main className="p-8 bg-white dark:bg-slate-900 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
      </div>
    </div>
  );
};
export default Layout;
