import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-slate-700 space-y-6 text-slate-50 w-60 h-screen p-3 fixed top-0 left-0">
      <Link href="#" className="mb-6">Logo</Link>
      <div className=" space-y-3 flex flex-col">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/customers">Customers</Link>
        <Link href="/markets">Markets</Link>
        <Link href="/staff">Staff</Link>
      </div>
    </div>
  );
};

export default Sidebar;
