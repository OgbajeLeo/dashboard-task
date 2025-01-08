import React from "react";

type Status = "pending_approval" | "rejected" | "published";

type VoucherActivity = {
  id: string;
  voucherNumber: string;
  dateCreated: string;
  status: Status;
  reach: number;
  impressions: number;
  investorCount: number;
};

const getStatusStyles = (
  status: Status
): {
  bgColor: string;
  borderColor: string;
  textColor: string;
  label: string;
} => {
  switch (status) {
    case "pending_approval":
      return {
        bgColor: "bg-[#e97d19]/10",
        borderColor: "border-[#e97d19]/25",
        textColor: "text-[#ea7e1a]",
        label: "Pending approval",
      };
    case "rejected":
      return {
        bgColor: "bg-[#ba2543]/10",
        borderColor: "border-[#ba2543]/30",
        textColor: "text-[#ba2543]",
        label: "Rejected",
      };
    case "published":
      return {
        bgColor: "bg-[#29b358]/10",
        borderColor: "border-[#29b358]/25",
        textColor: "text-[#29b358]",
        label: "Published",
      };
  }
};

const StatusBadge = ({ status }: { status: Status }) => {
  const styles = getStatusStyles(status);

  return (
    <div
      className={`px-3 py-1 ${styles.bgColor} rounded-full border ${styles.borderColor} justify-center items-center gap-2 inline-flex`}
    >
      <div className={`${styles.textColor} text-sm font-normal`}>
        {styles.label}
      </div>
    </div>
  );
};

const ActivityRow = ({ activity }: { activity: VoucherActivity }) => {
  return (
    <div className="self-stretch p-5 bg-[#141414] rounded-2xl justify-start items-center inline-flex overflow-hidden">
      <div className="w-[185px] text-white text-[15px] font-normal">
        {activity.voucherNumber}
      </div>
      <div className="w-[185px] text-white text-[15px] font-normal">
        {activity.dateCreated}
      </div>
      <div className="w-[185px] flex-col justify-start items-start gap-2.5 inline-flex">
        <StatusBadge status={activity.status} />
      </div>
      <div className="w-[185px] text-white text-[15px] font-normal">
        Seen by {activity.reach} people
      </div>
      <div className="w-[185px] text-white text-[15px] font-normal">
        Seen {activity.impressions} times
      </div>
      <div className="text-white text-[15px] font-normal">
        {activity.investorCount}
      </div>
    </div>
  );
};

// Sample data
const sampleActivities: VoucherActivity[] = [
  {
    id: "1",
    voucherNumber: "JP-24-MJOO26",
    dateCreated: "02-12-2024",
    status: "pending_approval",
    reach: 100,
    impressions: 500,
    investorCount: 0,
  },
  {
    id: "2",
    voucherNumber: "JP-24-MJOO26",
    dateCreated: "02-12-2024",
    status: "rejected",
    reach: 100,
    impressions: 500,
    investorCount: 0,
  },
  {
    id: "3",
    voucherNumber: "JP-24-MJOO26",
    dateCreated: "02-12-2024",
    status: "published",
    reach: 100,
    impressions: 500,
    investorCount: 5,
  },
];

const VoucherActivity = () => {
  return (
    <div className="w-full p-5 bg-[#181818] rounded-xl mt-[18px] slide-up mb-20">
      <div className="flex justify-between items-center mb-4">
        <div className="text-white text-2xl font-medium">Voucher activity</div>
        <div className="text-[#a7fc00] text-sm cursor-pointer">See all</div>
      </div>

      <div className="flex-col justify-start items-start inline-flex w-full">
        <div className="self-stretch px-5 py-4  justify-start items-center inline-flex overflow-hidden">
          <div className="w-[185px] text-[#b3b4b3] text-[15px] font-normal">
            Voucher number
          </div>
          <div className="w-[185px] text-[#b3b4b3] text-[15px] font-normal">
            Date created
          </div>
          <div className="w-[185px] text-[#b3b4b3] text-[15px] font-normal">
            Status
          </div>
          <div className="w-[185px] text-[#b3b4b3] text-[15px] font-normal">
            Reach
          </div>
          <div className="w-[185px] text-[#b3b4b3] text-[15px] font-normal">
            Impressions
          </div>
          <div className="w-[185px] text-[#b3b4b3] text-[15px] font-normal">
            Investor count
          </div>
        </div>

        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          {sampleActivities.map((activity) => (
            <ActivityRow key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoucherActivity;
