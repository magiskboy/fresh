import React from "react";

export const IcRealEstateBath: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 11.6665H35"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.34961 11.6665V14.9998C6.34961 17.652 7.40318 20.1955 9.27854 22.0709C11.1539 23.9463 13.6974 24.9998 16.3496 24.9998H23.3329C25.9851 24.9998 28.5286 23.9463 30.404 22.0709C32.2794 20.1955 33.3329 17.652 33.3329 14.9998V11.6665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6667 25L28.3334 28.3333"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3334 25L11.6667 28.3333"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
