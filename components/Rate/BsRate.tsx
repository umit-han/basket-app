import React from "react";

interface BsRateProps {
  fill?: string;
  point?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BsRate = ({ fill, point, ...props }: BsRateProps) => {
  return (
    <div className="flex place-items-center gap-2">
      <svg
        width="14"
        height={"10"}
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.06142 6.7125L3.14753 9.22701L4.20395 4.54724L0.711337 1.42685L5.28726 1.03331L7.04213 -3.41055L8.81392 1.02594L13.392 1.40036L9.91061 4.53532L10.9848 9.21064L7.06142 6.7125Z"
          fill={fill}
        />
      </svg>
      <p className="text-xs text-baseBlack leading-4 font-normal">{point}</p>
    </div>
  );
};
