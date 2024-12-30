import React from "react";
import {
  Sun,
  AlignJustify,
  LayoutDashboard,
  Settings,
  LogOut,
} from "lucide-react";
import { Bell } from "lucide-react";
import { User } from "lucide-react";
import Image from "next/image";
import UserImage from "../../public/64c47081-446f-4ff7-b811-3bb55cabcb35.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-800  h-20 px-8 py-8 fixed top-0 left-60 right-0 text-green-600">
      <button>
        <AlignJustify />
      </button>
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>

        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg dark:focus:ring-blue-800"
        >
          <Bell />
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-green-600 bg-red-500 border-2 border-white rounded-full -top-0 end-6 dark:border-gray-900">
            20
          </div>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={UserImage}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full w-8 h-8"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
