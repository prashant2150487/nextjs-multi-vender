"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/companyLogo.png";
import {
  ChevronRight,
  Dot,
  ExternalLink,
  ExternalLinkIcon,
  LayoutGrid,
  LogOut,
  Slack,
  Truck,
  User,
  User2,
  UserSquare2,
  Warehouse,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const sidebarLinks = [
  {
    title: "Dashboard",
    icon: LayoutGrid,
    href: "/dashboard",
    isSubCat: false,
  },
  {
    title: "Customers",
    icon: User2,
    href: "/dashboard/customers",
    isSubCat: true,
    subCat: [
      { title: "Product", href: "/dashboard/product" },
      { title: "Categories", href: "/dashboard/Categories" },
      { title: "Attributes", href: "/dashboard/attributes" },
      { title: "Coupons", href: "/dashboard/Coupons" },
    ],
  },
  {
    title: "Markets",
    icon: Warehouse,
    href: "/dashboard/markets",
    isSubCat: false,
  },
  {
    title: "Warehouse",
    icon: User2,
    href: "/dashboard/warehouse",
    isSubCat: false,
  },

  {
    title: "Farmers",
    icon: UserSquare2,
    href: "/dashboard/farmers",
  },
  {
    title: "Orders",
    icon: Truck,
    href: "/dashboard/orders",
  },
  {
    title: "Our Staff",
    icon: User,
    href: "/dashboard/staff",
  },
  {
    title: "Settings",
    icon: LayoutGrid,
    href: "/dashboard/settings",
  },
  {
    title: "Online Store",
    icon: ExternalLinkIcon,
    href: "/dashboard/onlinestore",
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="dark:bg-slate-700 bg-white space-y-6 dark:text-slate-50 text-black w-60 h-screen px-0 py-4 fixed top-0 left-0 shadow-md">
      <Link href="#" className="mb-6">
        <Image
          src={logo}
          className="w-24 mix-blend-normal mx-auto"
          alt="logo"
        />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        {sidebarLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`space-x-3 py-2 px-6 ${
                pathname === item.href ? "border-l-4 border-lime-600" : ""
              }`}
            >
              {item.isSubCat ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-3">
                    <Icon />
                    <span>{item.title}</span>
                    <div className="ml-1">
                      {item.isSubCat && (
                        <ChevronRight className="w-5 h-5 mt-1" />
                      )}
                    </div>
                  </DropdownMenuTrigger>
                  
                  <DropdownMenuContent className="w-52 ml-8 mt-2">
                    <DropdownMenuLabel className="flex items-center">
                      <Dot />
                      Product
                    </DropdownMenuLabel>
                    <DropdownMenuItem className="flex items-center">
                      <Dot />
                      Categories
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center">
                      <Dot />
                      Attributes
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center">
                      <Dot />
                      Coupons
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 ${
                    pathname === item.href ? "text-lime-600" : ""
                  }`}
                >
                  <Icon />
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          );
        })}
      </div>
      <button className="flex items-center space-x-3 bg-lime-600 py-3 px-6 ml-4 rounded-md text-white">
        <LogOut />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
