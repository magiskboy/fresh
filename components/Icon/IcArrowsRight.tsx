import React from "react";

export const IcArrowsRight: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5498 20H32.7165"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M26.1166 27.9668L32.9666 21.1168C33.277 20.8045 33.4512 20.3821 33.4512 19.9418C33.4512 19.5015 33.277 19.079 32.9666 18.7668L26.2999 12.1001"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
