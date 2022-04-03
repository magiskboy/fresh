import React from "react";

export const IcShoppingDiscount: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3333 3.3335H6.66659C4.82564 3.3335 3.33325 4.82588 3.33325 6.66683V33.3335C3.33325 35.1744 4.82564 36.6668 6.66659 36.6668H33.3333C35.1742 36.6668 36.6666 35.1744 36.6666 33.3335V6.66683C36.6666 4.82588 35.1742 3.3335 33.3333 3.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.4166 9.5835L9.58325 30.4168"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 16.6667C15.1743 16.6667 16.6667 15.1743 16.6667 13.3333C16.6667 11.4924 15.1743 10 13.3333 10C11.4924 10 10 11.4924 10 13.3333C10 15.1743 11.4924 16.6667 13.3333 16.6667Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6666 30.0002C28.5075 30.0002 29.9999 28.5078 29.9999 26.6668C29.9999 24.8259 28.5075 23.3335 26.6666 23.3335C24.8256 23.3335 23.3333 24.8259 23.3333 26.6668C23.3333 28.5078 24.8256 30.0002 26.6666 30.0002Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
