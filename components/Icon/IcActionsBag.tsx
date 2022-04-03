import React from "react";

export const IcActionsBag: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3333 11.5833H6.66659C4.82564 11.5833 3.33325 13.0756 3.33325 14.9166V31.5833C3.33325 33.4242 4.82564 34.9166 6.66659 34.9166H33.3333C35.1742 34.9166 36.6666 33.4242 36.6666 31.5833V14.9166C36.6666 13.0756 35.1742 11.5833 33.3333 11.5833Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M11.6665 11.3166V8.41659C11.6665 7.53253 12.0177 6.68468 12.6428 6.05956C13.2679 5.43444 14.1158 5.08325 14.9998 5.08325H24.9998C25.8839 5.08325 26.7317 5.43444 27.3569 6.05956C27.982 6.68468 28.3332 7.53253 28.3332 8.41659V11.3166"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
