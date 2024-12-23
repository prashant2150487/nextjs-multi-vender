import React from "react";
import BestSeelingProductsChart from "./BestSeelingProductsChart";
import WeeklyCharts from "./WeeklySalesCharts";

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <WeeklyCharts />
      <BestSeelingProductsChart />
    </div>
  );
};

export default DashboardCharts;
