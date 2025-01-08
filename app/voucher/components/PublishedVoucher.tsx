import Image from "next/image";
import React from "react";
import depth from '@/public/depth.png'

// Define the type for a single voucher
type Voucher = {
  id: string;
  title: string;
  status: string;
  voucherCode: string;
  price: number;
  niche: string;
  listedUnits: number;
  remainingUnits: number;
  imageUrl: string;
};

// Sample data array
const sampleVouchers: Voucher[] = [
  {
    id: "1",
    title: "20% added value",
    status: "Published",
    voucherCode: "JP-24-MJOO26",
    price: 500,
    niche: "Lifestyle",
    listedUnits: 200,
    remainingUnits: 100,
    imageUrl: "/api/placeholder/80/80",
  },
  {
    id: "2",
    title: "20% added value",
    status: "Published",
    voucherCode: "JP-24-MJOO26",
    price: 500,
    niche: "Lifestyle",
    listedUnits: 200,
    remainingUnits: 100,
    imageUrl: "/api/placeholder/80/80",
  },
  {
    id: "3",
    title: "20% added value",
    status: "Published",
    voucherCode: "JP-24-MJOO26",
    price: 500,
    niche: "Lifestyle",
    listedUnits: 200,
    remainingUnits: 0,
    imageUrl: "/api/placeholder/80/80",
  },
];

const VoucherCard = ({ voucher }: { voucher: Voucher }) => {
  return (
    <div className="w-[354px] p-[18px] bg-[#141414] rounded-xl flex-col justify-center items-start gap-3 inline-flex grow shrink basis-0">
      <div className="self-stretch justify-start items-center gap-3 inline-flex">
        <Image
          className="w-20 h-20 relative rounded-xl"
          src={depth}
          alt="Voucher"
        />
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch text-white text-base font-medium font-['Figtree']">
            {voucher.title}
          </div>
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="px-3 py-1 bg-green-500/10 rounded-full border border-green-500/25 justify-center items-center gap-2 flex">
              <div className="text-green-500 text-sm font-normal">
                {voucher.status}
              </div>
            </div>
            <div className="self-stretch px-2 py-px bg-[#1d1d1d] rounded justify-start items-center gap-1 flex">
              <div className="text-[#cdcdcc] text-xs font-medium">
                {voucher.voucherCode}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch justify-between items-start inline-flex">
        <div className="text-white text-[15px] font-normal">Voucher price:</div>
        <div className="text-white text-[15px] font-normal">
          ${voucher.price} / Unit
        </div>
      </div>

      <div className="self-stretch justify-between items-end inline-flex">
        <div className="text-white text-[15px] font-normal">Niche:</div>
        <div className="text-white text-[15px] font-normal">
          {voucher.niche}
        </div>
      </div>

      <div className="self-stretch justify-between items-start inline-flex">
        <div className="text-white text-[15px] font-normal">Listed units:</div>
        <div className="text-white text-[15px] font-normal">
          {voucher.listedUnits}
        </div>
      </div>

      <div className="self-stretch justify-between items-end inline-flex">
        <div className="text-white text-[15px] font-normal">
          Remaining units:
        </div>
        <div className="text-white text-[15px] font-normal">
          {voucher.remainingUnits}
        </div>
      </div>

      <div className="self-stretch justify-between items-start inline-flex">
        <button className="px-3 py-2 hover:scale-105 rounded-lg border border-[#4a4a4a] justify-end items-center gap-1.5 flex">
          <div className="text-right text-white text-[13px] font-medium">
            View details
          </div>
        </button>
        <div className="w-8 h-8 justify-center items-center flex">
          <div className="w-8 h-8 relative"></div>
        </div>
      </div>
    </div>
  );
};

const PublishedVoucher = () => {
  return (
    <div className="w-full p-5 bg-[#181818] rounded-xl mt-[18px] slide-up">
      <div className="flex justify-between items-center mb-8">
        <div className="text-white text-2xl font-medium">
          Published vouchers
        </div>
        <button className="text-[#a7fc00] text-sm cursor-pointer hover:underline">See all</button>
      </div>

      <div className="flex justify-between items-center gap-4 overflow-x-auto grow shrink basis-0">
        {sampleVouchers.map((voucher) => (
          <VoucherCard key={voucher.id} voucher={voucher} />
        ))}
      </div>
    </div>
  );
};

export default PublishedVoucher;
