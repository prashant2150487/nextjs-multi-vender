import { Layers } from "lucide-react";
import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [
    {
      title: "Today Orders",
      sales: 100000,
      color: "bg-green-600",
    },
    {
      title: "Yeasterday Orders",
      sales: 150000,
      color: "bg-blue-600",
    },
    {
      title: "This Month",
      sales: 110000,
      color: "bg-orange-600",
    },
    {
      title: "All-Time Sales",
      sales: 180000,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((stat, index) => (
        <LargeCard key={index} data={stat}/>
      ))}
    </div>
  );
}
