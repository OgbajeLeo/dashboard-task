import React from "react";
import ProgressBar from "./ProgressBar";

type CardData = {
  title: string;
  count: string;
  icon?: React.ReactNode; // Optional icon for each card
  progress?: number; // Optional funding progress for the last card
};

const cardData: CardData[] = [
  {
    title: "All projects",
    count: "3 listed",
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
          d="M25.3145 17.1818C25.1292 15.5226 24.3852 13.9758 23.2047 12.7953C22.0242 11.6148 20.4774 10.8708 18.8182 10.6855V9.81818C18.8182 9.36818 18.45 9 18 9C17.55 9 17.1818 9.36818 17.1818 9.81818V10.6855C15.5226 10.8708 13.9758 11.6148 12.7953 12.7953C11.6148 13.9758 10.8708 15.5226 10.6855 17.1818H9.81818C9.36818 17.1818 9 17.55 9 18C9 18.45 9.36818 18.8182 9.81818 18.8182H10.6855C10.8708 20.4774 11.6148 22.0242 12.7953 23.2047C13.9758 24.3852 15.5226 25.1292 17.1818 25.3145V26.1818C17.1818 26.6318 17.55 27 18 27C18.45 27 18.8182 26.6318 18.8182 26.1818V25.3145C20.4774 25.1292 22.0242 24.3852 23.2047 23.2047C24.3852 22.0242 25.1292 20.4774 25.3145 18.8182H26.1818C26.6318 18.8182 27 18.45 27 18C27 17.55 26.6318 17.1818 26.1818 17.1818H25.3145ZM18 23.7273C14.8336 23.7273 12.2727 21.1664 12.2727 18C12.2727 14.8336 14.8336 12.2727 18 12.2727C21.1664 12.2727 23.7273 14.8336 23.7273 18C23.7273 21.1664 21.1664 23.7273 18 23.7273Z"
          fill="#A7FC00"
        />
      </svg>
    ),
  },
  {
    title: "Brand vouchers",
    count: "0 listed",
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5922 18.612C10.8074 19.3642 11.3872 19.9432 12.5459 21.102L13.9184 22.4745C15.9359 24.4927 16.9439 25.5 18.1964 25.5C19.4497 25.5 20.4577 24.492 22.4744 22.4752C24.4919 20.4577 25.4999 19.4497 25.4999 18.1965C25.4999 16.944 24.4919 15.9352 22.4752 13.9185L21.1027 12.546C19.9432 11.3872 19.3642 10.8075 18.6119 10.5922C17.8597 10.3762 17.0609 10.5607 15.4642 10.9297L14.5432 11.142C13.1992 11.4517 12.5272 11.607 12.0667 12.0667C11.6062 12.5265 11.4524 13.2 11.1419 14.5432L10.9289 15.4642C10.5607 17.0617 10.3769 17.8597 10.5922 18.612ZM16.5914 14.4532C16.7361 14.5928 16.8515 14.7597 16.9309 14.9443C17.0104 15.1289 17.0522 15.3275 17.054 15.5284C17.0558 15.7294 17.0176 15.9287 16.9415 16.1147C16.8655 16.3007 16.7531 16.4697 16.611 16.6118C16.4689 16.7539 16.2999 16.8663 16.1139 16.9423C15.9279 17.0184 15.7286 17.0567 15.5276 17.0548C15.3267 17.053 15.1281 17.0112 14.9435 16.9317C14.7589 16.8523 14.5919 16.7369 14.4524 16.5922C14.1772 16.3069 14.0251 15.9249 14.0286 15.5284C14.0322 15.132 14.1913 14.7528 14.4717 14.4725C14.752 14.1921 15.1312 14.033 15.5276 14.0295C15.9241 14.0259 16.3061 14.178 16.5914 14.4532ZM23.2874 18.0382L18.0532 23.2732C17.9471 23.3757 17.8049 23.4323 17.6575 23.4309C17.51 23.4296 17.3689 23.3704 17.2647 23.266C17.1604 23.1617 17.1013 23.0206 17.1001 22.8731C17.0989 22.7256 17.1557 22.5835 17.2582 22.4775L22.4917 17.2425C22.5972 17.137 22.7403 17.0777 22.8896 17.0777C23.0388 17.0777 23.1819 17.137 23.2874 17.2425C23.393 17.348 23.4522 17.4911 23.4522 17.6404C23.4522 17.7896 23.393 17.9327 23.2874 18.0382Z"
          fill="#A7FC00"
        />
      </svg>
    ),
  },
  {
    title: "Investor count",
    count: "5 investors",
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
          d="M14.9062 18C15.7268 18 16.5137 17.6741 17.0939 17.0939C17.6741 16.5137 18 15.7268 18 14.9062C18 14.0857 17.6741 13.2988 17.0939 12.7186C16.5137 12.1384 15.7268 11.8125 14.9062 11.8125C14.0857 11.8125 13.2988 12.1384 12.7186 12.7186C12.1384 13.2988 11.8125 14.0857 11.8125 14.9062C11.8125 15.7268 12.1384 16.5137 12.7186 17.0939C13.2988 17.6741 14.0857 18 14.9062 18ZM21.9375 18C22.5342 18 23.1065 17.7629 23.5285 17.341C23.9504 16.919 24.1875 16.3467 24.1875 15.75C24.1875 15.1533 23.9504 14.581 23.5285 14.159C23.1065 13.7371 22.5342 13.5 21.9375 13.5C21.3408 13.5 20.7685 13.7371 20.3465 14.159C19.9246 14.581 19.6875 15.1533 19.6875 15.75C19.6875 16.3467 19.9246 16.919 20.3465 17.341C20.7685 17.7629 21.3408 18 21.9375 18ZM11.8125 19.125C11.3649 19.125 10.9357 19.3028 10.6193 19.6193C10.3028 19.9357 10.125 20.3649 10.125 20.8125V20.8969C10.125 20.8969 10.125 24.1875 14.9062 24.1875C19.6875 24.1875 19.6875 20.8969 19.6875 20.8969V20.8125C19.6875 20.3649 19.5097 19.9357 19.1932 19.6193C18.8768 19.3028 18.4476 19.125 18 19.125H11.8125ZM21.9375 23.0625C21.1185 23.0625 20.4705 22.9511 19.9569 22.7739C20.1999 22.3802 20.3394 22.0005 20.4182 21.6939C20.4756 21.4736 20.5119 21.2484 20.5268 21.0212L20.529 20.961L20.5296 20.9374V20.8125C20.5308 20.1897 20.3013 19.5886 19.8855 19.125H24.5211C24.6988 19.1249 24.8749 19.1599 25.0391 19.2279C25.2034 19.2958 25.3527 19.3955 25.4784 19.5212C25.6041 19.6469 25.7039 19.7961 25.7719 19.9603C25.84 20.1246 25.875 20.3006 25.875 20.4784C25.875 20.4784 25.875 23.0625 21.9375 23.0625Z"
          fill="#A7FC00"
        />
      </svg>
    ),
  },
  {
    title: "Funding progress",
      count: "25%",
    icon:(<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="8" fill="#1C2A00"/>
<path d="M16.4122 10.6552C16.769 10.6132 17.1284 10.7074 17.4187 10.9191C17.7089 11.1308 17.9085 11.4442 17.9775 11.7967L17.9962 11.922L18 12V17.25C18 17.4337 18.0675 17.611 18.1895 17.7483C18.3116 17.8856 18.4798 17.9733 18.6622 17.9947L18.75 18H23.85C24.2478 18 24.6294 18.158 24.9107 18.4393C25.192 18.7206 25.35 19.1022 25.35 19.5C25.35 19.5571 25.3434 19.6139 25.3305 19.6695C25.0303 20.9645 24.3914 22.1564 23.4791 23.1233C22.5668 24.0901 21.4139 24.7971 20.1385 25.1719C18.8631 25.5466 17.511 25.5757 16.2207 25.256C14.9304 24.9364 13.7482 24.2795 12.7952 23.3527C11.8422 22.4259 11.1527 21.2625 10.7973 19.9816C10.4418 18.7007 10.4332 17.3483 10.7723 16.0629C11.1114 14.7776 11.786 13.6055 12.7271 12.6666C13.6682 11.7277 14.8419 11.0558 16.128 10.7197L16.3305 10.6695L16.4122 10.6552Z" fill="#A7FC00"/>
<path d="M19.5 11.625V15.75C19.5 15.9489 19.579 16.1397 19.7197 16.2803C19.8603 16.421 20.0511 16.5 20.25 16.5H24.375C24.4949 16.5 24.613 16.4712 24.7195 16.4161C24.8259 16.361 24.9176 16.2812 24.9869 16.1834C25.0562 16.0855 25.101 15.9725 25.1176 15.8538C25.1342 15.735 25.1221 15.6141 25.0823 15.501C24.7098 14.443 24.1047 13.482 23.3116 12.6888C22.5186 11.8956 21.5577 11.2904 20.4998 10.9177C20.3866 10.8778 20.2656 10.8656 20.1467 10.8821C20.0279 10.8986 19.9148 10.9434 19.8169 11.0127C19.7189 11.0819 19.639 11.1737 19.5839 11.2803C19.5288 11.3868 19.5 11.505 19.5 11.625Z" fill="#A7FC00"/>
</svg>
),
    progress: 25,
  },
];

const Card: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-2 gap-4 mt-10 w-fit">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`w-[231px] ${
            card.progress ? "h-[135px]" : "h-[135px]"
          } px-5 py-4 bg-[#181818] rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex-col justify-start items-start  inline-flex overflow-hidden`}
        >
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-center text-white text-base font-normal font-['Figtree']">
              {card.title}
            </div>
            <div className="w-9 h-9 bg-[#1b2a00] rounded-lg justify-center items-center flex">
              {card.icon}
            </div>
          </div>
            <div
              className={`${
                index === 3 ? "text-[24px" : "text-[28px]"
              } text-center text-white  font-medium mt-6 `}
            >
              {card.count}
           
          </div>
          {index == 3 && <ProgressBar progress={20} />}

        
        </div>
      ))}
    </div>
  );
};

export default Card;
