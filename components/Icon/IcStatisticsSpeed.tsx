import React from "react";

export const IcStatisticsSpeed: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 26.6667V25C5 21.0218 6.58035 17.2064 9.3934 14.3934C12.2064 11.5804 16.0218 10 20 10V10C23.9782 10 27.7936 11.5804 30.6066 14.3934C33.4196 17.2064 35 21.0218 35 25V26.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0001 30.0002C21.841 30.0002 23.3334 28.5078 23.3334 26.6668C23.3334 24.8259 21.841 23.3335 20.0001 23.3335C18.1591 23.3335 16.6667 24.8259 16.6667 26.6668C16.6667 28.5078 18.1591 30.0002 20.0001 30.0002Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3333 23.3332L27.4999 19.1665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
