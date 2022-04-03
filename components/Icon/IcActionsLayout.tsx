import React from "react";

export const IcActionsLayout: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.0001 6.66675H10.0001C8.15913 6.66675 6.66675 8.15913 6.66675 10.0001V30.0001C6.66675 31.841 8.15913 33.3334 10.0001 33.3334H30.0001C31.841 33.3334 33.3334 31.841 33.3334 30.0001V10.0001C33.3334 8.15913 31.841 6.66675 30.0001 6.66675Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 4"
      />
    </svg>
  );
};
