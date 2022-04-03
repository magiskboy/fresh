import React from "react";

export const IcConstructionNail: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1667 12.8667C25.9749 12.8667 30.6834 10.9192 30.6834 8.51675C30.6834 6.11431 25.9749 4.16675 20.1667 4.16675C14.3585 4.16675 9.65002 6.11431 9.65002 8.51675C9.65002 10.9192 14.3585 12.8667 20.1667 12.8667Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7167 12.8667L20.1833 34.4667L25.2667 12.8667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
