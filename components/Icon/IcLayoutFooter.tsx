import React from "react";

export const IcLayoutFooter: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66675 36.667L33.3334 36.667C35.1744 36.667 36.6667 35.1746 36.6667 33.3337L36.6667 6.66699C36.6667 4.82604 35.1744 3.33366 33.3334 3.33366L6.66675 3.33366C4.8258 3.33366 3.33341 4.82604 3.33341 6.66699L3.33341 33.3337C3.33341 35.1746 4.8258 36.667 6.66675 36.667Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.6667 23.3335H3.33337"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
