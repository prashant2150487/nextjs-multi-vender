import { Layers } from "lucide-react";
import React from "react";

function LargeCard({ data }) {
  return (
    <div
      className={`rounded-lg text-white flex flex-col justify-center items-center shadow-md p-8 ${data.color}`}
    >
      <Layers />
      <h4>{data.title}</h4>
      <h2 className="text-2xl lg:text-3xl">UGX.{data.sales}</h2>
    </div>
  );
}

export default LargeCard;
