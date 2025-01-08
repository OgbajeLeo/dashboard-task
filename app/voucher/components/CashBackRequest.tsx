import React from "react";
import depth  from '@/public/depth.png'
import Image from "next/image";

const CashbackRequests = () => {
  const requests = [
    {
      id: "JP-24-MJOO26",
      value: "20% added value",
      status: "Expired",
      price: "$500 / Unit",
      niche: "Lifestyle",
      listedUnits: 200,
      remainingUnits: 100,
      
    },
    {
      id: "JP-24-MJOO26",
      value: "20% added value",
      status: "Expired",
      price: "$500 / Unit",
      niche: "Lifestyle",
      listedUnits: 200,
      remainingUnits: 100,
     
    },
    {
      id: "JP-24-MJOO26",
      value: "20% added value",
      status: "Expired",
      price: "$500 / Unit",
      niche: "Lifestyle",
      listedUnits: 200,
      remainingUnits: 100,
     
    },
  ];

  return (
    <div className="w-full mt-[18px] p-5 bg-[#181818] rounded-xl slide-up">
      <div className="w-full h-[29px] mb-5 justify-between items-start flex">
        <div className="text-white text-2xl font-medium ">
          Cashback requests
        </div>
        <div className="self-stretch justify-start items-center gap-[360px] flex">
          <button className="text-[#a7fc00] text-sm font-normal  leading-normal hover:underline">
            See all
          </button>
        </div>
      </div>
      <div className="w-full justify-between items-center gap-4 flex">
        {requests.map((request, index) => (
          <div
            key={index}
            className="w-[354px] p-[18px] bg-[#141414] rounded-xl flex-col justify-center items-start gap-4 inline-flex grow shrink basis-0"
          >
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <Image
                className="w-20 h-20 relative rounded-xl"
                src={depth}
                alt="Request"
              />
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-white text-base font-medium  leading-normal">
                  {request.value}
                </div>
                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="px-3 py-1 bg-[#ba2543]/10 rounded-[100px] border border-[#ba2543]/30 justify-center items-center gap-2 flex">
                    <div className="text-[#ba2543] text-sm font-normal  leading-normal">
                      {request.status}
                    </div>
                  </div>
                  <div className="self-stretch px-2 py-px bg-[#1d1d1d] rounded justify-start items-center gap-1 flex">
                    <div className="text-[#cdcdcc] text-xs font-medium font-['Lato'] leading-tight">
                      {request.id}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="text-white text-[15px] font-normal  leading-snug">
                Voucher price:
              </div>
              <div className="text-white text-[15px] font-normal  leading-normal">
                {request.price}
              </div>
            </div>
            <div className="self-stretch justify-between items-end inline-flex">
              <div className="text-white text-[15px] font-normal  leading-snug">
                Niche:
              </div>
              <div className="text-white text-[15px] font-normal  leading-normal">
                {request.niche}
              </div>
            </div>
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="text-white text-[15px] font-normal  leading-snug">
                Listed units:
              </div>
              <div className="text-white text-[15px] font-normal  leading-normal">
                {request.listedUnits}
              </div>
            </div>
            <div className="self-stretch justify-between items-end inline-flex">
              <div className="text-white text-[15px] font-normal  leading-snug">
                Remaining units:
              </div>
              <div className="text-white text-[15px] font-normal  leading-normal">
                {request.remainingUnits}
              </div>
            </div>
            <div className="self-stretch justify-end items-center gap-3 inline-flex">
              <button className="px-3 hover:scale-105 py-2 rounded-lg border border-[#4a4a4a] justify-end items-center gap-1.5 flex">
                <div className="text-right text-white text-[13px] font-medium ">
                  View requests
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CashbackRequests;
