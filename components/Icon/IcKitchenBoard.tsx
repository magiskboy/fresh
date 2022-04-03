import React from "react";

export const IcKitchenBoard: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.3333 2.5H11.6666C9.82564 2.5 8.33325 3.99238 8.33325 5.83333V29.1667C8.33325 31.0076 9.82564 32.5 11.6666 32.5H28.3333C30.1742 32.5 31.6666 31.0076 31.6666 29.1667V5.83333C31.6666 3.99238 30.1742 2.5 28.3333 2.5Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 32.5C15 33.8261 15.5268 35.0979 16.4645 36.0355C17.4021 36.9732 18.6739 37.5 20 37.5C21.3261 37.5 22.5979 36.9732 23.5355 36.0355C24.4732 35.0979 25 33.8261 25 32.5"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
