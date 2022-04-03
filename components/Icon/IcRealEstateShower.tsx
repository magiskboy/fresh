import React from "react";

export const IcRealEstateShower: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9999 11.6665C16.768 11.6665 18.4637 12.3689 19.714 13.6191C20.9642 14.8694 21.6666 16.5651 21.6666 18.3332V21.3332C21.6666 21.4216 21.6315 21.5064 21.569 21.5689C21.5064 21.6314 21.4217 21.6665 21.3333 21.6665H8.66659C8.57818 21.6665 8.49339 21.6314 8.43088 21.5689C8.36837 21.5064 8.33325 21.4216 8.33325 21.3332V18.3332C8.33325 16.5651 9.03563 14.8694 10.2859 13.6191C11.5361 12.3689 13.2318 11.6665 14.9999 11.6665V11.6665Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 11.6667V8.33333C15 7.44928 15.3512 6.60143 15.9763 5.97631C16.6014 5.35119 17.4493 5 18.3333 5H28.3333C29.2174 5 30.0652 5.35119 30.6904 5.97631C31.3155 6.60143 31.6667 7.44928 31.6667 8.33333V35"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 26.6665V29.1665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 26.6665V31.6665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 26.6665V29.1665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
