
const generateCouponCode = (title, expiryDate) => {
    // remove spaces
    const formattedTitle = title.toUpperCase().replace(/\s+/g, "");
    const formattedExpiryDate = expiryDate.toISOString().slice(0, 10).split("-").reverse().join("");
    const couponCode = `${formattedTitle}-${formattedExpiryDate}`;
    return couponCode;
}
export default generateCouponCode;


