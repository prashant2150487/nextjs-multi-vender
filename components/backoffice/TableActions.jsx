import React from "react";
import { Button, TextInput } from "flowbite-react";
import { ArrowDownToLine, Search, Trash2 } from "lucide-react";
const TableActions = () => {
  return (
    <div className="flex items-center bg-slate-500 rounded-lg py-5 px-6 border-none mt-4">
      <Button color="green" className="flex mr-4">
        <ArrowDownToLine className="mr-1" />
        Export
      </Button>
      <TextInput
        id="email1"
        type="text"
        placeholder="search for item"
        icon={Search}
        className="w-full max-w-lg "
      />
      <Button
        color="red-600"
        className="ml-auto bg-red-600 flex items-center col-span-2 gap-1 text-xl"
      >
        <Trash2 className="w-5 mr-1" />
        <span className="self-center">Bulk Delete</span>
      </Button>
    </div>
  );
};

export default TableActions;
