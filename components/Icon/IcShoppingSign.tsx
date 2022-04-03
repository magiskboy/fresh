import React from "react";

export const IcShoppingSign: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.6667 10H15.0001C13.1591 10 11.6667 11.4924 11.6667 13.3333V21.6667C11.6667 23.5076 13.1591 25 15.0001 25H31.6667C33.5077 25 35.0001 23.5076 35.0001 21.6667V13.3333C35.0001 11.4924 33.5077 10 31.6667 10Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 36.6668V6.66683C5 5.78277 5.35119 4.93493 5.97631 4.30981C6.60143 3.68469 7.44928 3.3335 8.33333 3.3335H35"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 3.3335V10.0002"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.3333 3.3335V10.0002"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
