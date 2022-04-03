import React from "react";

export const IcFurnitureSmallBed: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.3333 27.3831H11.6666C10.7825 27.3831 9.93468 27.0319 9.30956 26.4068C8.68444 25.7816 8.33325 24.9338 8.33325 24.0497V14.0497C11.8858 12.018 15.9074 10.9492 19.9999 10.9492C24.0924 10.9492 28.114 12.018 31.6666 14.0497V14.0497V24.0497C31.6666 24.9338 31.3154 25.7816 30.6903 26.4068C30.0652 27.0319 29.2173 27.3831 28.3333 27.3831Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 27.3833V30"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 27.3833V30"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33325 19.0497C11.8858 17.018 15.9074 15.9492 19.9999 15.9492C24.0924 15.9492 28.114 17.018 31.6666 19.0497V19.0497"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
