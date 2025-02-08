import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();
export const ourFileRouter = {
  categoryImageUploader: f({
    image: { maxFileSize: "1MB" },
  }).onUploadComplete(async ({ metadata, file }) => {
    // This code RUNS ON YOUR SERVER after upload
    console.log("Upload complete for userId:", metadata.userId);
    console.log("file url", file.url);
    // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
    return { uploadedBy: metadata.userId };
  }),
};
    