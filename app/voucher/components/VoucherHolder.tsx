import React from "react";
import frame from "@/public/frame.png";
import Image from "next/image";

const VoucherHolders = () => {
  // Example data for voucher holders
  const voucherHolders = [
    {
      name: "Mia Johnson",
      amount: "$3,000",
      voucherId: "JP-24-MJOO26",
      valueSpent: "$300",
      expiry: "01/10/26",
      imgSrc: "https://via.placeholder.com/353x135",
    },
    {
      name: "Uju Nonso",
      amount: "$4,000",
      voucherId: "JP-24-MJOO27",
      valueSpent: "$200",
      expiry: "01/10/26",
      imgSrc: "https://via.placeholder.com/353x135",
    },
    {
      name: "Roli David",
      amount: "$1,000",
      voucherId: "JP-24-MJOO28",
      valueSpent: "$50",
      expiry: "01/10/26",
      imgSrc: "https://via.placeholder.com/353x135",
    },
  ];

  return (
    <div className="w-full mt-14 p-5 bg-[#181818] rounded-xl slide-up">
      <div className=" justify-between items-center flex w-full mb-5">
        <div className=" text-white text-2xl font-[400] ">Voucher holders</div>
        <button className="text-[#a7fc00] text-sm font-[300]  leading-normal hover:underline ">
          See all
        </button>
      </div>
      <div className="w-full justify-start items-center gap-4 flex overflow-hidden">
        {voucherHolders.map((holder) => (
          <div
            key={holder.voucherId}
            className="grow shrink basis-0  flex-col justify-start items-start inline-flex"
          >
            <Image
              className="w-full rounded-tl-2xl rounded-tr-2xl"
              src={frame}
              alt={`${holder.name}'s voucher`}
            />
            <div className="w-full justify-start items-start inline-flex overflow-hidden">
              <div className="grow relative shrink basis-0 w-full py-2.5 bg-white rounded-bl-2xl rounded-br-2xl border-t flex-col justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <div className="w-8 h-8 bg-[#030500] absolute -right-[20px] top-8 rounded-full" />
                <div className="w-8 h-8 bg-[#030500] rounded-full absolute -left-[20px] top-8" />
                <div className="w-full text-center text-[#1d1d1d] text-lg font-[400]  leading-[30px]">
                  {holder.name}
                </div>
                <div className="w-full h-[0px] border border-[#d9dad9]"></div>
                <div className="w-full h-[70px] flex-col justify-center items-center gap-2 flex">
                  <div className="w-full px-4 justify-between items-start inline-flex">
                    <div className="text-[#030500] text-xl font-[400]  leading-relaxed">
                      {holder.amount}
                    </div>
                    <div className="text-[#030500] text-sm font-[400]  leading-normal">
                      {holder.voucherId}
                    </div>
                  </div>
                  <div className="w-full px-4 justify-between items-center inline-flex">
                    <div className="text-[#4a4a4a] text-sm font-[300]  leading-[24px]">
                      {holder.valueSpent} value spent
                    </div>
                    <div className="text-[#ba2543] text-sm font-[300]  leading-normal">{`Expires ${holder.expiry}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherHolders;
