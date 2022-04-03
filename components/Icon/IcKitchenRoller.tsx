import React from "react";

export const IcKitchenRoller: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6667 8.3335H18.3333C16.4924 8.3335 15 9.82588 15 11.6668V28.3335C15 30.1744 16.4924 31.6668 18.3333 31.6668H21.6667C23.5076 31.6668 25 30.1744 25 28.3335V11.6668C25 9.82588 23.5076 8.3335 21.6667 8.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 3.3335V8.3335"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 31.667V36.667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
