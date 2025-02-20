export const generateCouponCode = (title, expiryDate) => {
    // Default to empty string if title is not provided
    const formattedTitle = title
      ? title.toUpperCase().replace(/\s+/g, "")
      : "UNTITLED";
  
    // Check if expiryDate is valid
    const date = new Date(expiryDate);
    let formattedExpiryDate = "";
  
    if (!isNaN(date.getTime())) {
      // Valid date, format it
      formattedExpiryDate = date
        .toISOString()
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("");
    } else {
      // Invalid date, use a fallback (e.g., today's date or empty)
      formattedExpiryDate = new Date()
        .toISOString()
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("");
    }
  
    const couponCode = `${formattedTitle}-${formattedExpiryDate}`;
    return couponCode;
  };