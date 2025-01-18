"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import profile from "../../public/profile.png";
import {
  ActiveHomeIcon,
  ActiveVoucherIcon,
  AffliateIcon,
  AnalyticsIcon,
  BellIcon,
  HomeIcon,
  Logo,
  LogoutIcon,
  PayoutsIcon,
  ProjectIcon,
  ReferralsIcon,
  RewardsIcon,
  SearchIcon,
  SettingsIcon,
  SportlightIcon,
  SupportIcon,
  VoucherIcon,
} from "./iconsSVG";
import Image from "next/image";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const router = useRouter();
  const path = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      route: "/",
      icon: HomeIcon,
      activeIcon: ActiveHomeIcon,
    },
    {
      name: "Projects",
      route: "/dashboard/projects",
      icon: ProjectIcon,
      activeIcon: ProjectIcon,
    },
    {
      name: "Vouchers",
      route: "/voucher",
      icon: VoucherIcon,
      activeIcon: ActiveVoucherIcon,
    },
    {
      name: "Analytics",
      route: "/dashboard/analytics",
      icon: AnalyticsIcon,
      activeIcon: AnalyticsIcon,
    },
    {
      name: "Spotlight",
      route: "/dashboard/spotlight",
      icon: SportlightIcon,
      activeIcon: SportlightIcon,
    },
    {
      name: "Rewards",
      route: "/dashboard/rewards",
      icon: RewardsIcon,
      activeIcon: RewardsIcon,
    },
    {
      name: "Affiliate Program",
      route: "/dashboard/affiliate",
      icon: AffliateIcon,
      activeIcon: AffliateIcon,
    },
    {
      name: "Payouts",
      route: "/dashboard/payouts",
      icon: PayoutsIcon,
      activeIcon: PayoutsIcon,
    },
    {
      name: "Referral",
      route: "/dashboard/referral",
      icon: ReferralsIcon,
      activeIcon: ReferralsIcon,
    },
    {
      name: "Settings",
      route: "/dashboard/settings",
      icon: SettingsIcon,
      activeIcon: SettingsIcon,
    },
  ];

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar Section */}
      <div className="w-[16.5%] bg-[#151515] text-[#b3b4b3] flex flex-col justify-between">
        {/* Logo Section */}
        <div className="pt-[30px] pl-[28px] pb-[59px]">
          <Logo />
        </div>

        <div className="h-screen  overflow-hidden  side-link-list">
          {/* Menu Section */}
          <div className="flex-1 pl-4 space-y-2">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className={`flex items-center py-3 px-4 cursor-pointer font-normal group ${
                  path === item.route
                    ? "bg-[#212121] text-white border-l-[3px] border-[#a7fc00]"
                    : "hover:bg-[#1e1e1e] hover:scale-105 hover:opacity-90 transition-all ease-in-out duration-200 hover:text-white"
                }`}
                onClick={() => router.push(item.route)}
              >
                <span className="text-lg mr-4">
                  {path === item.route ? (
                    // Render only the active icon when the path is active
                    item.activeIcon ? (
                      <item.activeIcon />
                    ) : (
                      <item.icon />
                    )
                  ) : (
                    // Render different icons on hover for non-active paths
                    <>
                      <span className="group-hover:hidden">
                        <item.icon />
                      </span>
                      {item.activeIcon && (
                        <span className="hidden group-hover:block">
                          <item.activeIcon />
                        </span>
                      )}
                    </>
                  )}
                </span>
                <span className="text-base font-medium ">{item.name}</span>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="px-4 py-4 mt-12">
            <div
              className="flex items-center py-3 px-4 gap-4 rounded-lg cursor-pointer hover:bg-[#1e1e1e]"
              onClick={() => router.push("/dashboard/support")}
            >
              <SupportIcon />
              <span className="text-base font-medium">Support</span>
            </div>
            <div
              className="flex items-center py-3 px-4 gap-4 rounded-lg cursor-pointer hover:bg-[#1e1e1e]"
              onClick={() => router.push("/logout")}
            >
              <LogoutIcon />
              <span className="text-base font-medium">Logout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Header Section */}
      <div className="fixed left-[16.5%] w-[calc(100%-16.5%)] h-[92px] pr-8 py-6 bg-[#030500] flex justify-between items-center">
        <div className="w-[298px] h-11 pl-6 ml-10 bg-[#181818] rounded-[100px] flex items-center gap-2.5 focus:ring-2 focus:border-primary-green">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full bg-transparent text-[#838383] pr-3 text-base font-normal outline-none placeholder-[#838383]"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 p-[9px] bg-[#181818] rounded-[100px] flex justify-center items-center hover:scale-105 cursor-pointer">
            <BellIcon />
          </div>
          <Image src={profile} alt="profile" width={40} height={40} />
        </div>
      </div>

      {/* Main Content  */}
      <div className="flex-1 h-[calc(100%-104px)] no-scrollbar  overflow-y-auto mt-[104px] ml-10 pr-8">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
