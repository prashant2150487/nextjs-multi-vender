import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="ml-[14.25rem] w-full">
        <Navbar />
        <main className="p-8 bg-slate-900 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
      </div>
    </div>
  );
};
export default Layout;
