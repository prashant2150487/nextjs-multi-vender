"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/companyLogo.png";
import {
  ChevronRight,
  Dot,
  ExternalLinkIcon,
  LayoutGrid,
  LogOut,
  Truck,
  User,
  User2,
  UserSquare2,
  Warehouse,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "../ui/collapsible";

const SIDEBAR_LINKS = [
  {
    title: "Dashboard",
    icon: LayoutGrid,
    href: "/dashboard",
  },
  {
    title: "Customers",
    icon: User2,
    href: "/dashboard/customers",
    isSubCat: true,
    subCat: [
      { title: "Product", href: "/dashboard/product" },
      { title: "Categories", href: "/dashboard/categories" },
      { title: "Attributes", href: "/dashboard/attributes" },
      { title: "Coupons", href: "/dashboard/coupons" },
    ],
  },
  {
    title: "Markets",
    icon: Warehouse,
    href: "/dashboard/markets",
  },
  {
    title: "Warehouse",
    icon: User2,
    href: "/dashboard/warehouse",
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
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuToggle = (title) => {
    setOpenSubMenu(prev => prev === title ? null : title);
  };

  return (
    <div className="dark:bg-slate-700 bg-white space-y-6 dark:text-slate-50 hidden sm:block text-black w-0 sm:w-60 h-screen px-0 py-4 fixed top-0 left-0 shadow-md overflow-y-auto">
      <Link href="/" className="block mb-6 text-center">
        <Image
          src={logo}
          width={96}
          height={96}
          className="mix-blend-normal mx-auto"
          alt="Company Logo"
          priority
        />
      </Link>
      
      <nav className="space-y-3">
        {SIDEBAR_LINKS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <div 
              key={item.href} 
              className={`px-6 py-2 ${isActive ? 'border-l-4 border-lime-600' : ''}`}
            >
              {item.isSubCat ? (
                <Collapsible 
                  open={openSubMenu === item.title}
                  onOpenChange={() => handleSubMenuToggle(item.title)}
                >
                  <CollapsibleTrigger 
                    className={`flex items-center space-x-3 w-full ${
                      isActive ? 'text-lime-600' : ''
                    }`}
                  >
                    <Icon className="shrink-0" />
                    <span className="flex-grow">{item.title}</span>
                    <ChevronRight 
                      className={`w-5 h-5 transition-transform ${
                        openSubMenu === item.title ? 'rotate-90' : ''
                      }`} 
                    />
                  </CollapsibleTrigger>

                  <CollapsibleContent className="ml-8 mt-2 space-y-2">
                    {item.subCat?.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`flex items-center space-x-2 ${
                          pathname === subItem.href ? 'text-lime-600' : ''
                        }`}
                      >
                        <Dot />
                        <span>{subItem.title}</span>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 ${
                    isActive ? 'text-lime-600' : ''
                  }`}
                >
                  <Icon />
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      <button 
        className="flex items-center space-x-3 bg-lime-600 py-3 px-6 ml-4 rounded-md text-white hover:bg-lime-700 transition-colors"
        onClick={() => {
          // Implement logout functionality
          console.log('Logout clicked');
        }}
      >
        <LogOut />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;