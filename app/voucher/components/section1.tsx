import { PlusIcon } from "@/app/components/iconsSVG";
import React from "react";

const Section1 = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex-col justify-center items-center gap-6 inline-flex">
        <div className="self-stretch justify-center items-end inline-flex slide-up">
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="text-center text-white text-[32px] font-[500]">
              Voucher Management
            </div>
            <div className="text-center text-[#b3b4b3] text-base font-[300]">
              Manage and track your vouchers
            </div>
          </div>
          <button className="h-[42px] w-[141px] bg-white rounded-xl justify-center items-center gap-2 flex hover:scale-105">
            <PlusIcon />
            <div className="text-[#030500] text-[15px] font-[400]">
              New voucher
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
