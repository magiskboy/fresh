import React from "react";

export const IcFurnitureSeat: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 36.667V20.0003C30 19.1163 29.6488 18.2684 29.0237 17.6433C28.3986 17.0182 27.5507 16.667 26.6667 16.667H10"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 3.3335L14.8 24.1668C14.9411 24.7134 14.9411 25.2869 14.8 25.8335L11.6667 36.6668"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 25H15"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
