import React from "react";

export const IcKitchenFork: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 16.667V36.667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 3.3335V13.3335C13.3333 14.2176 13.6844 15.0654 14.3096 15.6905C14.9347 16.3156 15.7825 16.6668 16.6666 16.6668H23.3333C24.2173 16.6668 25.0652 16.3156 25.6903 15.6905C26.3154 15.0654 26.6666 14.2176 26.6666 13.3335V3.3335"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 10H26.6666"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 3.3335V10.0002"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
