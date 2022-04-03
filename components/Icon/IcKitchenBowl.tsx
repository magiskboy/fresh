import React from "react";

export const IcKitchenBowl: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33333 8.3335H34.6667C34.7551 8.3335 34.8399 8.36861 34.9024 8.43113C34.9649 8.49364 35 8.57842 35 8.66683V15.0002C35 18.5364 33.5952 21.9278 31.0948 24.4283C28.5943 26.9287 25.2029 28.3335 21.6667 28.3335H18.3333C14.7971 28.3335 11.4057 26.9287 8.90524 24.4283C6.40476 21.9278 5 18.5364 5 15.0002V8.66683C5 8.57842 5.03512 8.49364 5.09763 8.43113C5.16014 8.36861 5.24493 8.3335 5.33333 8.3335V8.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 31.667H30"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
