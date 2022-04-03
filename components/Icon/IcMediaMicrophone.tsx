import React from "react";

export const IcMediaMicrophone: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.6666 10.0002C26.6666 6.31826 23.6818 3.3335 19.9999 3.3335C16.318 3.3335 13.3333 6.31826 13.3333 10.0002V16.6668C13.3333 20.3487 16.318 23.3335 19.9999 23.3335C23.6818 23.3335 26.6666 20.3487 26.6666 16.6668V10.0002Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33325 16.667V18.3337C8.33325 21.4279 9.56242 24.3953 11.7503 26.5832C13.9383 28.7712 16.9057 30.0003 19.9999 30.0003C23.0941 30.0003 26.0616 28.7712 28.2495 26.5832C30.4374 24.3953 31.6666 21.4279 31.6666 18.3337V16.667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 30V36.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
