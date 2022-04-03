import React from "react";

export const IcActionsClose: React.FC<{ size: string }> = ({ size }) => {
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
        strokeLinejoin="bevel"
      />
      <path
        d="M26.2167 26.1L14.4333 14.3167"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M14.4333 26.1L26.2167 14.3167"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
