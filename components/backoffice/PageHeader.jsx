import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { Plus } from "lucide-react";

export const PageHeader = ({heading,linkTitle,href}) => {
  return (
    <>
      <div className="flex justify-between items-center py-4">
        <Heading title={heading} />

        <Link
          href={href}
          className="text-white bg-lime-700 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-lime-600 dark:hover:bg-lime-700/90 dark:focus:ring-blue-800"
        >
          <Plus />
          {linkTitle}
        </Link>
      </div>
     </>
  );
};
