import React from "react";
import g1 from '@/public/g1.png'
import g2 from '@/public/g2.png'
import g3 from '@/public/g3.png'
import Image from "next/image";

const ProjectListPage: React.FC = () => {
  const projects = [
    {
      name: "Cityscape Living",
      category: "Real estate",
      dateListed: "02-07-2024",
      fundingGoal: "$10,000",
      fundingDeadline: "02-12-2024",
      fundingProgress: 25,
      status: "Funding open",
      statusColor: "#29b358",
          progressColor: "#a7fc00",
      image: g1,
    },
    {
      name: "Mawi",
      category: "Entertainment",
      dateListed: "02-05-2024",
      fundingGoal: "$20,000",
      fundingDeadline: "31-12-2024",
      fundingProgress: 80,
      status: "In progress",
      statusColor: "#ea7e1a",
        progressColor: "#a7fc00",
      image: g3,
    },
    {
      name: "Truffle Skin",
      category: "Beauty",
      dateListed: "01-01-2024",
      fundingGoal: "$30,000",
      fundingDeadline: "01-09-2024",
      fundingProgress: 0,
      status: "Failed to fund",
      statusColor: "#ba2543",
        progressColor: "#a7fc00",
      image: g2,
    },
  ];

  return (
    <div className="w-full bg-[#181818] rounded-xl mb-20 p-5 pb-[35px] mt-10 slide-up">
      <div className="flex items-center justify-between h-full mb-[23px]">
        <div className="text-white text-[24px] font-[500px] ">Listed projects</div>
        <div className="border border-[#4A4A4A] rounded-lg text-white text-[13px] h-[32px] w-[94px] flex justify-center items-center cursor-pointer hover:scale-105">
          View report
        </div>
      </div>

      <table className="w-full text-left table-auto border-collapse">
        <thead className="py-2.5 h-[51px]">
          <tr className="text-[#b3b4b3] text-[14px] font-normal py-2.5">
            <th className="py-2 px-4 font-normal ">Project</th>
            <th className="py-2 px-4 font-normal ">Status</th>
            <th className="py-2 px-4 font-normal ">Date listed</th>
            <th className="py-2 px-4 font-normal ">Funding goal</th>
            <th className="py-2 px-4 font-normal ">Funding progress</th>
            <th className="py-2 px-4 font-normal ">Funding deadline</th>
          </tr>
        </thead>
        <tbody className="space-y-2 w-full rounded-2xl ">
          {projects.map((project, index) => (
            <tr
              key={index}
              style={{ borderRadius: 20 }}
              className={` space-y-2  border-b-[8px] border-[#181818] w-full ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              {/* Project Name and Category */}
              <td className="bg-[#141414] py-[18px] px-4 flex items-center gap-3 rounded-l-2xl z-40">
                <Image
                  className="w-10 h-10 rounded-full"
                  src={project.image}
                  alt={project.name}
                />
                <div>
                  <div className="text-white text-base font-[500]">
                    {project.name}
                  </div>
                  <div className="text-[#838383] text-[15px]">
                    {project.category}
                  </div>
                </div>
              </td>
              {/* Status */}
              <td className="py-3 px-4 bg-[#141414]">
                <span
                  className="px-3 py-2 rounded-full text-sm"
                  style={{
                    color: project.statusColor,
                    backgroundColor: `${project.statusColor}10`,
                    border: `1px solid ${project.statusColor}25`,
                  }}
                >
                  {project.status}
                </span>
              </td>
              {/* Date Listed */}
              <td className="py-3 px-4 bg-[#141414] text-white">
                {project.dateListed}
              </td>
              {/* Funding Goal */}
              <td className="py-3 px-4 bg-[#141414] text-white">
                {project.fundingGoal}
              </td>
              {/* Funding Progress */}
              <td className="py-3 px-4 bg-[#141414]">
                <div className="flex items-center gap-3">
                  <div className="w-[156px] h-[5px] bg-[#4a4a4a] rounded-full relative">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${project.fundingProgress}%`,
                        backgroundColor: project.progressColor,
                      }}
                    ></div>
                  </div>
                  <span className="text-[#616161] text-[15px]">
                    {project.fundingProgress}%
                  </span>
                </div>
              </td>
              {/* Funding Deadline */}
              <td className="py-3 px-4 text-white rounded-r-2xl bg-[#141414]">
                {project.fundingDeadline}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectListPage;
