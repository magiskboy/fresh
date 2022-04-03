import React from "react";

export const IcLayoutPictureLeft: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.6667 3.3335H25.0001C23.1591 3.3335 21.6667 4.82588 21.6667 6.66683V13.3335C21.6667 15.1744 23.1591 16.6668 25.0001 16.6668H31.6667C33.5077 16.6668 35.0001 15.1744 35.0001 13.3335V6.66683C35.0001 4.82588 33.5077 3.3335 31.6667 3.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6667 23.3335H25.0001C23.1591 23.3335 21.6667 24.8259 21.6667 26.6668V33.3335C21.6667 35.1744 23.1591 36.6668 25.0001 36.6668H31.6667C33.5077 36.6668 35.0001 35.1744 35.0001 33.3335V26.6668C35.0001 24.8259 33.5077 23.3335 31.6667 23.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 26.667H5"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9999 33.3335H8.33325"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9999 13.3335H8.33325"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6.66699H5"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
