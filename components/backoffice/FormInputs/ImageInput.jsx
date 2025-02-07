import { Pencil } from "lucide-react";
import Image from "next/image";

export const ImageInput = ({
  label,
  imageUrl = "323",
  setImageUrl,
  className = "col-span-full",
  endPoint = "imageUploader",
}) => {
  return (
    <div className={className}>
      <div className="flex justify-center items-center mb-4">
        <label
          htmlFor=""
          className="block text-sm font-bold leading-6 text-gray-900"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            className="flex space-x-2 items-center bg-slate-900 shadow-sm rounded-md text-slate-500 py-2 px-4"
            type="button"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Product Image"
          className="object-cover w-full h-64 rounded-md"
        />
      ) : (
        <img
          src={imageUrl}
          alt="Product Image"
          className="object-cover w-full h-64 rounded-md"
        />
      )}
    </div>
  );
};
