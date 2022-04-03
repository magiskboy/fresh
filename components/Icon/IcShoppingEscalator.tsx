import React from "react";

export const IcShoppingEscalator: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33325 36.6667H8.33325C8.83675 36.6669 9.33375 36.5531 9.78695 36.3337C10.2401 36.1143 10.6377 35.7951 10.9499 35.4001L27.3333 14.6001C27.6506 14.1983 28.0563 13.8751 28.5187 13.6554C28.9812 13.4358 29.488 13.3256 29.9999 13.3334H36.6666"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 31.6667V19.1667C13.3333 18.0616 13.7722 17.0018 14.5536 16.2204C15.335 15.439 16.3949 15 17.4999 15V15C18.605 15 19.6648 15.439 20.4462 16.2204C21.2276 17.0018 21.6666 18.0616 21.6666 19.1667V21.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6666 9.99967C18.5075 9.99967 19.9999 8.50729 19.9999 6.66634C19.9999 4.82539 18.5075 3.33301 16.6666 3.33301C14.8256 3.33301 13.3333 4.82539 13.3333 6.66634C13.3333 8.50729 14.8256 9.99967 16.6666 9.99967Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
