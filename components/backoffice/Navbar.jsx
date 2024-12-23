import React from "react";
import { Sun, AlignJustify } from "lucide-react";
import { Bell } from "lucide-react";
import { User } from "lucide-react";

const Navbar = () => {
  return (
      <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-16 px-8 py-4 fixed top-0 left-60 right-0">
        <button>
          <AlignJustify />
        </button>
        <div className="flex space-x-3">
          <button>
            <Sun />
          </button>
          <button>
            <Bell />
          </button>
          <button>
            <User />
          </button>
        </div>
      </div>
  );
};

export default Navbar;
