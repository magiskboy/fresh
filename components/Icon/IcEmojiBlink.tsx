import React from "react";

export const IcEmojiBlink: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9999 36.6666C29.2047 36.6666 36.6666 29.2047 36.6666 19.9999C36.6666 10.7952 29.2047 3.33325 19.9999 3.33325C10.7952 3.33325 3.33325 10.7952 3.33325 19.9999C3.33325 29.2047 10.7952 36.6666 19.9999 36.6666Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6667 15.1167H28.3334"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1667 18.3333C15.5475 18.3333 16.6667 17.214 16.6667 15.8333C16.6667 14.4525 15.5475 13.3333 14.1667 13.3333C12.786 13.3333 11.6667 14.4525 11.6667 15.8333C11.6667 17.214 12.786 18.3333 14.1667 18.3333Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 24.8833C15.0647 26.1465 15.6271 27.3326 16.5642 28.1822C17.5012 29.0317 18.7365 29.4756 20 29.4166V29.4166C21.2635 29.4756 22.4988 29.0317 23.4358 28.1822C24.3729 27.3326 24.9353 26.1465 25 24.8833"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
