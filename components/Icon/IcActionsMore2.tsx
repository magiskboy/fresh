import React from "react";

export const IcActionsMore2: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0335 10.3166C21.8745 10.3166 23.3669 8.82418 23.3669 6.98324C23.3669 5.14229 21.8745 3.6499 20.0335 3.6499C18.1926 3.6499 16.7002 5.14229 16.7002 6.98324C16.7002 8.82418 18.1926 10.3166 20.0335 10.3166Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M19.9669 23.3332C21.8078 23.3332 23.3002 21.8408 23.3002 19.9998C23.3002 18.1589 21.8078 16.6665 19.9669 16.6665C18.1259 16.6665 16.6335 18.1589 16.6335 19.9998C16.6335 21.8408 18.1259 23.3332 19.9669 23.3332Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M20.0335 36.35C21.8745 36.35 23.3669 34.8576 23.3669 33.0167C23.3669 31.1757 21.8745 29.6833 20.0335 29.6833C18.1926 29.6833 16.7002 31.1757 16.7002 33.0167C16.7002 34.8576 18.1926 36.35 20.0335 36.35Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
