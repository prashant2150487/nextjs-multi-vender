import { Layers, ShoppingCart } from "lucide-react";
import React from "react";

function SmallCard({ data }) {
  const Icon = data?.icon;
  return (
    <div className="bg-slate-700 rounded-lg shadow-lg p-4">
      <div className="flex space-x-4 items-center">
        <div>
          <Icon
            className={`w-12 h-12 ${data.iconBg} rounded-full items-center flex justify-between p-2`}
          />
        </div>
        <div>
          <p>{data.title}</p>
          <h3 className="text-2xl font-bold">{data.sales}</h3>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
