import React from "react";

export const IcStatisticsWorkflow: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 15C22.7614 15 25 12.7614 25 10C25 7.23858 22.7614 5 20 5C17.2386 5 15 7.23858 15 10C15 12.7614 17.2386 15 20 15Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 26.6665H6.66658C4.82564 26.6665 3.33325 28.1589 3.33325 29.9998V31.6665C3.33325 33.5075 4.82564 34.9998 6.66658 34.9998H13.3333C15.1742 34.9998 16.6666 33.5075 16.6666 31.6665V29.9998C16.6666 28.1589 15.1742 26.6665 13.3333 26.6665Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3333 26.6665H26.6666C24.8256 26.6665 23.3333 28.1589 23.3333 29.9998V31.6665C23.3333 33.5075 24.8256 34.9998 26.6666 34.9998H33.3333C35.1742 34.9998 36.6666 33.5075 36.6666 31.6665V29.9998C36.6666 28.1589 35.1742 26.6665 33.3333 26.6665Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 26.6667V23.3333C10 22.4493 10.3512 21.6014 10.9763 20.9763C11.6014 20.3512 12.4493 20 13.3333 20H26.6667C27.5507 20 28.3986 20.3512 29.0237 20.9763C29.6488 21.6014 30 22.4493 30 23.3333V26.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 15V20"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
