// import { Layers } from "lucide-react";
import React from "react";
import SmallCard from "./SmallCard";
import { Check, CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Today Orders",
      sales: 500,
      iconBg: "bg-green-600",
      icon: ShoppingCart,
    },
    {
      title: "Order Pending",
      sales: 200,
      iconBg: "bg-blue-600",
      icon: Loader2,
    },
    {
      title: "Order processing",
      sales: 100,
      iconBg: "bg-orange-600",
      icon: RefreshCcw,
    },
    {
      title: "Order delivered",
      sales: 180000,
      iconBg: "bg-purple-600",
      icon: CheckCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((item, index) => (
        <SmallCard key={index} data={item} />
      ))}
    </div>
  );
}
