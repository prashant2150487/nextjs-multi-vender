"use client";
import React from "react";
import { Button } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data1 = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    }
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

const labels2 = ["January", "February", "March", "April", "May", "June", "July"];

export const data2 = {
  labels: labels2,
  datasets: [
    {
      label: "Order",
      data: labels2.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels2.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};

const WeeklySalesCharts = () => {
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Weekply Sales</h2>
      <div className="p-4">
        <Tabs aria-label="Default tabs" variant="underline">
          <Tabs.Item active title="Sales" className="text-orange-300">
            <Line options={options1} data={data1} />
          </Tabs.Item>
          <Tabs.Item title="Orders">
            <Bar options={options2} data={data2} />
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default WeeklySalesCharts;
