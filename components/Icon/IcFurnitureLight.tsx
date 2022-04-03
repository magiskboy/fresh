import React from "react";

export const IcFurnitureLight: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3333 15H23.6666C27.1144 15 30.421 16.3696 32.859 18.8076C35.2969 21.2456 36.6666 24.5522 36.6666 28C36.6666 28.0884 36.6315 28.1732 36.569 28.2357C36.5064 28.2982 36.4217 28.3333 36.3333 28.3333H3.66659C3.57818 28.3333 3.4934 28.2982 3.43088 28.2357C3.36837 28.1732 3.33325 28.0884 3.33325 28C3.33325 24.5522 4.70289 21.2456 7.14086 18.8076C9.57884 16.3696 12.8854 15 16.3333 15V15Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 5V15"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 28.3335V30.2168C15.0044 31.4841 15.5098 32.6982 16.4059 33.5943C17.302 34.4904 18.5161 34.9958 19.7833 35.0002V35.0002C21.052 35.0002 22.2686 34.4962 23.1657 33.5992C24.0627 32.7021 24.5667 31.4854 24.5667 30.2168V28.3335"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
