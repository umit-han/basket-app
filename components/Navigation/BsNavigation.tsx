import Image from "next/image";
import React from "react";
import { BsRate } from "../Rate/BsRate";
import { BsLocation } from "../Location/BsLocation";
import { BsAddToBasket } from "../AddToBaslet/BsAddToBasket";
import Link from "next/link";

interface BsNavigationProps {
  listLink?: string;
  accountLink?: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BsNavigation = ({
  listLink = "#",
  accountLink = "#",
  onClick,
  ...props
}: BsNavigationProps) => {
  return (
    <div className="bg-gray100 p-2 flex items-center justify-center flex-col h-[88px]">
      <div className="flex justify-between w-[157px]">
        <Link href={listLink} className="flex flex-col items-center">
          <svg
            className="w-[18px] h-[18px]"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0V6H18V0H10ZM10 18H18V8H10V18ZM0 18H8V12H0V18ZM0 10H8V0H0V10Z"
              fill="#4D4D4D"
            />
          </svg>
          <p className="text-xs leading-[14px] text-black text-center font-medium mt-3">
            List
          </p>
        </Link>
        <Link href={accountLink} className="flex flex-col items-center">
          <svg
            className="w-[18px] h-[18px]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6C18 7.5913 17.3679 9.11742 16.2426 10.2426C15.1174 11.3679 13.5913 12 12 12C10.4087 12 8.88258 11.3679 7.75736 10.2426C6.63214 9.11742 6 7.5913 6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0ZM12 15C18.63 15 24 17.685 24 21V24H0V21C0 17.685 5.37 15 12 15Z"
              fill="#4D4D4D"
            />
          </svg>

          <p className="text-xs leading-[14px] text-black text-center font-medium mt-3">
            Account
          </p>
        </Link>
      </div>
      <div className="h-[5px] w-[157px] rounded-medium bg-[#CFCFCF] mt-3"></div>
    </div>
  );
};
