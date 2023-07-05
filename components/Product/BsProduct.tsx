import Image from "next/image";
import React from "react";
import { BsRate } from "../Rate/BsRate";
import { BsLocation } from "../Location/BsLocation";
import { BsAddToBasket } from "../AddToBaslet/BsAddToBasket";

interface BsProductProps {
  imgUrl: string;
  title: string;
  subTitle?: string;
  point: string;
  km: string;
  fillRate: string;
  fillLocation: string;
  fillButton: string;
  btnActionText: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BsProduct = ({
  imgUrl,
  title,
  subTitle,
  point,
  km,
  fillRate,
  fillLocation,
  fillButton,
  btnActionText,
  onClick,
  ...props
}: BsProductProps) => {
  return (
    <div className="flex gap-5 mb-8 last:mb-0">
      <div className="h-[75px] w-[72px] shadow-shallow rounded-medium relative">
        <img
          src={imgUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full rounded-medium"
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-imgPlaceholder rounded-medium"></div>
      </div>
      <div>
        <h1 className="text-black text-base font-semibold leading-6">
          Villa Bosphorus
        </h1>
        <p className="text-gray300 text-xs font-normal leading-4 mt-1">
          Lorem İpsum Sit Dolor Met
        </p>
        <div className="flex gap-6 mt-2.5">
          <BsRate point={point} fill={fillRate} />
          <BsLocation km={km} fill={fillLocation} />
        </div>
        <div className="mt-5">
          <BsAddToBasket fill={fillButton} btnActionText={btnActionText} />
        </div>
      </div>
    </div>
  );
};
