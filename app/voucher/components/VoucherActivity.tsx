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
      <div className={`${styles.textColor} text-sm font-[300]`}>
        {styles.label}
      </div>
    </div>
  );
};

const ActivityRow = ({ activity }: { activity: VoucherActivity }) => {
  return (
    <tr className="px-[22px] py-[20px] bg-[#141414] space-y-2  border-b-[8px] border-[#181818] w-full ">
      <td className="px-[22px]  text-neutral-gray text-[15px] font-[300] rounded-l-2xl">
        <div className="h-[72px] flex justify-start items-center">{activity.voucherNumber}</div>
      </td>
      <td className="px-4 py-3 text-neutral-gray text-[15px] font-[300]">
        {activity.dateCreated}
      </td>
      <td className="px-4 py-3">
        <StatusBadge status={activity.status} />
      </td>
      <td className="px-4 py-3 text-neutral-gray text-[15px] font-[300]">
        Seen by {activity.reach} people
      </td>
      <td className="px-4 py-3 text-neutral-gray text-[15px] font-[300]">
        Seen {activity.impressions} times
      </td>
      <td className="px-4 py-3 text-neutral-gray text-[15px] font-[300] rounded-r-2xl">
        {activity.investorCount}
      </td>
    </tr>
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
      <div className="flex justify-between items-center mb-5  px-4">
        <div className="text-white text-2xl font-[400]">Voucher activity</div>
        <div className="text-[#a7fc00] text-sm cursor-pointer">See all</div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-2xl">
          <thead>
            <tr>
              <th className="px-5 py-4 text-[#b3b4b3] text-[15px] font-[300] text-left">
                Voucher number
              </th>
              <th className="px-5 py-4 text-[#b3b4b3] text-[15px] font-[300] text-left">
                Date created
              </th>
              <th className="px-5 py-4 text-[#b3b4b3] text-[15px] font-[300] text-left">
                Status
              </th>
              <th className="px-5 py-4 text-[#b3b4b3] text-[15px] font-[300] text-left">
                Reach
              </th>
              <th className="px-5 py-4 text-[#b3b4b3] text-[15px] font-[300] text-left">
                Impressions
              </th>
              <th className="px-5 py-4 text-[#b3b4b3] text-[15px] font-[300] text-left">
                Investor count
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleActivities.map((activity) => (
              <ActivityRow key={activity.id} activity={activity} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherActivity;
