import React from "react";

export const IcActionsNewtab: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3333 6.66675H6.66659C4.82564 6.66675 3.33325 8.15913 3.33325 10.0001V30.0001C3.33325 31.841 4.82564 33.3334 6.66659 33.3334H33.3333C35.1742 33.3334 36.6666 31.841 36.6666 30.0001V10.0001C36.6666 8.15913 35.1742 6.66675 33.3333 6.66675Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M22.9834 6.8335H32.9834C33.8675 6.8335 34.7153 7.18469 35.3404 7.80981C35.9655 8.43493 36.3167 9.28277 36.3167 10.1668V16.8335H26.3167C25.4327 16.8335 24.5848 16.4823 23.9597 15.8572C23.3346 15.2321 22.9834 14.3842 22.9834 13.5002V6.8335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
