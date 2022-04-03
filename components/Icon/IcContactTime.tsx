import React from "react";

export const IcContactTime: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9997 36.8499C29.3057 36.8499 36.8497 29.3059 36.8497 19.9999C36.8497 10.6939 29.3057 3.1499 19.9997 3.1499C10.6937 3.1499 3.14966 10.6939 3.14966 19.9999C3.14966 29.3059 10.6937 36.8499 19.9997 36.8499Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8831 8.93311V20.3831H27.9664"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
