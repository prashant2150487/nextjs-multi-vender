import Heading from "@/components/backoffice/Heading";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <div className="flex justify-between items-center">
      <Heading title="Categories" />

      <Link
        href={"/dashboard/category/new"}
        class="text-white bg-lime-700 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-lime-600 dark:hover:bg-lime-700/90 dark:focus:ring-blue-800"
      >
        <Plus />
        Add Category
      </Link>
    </div>
  );
};

export default Category;
