import React from "react";

export const IcStatisticsChart1: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33337 3.3335V33.3335C3.33337 34.2176 3.68456 35.0654 4.30968 35.6905C4.93481 36.3156 5.78265 36.6668 6.66671 36.6668H36.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 22.5C15 21.1193 13.8807 20 12.5 20C11.1193 20 10 21.1193 10 22.5V27.5C10 28.8807 11.1193 30 12.5 30C13.8807 30 15 28.8807 15 27.5V22.5Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 14.167C25 12.7863 23.8807 11.667 22.5 11.667C21.1193 11.667 20 12.7863 20 14.167V19.167C20 20.5477 21.1193 21.667 22.5 21.667C23.8807 21.667 25 20.5477 25 19.167V14.167Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 7.5C35 6.11929 33.8807 5 32.5 5C31.1193 5 30 6.11929 30 7.5V12.5C30 13.8807 31.1193 15 32.5 15C33.8807 15 35 13.8807 35 12.5V7.5Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
