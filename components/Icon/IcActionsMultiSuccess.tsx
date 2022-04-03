import React from "react";

export const IcActionsMultiSuccess: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3333 3.33325H6.66659C4.82564 3.33325 3.33325 4.82564 3.33325 6.66659V33.3333C3.33325 35.1742 4.82564 36.6666 6.66659 36.6666H33.3333C35.1742 36.6666 36.6666 35.1742 36.6666 33.3333V6.66659C36.6666 4.82564 35.1742 3.33325 33.3333 3.33325Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M10.9329 21.4167L16.0329 26.5167L29.0662 13.4834"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
