import React from "react";
import { PlusIcon } from "../components/iconsSVG";
import Card from "./components/section1";
import Projects from "./components/section2";

const Dashboard = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex-col justify-center items-center gap-6 inline-flex">
        <div className="self-stretch justify-center items-end inline-flex  slide-up">
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="text-center text-white text-[32px] font-[500]">
              Dashboard
            </div>
            <div className="text-center text-[#b3b4b3] text-base font-[300]">
              Real-time overview of your listed projects
            </div>
          </div>
          <button className="h-[42px] w-[159px] bg-white rounded-xl justify-center items-center flex hover:scale-105">
            <PlusIcon />
            <div className="ml-2 text-[#030500] text-[15px] font-[400] leading-[18px]">
              List new project
            </div>
          </button>
        </div>
      </div>

      <Card />
      <Projects />
    </div>
  );
};

export default Dashboard;
