import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const FormHeader = ({ title }) => {
  const router = useRouter();
  console.log(router);
  return (
    <div className="flex items-center justify-between bg-white text-slate-800 dark:bg-slate-600 dark:text-slate-50 py-6 px-12 rounded-lg shadow">
      <h2 className="font-bold text-xl">{title}</h2>
      <button>
        <X onClick={() => router.back()} />
      </button>
    </div>
  );
};
