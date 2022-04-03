import React from "react";

export const IcActionsNewWindow: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.6667 24.2499V33.3333C36.6667 34.2173 36.3155 35.0652 35.6904 35.6903C35.0653 36.3154 34.2174 36.6666 33.3334 36.6666H6.66671C5.78265 36.6666 4.93481 36.3154 4.30968 35.6903C3.68456 35.0652 3.33337 34.2173 3.33337 33.3333V6.66659C3.33337 5.78253 3.68456 4.93468 4.30968 4.30956C4.93481 3.68444 5.78265 3.33325 6.66671 3.33325H15.8834"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M34.9999 4.75L15.4332 23.4833"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M28.3334 3.16673H33.4834C34.2843 3.13028 35.0673 3.41063 35.663 3.94712C36.2588 4.48361 36.6193 5.23309 36.6667 6.0334V11.5001"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
