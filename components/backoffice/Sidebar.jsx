import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/companyLogo.png";
import {
  ExternalLink,
  ExternalLinkIcon,
  LayoutGrid,
  Slack,
  Truck,
  User,
  User2,
  Warehouse,
} from "lucide-react";

const Sidebar = () => {
  const sidebarLinks = [
    {
      title: "Customers",
      icon: User2,
    },
    {
      title: "Warehouse",
      icon: User2,
    },
    {
      title: "Markets",
      icon: Warehouse,
    },
    {
      title: "Farmers",
      // icon: UserSquad2,
    },
    {
      title: "Orders",
      icon: Truck,
    },
    {
      title: "Our Staff",
      icon: User,
    },
    {
      title: "Settings",
      icon: LayoutGrid,
    },
    {
      title: "Online Store",
      icon: ExternalLinkIcon,
    },
  ];
  return (
    <div className="dark:bg-slate-700 bg-white space-y-6 dark:text-slate-50 text-black w-60 h-screen px-6 py-4 fixed top-0 left-0 shadow-md">
      <Link href="#" className="mb-6">
        <nameImage src={logo} className="w-36 mix-blend-normal" />
      </Link>
      <div className=" space-y-3 flex flex-col mt-14">
        {sidebarLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href="/dashboard"
              className="flex items-center space-x-3 py-2 px-6 border-l-4 border-green-600"
            >
              <LayoutGrid />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
