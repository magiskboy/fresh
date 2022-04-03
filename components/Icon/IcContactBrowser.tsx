import React from "react";

export const IcContactBrowser: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.1001 2.91675H6.93343C5.09248 2.91675 3.6001 4.40913 3.6001 6.25008V33.5334C3.6001 35.3744 5.09248 36.8667 6.93343 36.8667H33.1001C34.941 36.8667 36.4334 35.3744 36.4334 33.5334V6.25008C36.4334 4.40913 34.941 2.91675 33.1001 2.91675Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0498 13.3835H35.7831"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.41699 7.33325H7.66699V9.08325H9.41699V7.33325Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2666 7.33325H12.5166V9.08325H14.2666V7.33325Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.217 7.33325H17.467V9.08325H19.217V7.33325Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
