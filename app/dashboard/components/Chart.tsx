"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const FundraisingChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("14d");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const data = {
    labels:
      selectedPeriod === "14d"
        ? ["Sep 7", "Sep 13", "Sep 16"]
        : selectedPeriod === "7d"
        ? ["Jan 1", "Jan 2", "Jan 3"]
        : ["Dec 1", "Dec 15", "Dec 30"], // Example for last month
    datasets: [
      {
        label: "Cityscape L",
        data:
          selectedPeriod === "14d"
            ? [1000, 500, 1500]
            : selectedPeriod === "7d"
            ? [500, 1500, 1000]
            : [2000, 0, 3000], // Example for last month
        borderColor: "#683fea",
        backgroundColor: "rgba(104, 63, 234, 0.2)",
        borderWidth: 1,
        tension: 0, // Making the line straight
      },
      {
        label: "Truffle Ski",
        data:
          selectedPeriod === "14d"
            ? [500, 1500, 1000]
            : selectedPeriod === "7d"
            ? [1000, 2000, 1000]
            : [1000, 1000, 2000], // Example for last month
        borderColor: "#a7fc00",
        backgroundColor: "rgba(167, 252, 0, 0.2)",
        borderWidth: 1,
        tension: 0, // Making the line straight
      },
      {
        label: "Mawi",
        data:
          selectedPeriod === "14d"
            ? [2000, 0, 1000]
            : selectedPeriod === "7d"
            ? [1000, 2000, 2000]
            : [1000, 2000, 2000], // Example for last month
        borderColor: "#fc7900",
        backgroundColor: "rgba(252, 121, 0, 0.2)",
        borderWidth: 1,
        tension: 0, // Making the line straight
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
        labels: {
          color: "#cdcdcc",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "#2c2c2c",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderWidth: 0,
        borderRadius: 20,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#a5a5a5",
          font: {
            size: 14,
          },
          padding: 20,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#a5a5a5",
          font: {
            size: 14,
          },
          // Adjusted callback to match expected types
          callback: function (tickValue: string | number) {
            return `${(tickValue as number) / 1000}k`; // Ensure tickValue is handled as number
          },
        },
        grid: {
          color: "#343434",
        },
      },
    },
  };


  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="w-full bg-[#181818] rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-normal">Funds raised</h2>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-3 py-2 bg-[#2c2c2c] rounded-lg text-white text-sm flex items-center gap-2"
          >
            {selectedPeriod === "14d"
              ? "Last 14 days"
              : selectedPeriod === "7d"
              ? "Last 7 days"
              : "Last Month"}

            {/* SVG Arrow Icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M12 6L8 10L4 6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[#2c2c2c] rounded-lg shadow-lg w-48 ">
              <button
                onClick={() => handlePeriodChange("14d")}
                className="block px-4 py-2 text-white text-sm w-full text-left"
              >
                Last 14 days
              </button>
              <button
                onClick={() => handlePeriodChange("7d")}
                className="block px-4 py-2 text-white text-sm w-full text-left"
              >
                Last 7 days
              </button>
              <button
                onClick={() => handlePeriodChange("30d")}
                className="block px-4 py-2 text-white text-sm w-full text-left"
              >
                Last Month
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mb-8 flex gap-4 items-center justify-between">
        <div className="text-[28px] font-medium text-white">$3,520.50</div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-[#683fea]" />
            <span className="text-[#cdcdcc] text-sm">Cityscape L...</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-[#a7fc00]" />
            <span className="text-[#cdcdcc] text-sm">Truffle Ski...</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-[#fc7900]" />
            <span className="text-[#cdcdcc] text-sm">Mawi</span>
          </div>
        </div>
      </div>

      <div className="h-[130px] w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default FundraisingChart;
