import React from "react";

export const IcKitchenMicrooven: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3333 6.6665H6.66659C4.82564 6.6665 3.33325 8.15889 3.33325 9.99984V26.6665C3.33325 28.5075 4.82564 29.9998 6.66659 29.9998H33.3333C35.1742 29.9998 36.6666 28.5075 36.6666 26.6665V9.99984C36.6666 8.15889 35.1742 6.6665 33.3333 6.6665Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 30V33.3333"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 30V33.3333"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 6.6665V29.9998"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.8333 15C32.214 15 33.3333 13.8807 33.3333 12.5C33.3333 11.1193 32.214 10 30.8333 10C29.4525 10 28.3333 11.1193 28.3333 12.5C28.3333 13.8807 29.4525 15 30.8333 15Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.8333 23.333C32.214 23.333 33.3333 22.2137 33.3333 20.833C33.3333 19.4523 32.214 18.333 30.8333 18.333C29.4525 18.333 28.3333 19.4523 28.3333 20.833C28.3333 22.2137 29.4525 23.333 30.8333 23.333Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
