"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type DataPoint = {
  date: string;
  cityscape: number;
  truffle: number;
  mawi: number;
};

const data: DataPoint[] = [
  {
    date: "Sep 7",
    cityscape: 1000,
    truffle: 2000,
    mawi: 0,
  },
  {
    date: "Sep 11",
    cityscape: 1500,
    truffle: 2000,
    mawi: 1500,
  },
  {
    date: "Sep 16",
    cityscape: 1500,
    truffle: 1000,
    mawi: 0,
  },
];

const timeRanges = [
  { value: "14", label: "Last 14 days" },
  { value: "30", label: "Last 30 days" },
  { value: "90", label: "Last 90 days" },
];

export default function FundsDashboard() {
  const [timeRange, setTimeRange] = useState("14");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const totalFunds = data
    .reduce((acc, curr) => acc + curr.cityscape + curr.truffle + curr.mawi, 0)
    .toFixed(2);

  const selectedRange = timeRanges.find(
    (range) => range.value === timeRange
  )?.label;

  return (
    <div className="w-full bg-[#181818] p-4 px-5 rounded-lg">
      {/* <div className="flex flex-row items-start justify-between pb-7"> */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[16px] font-[500] text-white">Funds raised</h2>
        {/* Custom Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex text-[13px] font-[500] items-center justify-center gap-2 w-[118px] h-[32px] bg-neutral-800 text-white rounded-md focus:outline-none"
          >
            <span>{selectedRange}</span>
            <div
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
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
            </div>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-[180px] bg-neutral-800 rounded-md shadow-lg z-40">
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  className="w-full px-4 py-2 text-left text-white hover:bg-neutral-700 first:rounded-t-md last:rounded-b-md"
                  onClick={() => {
                    setTimeRange(range.value);
                    setIsDropdownOpen(false);
                  }}
                >
                  {range.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* </div> */}

      <div className="flex justify-between items-center mb-[33px]">
        <p className="text-[28px] font-[500] text-white">${totalFunds}</p>

        {/* Legend */}
        <div className="flex gap-4 justify-end">
          <div className="flex items-center gap-2">
            <div className="w-4 h-[2px] bg-[#8884d8]"></div>
            <span className="text-white text-sm">Cityscape L...</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-[2px] bg-[#82ca9d]"></div>
            <span className="text-white text-sm">Truffle Ski...</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-[2px] bg-[#ffa07a]"></div>
            <span className="text-white text-sm">Mawi</span>
          </div>
        </div>
      </div>

      <div className="h-[140px] w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
          style={{ display: "block" }}
        >
          <LineChart data={data}>
            <CartesianGrid
              // strokeDasharray="3 3"
              stroke="#333"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              stroke="#666"
              tick={{ fill: "#666", fontSize: 14 }}
              padding={{ left: 30 }} //Adds padding to the first label
              domain={[0, "dataMax"]} //This will adjust the maximum value dynamically based on the data
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="#666"
              tick={{ fill: "#666", fontSize: 14 }}
              tickFormatter={(value) =>
                +value % 1000 === 0
                  ? `${+value / 1000} ${+value / 1000 > 0 ? "k" : ""}`
                  : ""
              }
              domain={[0, "dataMax"]} //This will adjust the maximum value dynamically based on the data
              interval="preserveStartEnd"
            />
            <Line
              type="linear" //Changed to straight lines
              dataKey="cityscape"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
              name="Cityscape L..."
            />
            <Line
              type="linear" // Changed to straight lines
              dataKey="truffle"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={false}
              name="Truffle Ski..."
            />
            <Line
              type="linear" // Changed to straight lines
              dataKey="mawi"
              stroke="#ffa07a"
              strokeWidth={2}
              dot={false}
              name="Mawi"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
