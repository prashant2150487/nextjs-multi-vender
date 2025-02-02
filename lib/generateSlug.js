export const generateSlug = ({ title }) => {
  if (!title || typeof title !== "string") {
    throw new Error("Invalid title. It must be a non-empty string.");
  }

  return title
    .toLowerCase() // Convert to lowercase
    .normalize("NFD") // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^\w\s-]/g, "") // Remove special characters except whitespace and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
    .trim() // Remove leading and trailing whitespace
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};
