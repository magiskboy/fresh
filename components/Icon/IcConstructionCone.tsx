import React from "react";

export const IcConstructionCone: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 35H35"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.2335 34.5667L20.7168 5C20.6813 4.83631 20.5909 4.68972 20.4605 4.58459C20.3301 4.47945 20.1677 4.42212 20.0002 4.42212C19.8327 4.42212 19.6702 4.47945 19.5399 4.58459C19.4095 4.68972 19.319 4.83631 19.2835 5L9.76685 34.5667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9331 25H27.0164"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9001 14.9165H16.1001"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
