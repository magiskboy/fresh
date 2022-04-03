import React from "react";

export const IcSportSmallDumbbell: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99992 10H6.66659C4.82564 10 3.33325 11.4924 3.33325 13.3333V26.6667C3.33325 28.5076 4.82564 30 6.66659 30H9.99992C11.8409 30 13.3333 28.5076 13.3333 26.6667V13.3333C13.3333 11.4924 11.8409 10 9.99992 10Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3332 10H29.9998C28.1589 10 26.6665 11.4924 26.6665 13.3333V26.6667C26.6665 28.5076 28.1589 30 29.9998 30H33.3332C35.1741 30 36.6665 28.5076 36.6665 26.6667V13.3333C36.6665 11.4924 35.1741 10 33.3332 10Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 16.6665H26.6666"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6666 23.3335H13.3333"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
