import React from "react";

interface VoucherData {
  title: string;
  count: string;
  bgColor: string;
   icon?: React.ReactNode;
}

const data: VoucherData[] = [
  {
    title: "Total vouchers",
    count: "200 listed",
    bgColor: "#1b2a00",
    icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.75" width="36" height="36" rx="8" fill="#1C2A00" />
        <path
          d="M11.25 25.5H26.25"
          stroke="#A7FC00"
          strokeWidth="1.125"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.0625 12V25.5H20.4375V12C20.4375 11.175 20.1 10.5 19.0875 10.5H18.4125C17.4 10.5 17.0625 11.175 17.0625 12Z"
          stroke="#A7FC00"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16.5V25.5H15V16.5C15 15.675 14.7 15 13.8 15H13.2C12.3 15 12 15.675 12 16.5Z"
          stroke="#A7FC00"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 20.25V25.5H25.5V20.25C25.5 19.425 25.2 18.75 24.3 18.75H23.7C22.8 18.75 22.5 19.425 22.5 20.25Z"
          stroke="#A7FC00"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Published vouchers",
    count: "120 published",
    bgColor: "#1b2a00",
    icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="36" height="36" rx="8" fill="#1C2A00" />
        <path
          d="M23.24 18.0001C25.19 18.0001 26 17.2501 25.28 14.7901C24.7925 13.1326 23.3675 11.7076 21.71 11.2201C19.25 10.5001 18.5 11.3101 18.5 13.2601V15.4201C18.5 17.2501 19.25 18.0001 20.75 18.0001H23.24Z"
          stroke="#A7FC00"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.5 20.0248C23.8025 23.4973 20.4725 26.0173 16.685 25.4023C13.8425 24.9448 11.555 22.6573 11.09 19.8148C10.4825 16.0423 12.9875 12.7123 16.445 12.0073"
          stroke="#A7FC00"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Pending vouchers",
    count: "62 pending",
    bgColor: "#1b2a00",
    icon: (
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.25" width="36" height="36" rx="8" fill="#1C2A00" />
        <path
          d="M25.75 18C25.75 22.14 22.39 25.5 18.25 25.5C14.11 25.5 10.75 22.14 10.75 18C10.75 13.86 14.11 10.5 18.25 10.5C22.39 10.5 25.75 13.86 25.75 18Z"
          stroke="#A7FC00"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.0325 20.3848L18.7075 18.9973C18.3025 18.7573 17.9725 18.1798 17.9725 17.7073V14.6323"
          stroke="#A7FC00"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Expired vouchers",
    count: "18 expired",
    bgColor: "#1b2a00",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="8" fill="#1C2A00" />
        <path
          d="M17.1768 23.9026H22.0293C24.8043 23.9026 25.4943 23.2126 25.4943 20.4376C24.5343 20.4376 23.7618 19.6576 23.7618 18.7051C23.7618 17.7451 24.5343 16.9651 25.4943 16.9651V16.2751C25.4943 13.5001 24.8043 12.8101 22.0293 12.8101H17.2443V17.9026"
          stroke="#A7FC00"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.2452 21.6525V23.9025H15.1677C14.0577 23.9025 13.4052 23.145 12.6852 21.405L12.5502 21.0675C13.4577 20.7075 13.9002 19.6575 13.5177 18.75C13.1502 17.8425 12.1077 17.4075 11.1927 17.7825L11.0652 17.46C9.98517 14.82 10.3602 13.8975 13.0002 12.81L14.9802 12L17.2452 17.49V19.4025"
          stroke="#A7FC00"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.1216 23.9026H14.9941"
          stroke="#A7FC00"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const VoucherCard: React.FC<VoucherData> = ({ title, count,icon }) => {
  return (
    <div className="grow shrink basis-0 h-[126px] px-5 py-4 bg-[#181818] rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] my-10 flex-col justify-start items-start gap-6 flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="text-center text-white text-base font-normal ">
          {title}
        </div>
        <div
          className="w-9 h-9 rounded-lg justify-center items-center flex"
         
        >
          {icon}
        </div>
      </div>
      <div className="self-stretch justify-start items-center gap-3 inline-flex">
        <div className="text-center text-white text-[28px] font-medium ">
          {count}
        </div>
      </div>
    </div>
  );
};

const VoucherList: React.FC = () => {
  return (
    <div className="w-full h-[126px] justify-start items-start gap-4 inline-flex slide-up">
      {data.map((voucher, index) => (
        <VoucherCard
          key={index}
          title={voucher.title}
          count={voucher.count}
          bgColor={voucher.bgColor}
          icon={voucher.icon}
        />
      ))}
    </div>
  );
};

export default VoucherList;
