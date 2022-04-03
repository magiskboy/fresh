import React from "react";

export const IcKitchenFridge: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.6667 3.3335H13.3333C11.4924 3.3335 10 4.82588 10 6.66683V31.6668C10 33.5078 11.4924 35.0002 13.3333 35.0002H26.6667C28.5076 35.0002 30 33.5078 30 31.6668V6.66683C30 4.82588 28.5076 3.3335 26.6667 3.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 16.667H28.3333"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 11.6668C17.5871 11.6668 18.3333 10.9206 18.3333 10.0002C18.3333 9.07969 17.5871 8.3335 16.6667 8.3335C15.7462 8.3335 15 9.07969 15 10.0002C15 10.9206 15.7462 11.6668 16.6667 11.6668Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 25.0003C17.5871 25.0003 18.3333 24.2541 18.3333 23.3337C18.3333 22.4132 17.5871 21.667 16.6667 21.667C15.7462 21.667 15 22.4132 15 23.3337C15 24.2541 15.7462 25.0003 16.6667 25.0003Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 35V36.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 35V36.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
