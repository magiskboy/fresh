import React from "react";

export const IcSecurityKey: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 26.6668C13.6819 26.6668 16.6667 23.6821 16.6667 20.0002C16.6667 16.3183 13.6819 13.3335 10 13.3335C6.31814 13.3335 3.33337 16.3183 3.33337 20.0002C3.33337 23.6821 6.31814 26.6668 10 26.6668Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 20H36.6668"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.3334 20V25"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 20V23.3333"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
