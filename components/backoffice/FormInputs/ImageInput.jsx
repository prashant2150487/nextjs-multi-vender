import toast from "react-hot-toast";
import { UploadDropzone } from "../../../lib/uploadthing";
import { Pencil } from "lucide-react";

export const ImageInput = ({
  label,
  imageUrl,
  setImageUrl,
  className = "col-span-full",
  endPoint = "categoryImageUploader",
}) => {
  return (
    <div className={className}>
      <div className="flex items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            className="flex space-x-2 items-center bg-slate-900 shadow rounded-md text-slate-50 py-2 px-4 ml-auto"
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
          width={1000}
          height={667}
          className="object-contain w-full h-64"
        />
      ) : (
        <UploadDropzone
          endpoint={endPoint}
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);
            toast.success("Image upload complete");
            console.log("Files", res);
            console.log("Upload Completed");
          }}
          onUploadError={(error) => {
            toast.error("Image upload Failed , Try again");
            console.log(`Error: ${error.message}`);
          }}
        />
      )}
    </div>
  );
};
