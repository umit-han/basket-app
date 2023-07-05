import React from "react";

interface BsButtonProps {
  isDisabled?: boolean;
  btnType: "button" | "submit" | "reset";
  link?: string;
  variant?: "primary" | "secondary";
  label: string;
  target?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const BsButton = ({
  isDisabled = false,
  btnType = "button",
  link,
  variant = "primary",
  label,
  target,
  onClick,
  ...props
}: BsButtonProps) => {
  let textColor = "primary";
  let bgColor = "primary";
  let borderColor = isDisabled ? "gray400" : "primary";
  if (variant === "primary" && isDisabled === false) {
    bgColor = "primary";
    textColor = "baseWhite";
  } else if (variant === "secondary" && isDisabled === false) {
    bgColor = "baseWhite";
    textColor = "primary";
  } else if (isDisabled === true) {
    bgColor = "gray400";
    textColor = "baseWhite";
  }
  const btnClasses = `bg-${bgColor} text-${textColor} text-sm leading-[18px] font-bold text-center h-[56px] w-full rounded-medium border border-solid border-${borderColor} p-[18px]`;

  if (link) {
    return (
      <a href={link} target={target} className={`${btnClasses} block`}>
        {label}
      </a>
    );
  } else {
    return (
      <button
        type={btnType}
        className={`${btnClasses}`}
        disabled={isDisabled}
        {...props}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
};
