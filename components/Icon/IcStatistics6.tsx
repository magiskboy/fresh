import React from "react";

export const IcStatistics6: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9999 3.3335L29.9999 10.0002L36.6666 20.0002L29.9999 31.6668L19.9999 36.6668L8.33325 31.6668L3.33325 20.0002L6.66659 10.0002L19.9999 3.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9999 11.667L13.3333 15.0003L8.33325 20.0003L13.3333 28.3337H19.9999L24.9999 25.0003L23.3333 20.0003L24.9999 15.0003L19.9999 11.667Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
