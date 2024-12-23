import { CustomDataTable } from "@/components/backoffice/CustomDataTable";
import DashboardCharts from "@/components/backoffice/DashboardCharts";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import React from "react";

const Page = () => {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <div>
        <LargeCards/>
        <SmallCards/>
        <DashboardCharts/>
        <CustomDataTable/>
      </div>
    </div>
  );
};

export default Page;
