import React from "react";

export const IcDevicesCamera: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.2331 10.7166H6.76644C4.92549 10.7166 3.43311 12.2089 3.43311 14.0499V30.7832C3.43311 32.6242 4.92549 34.1166 6.76644 34.1166H33.2331C35.0741 34.1166 36.5664 32.6242 36.5664 30.7832V14.0499C36.5664 12.2089 35.0741 10.7166 33.2331 10.7166Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6497 27.2001C23.5584 27.2001 25.9164 24.8421 25.9164 21.9334C25.9164 19.0247 23.5584 16.6667 20.6497 16.6667C17.741 16.6667 15.3831 19.0247 15.3831 21.9334C15.3831 24.8421 17.741 27.2001 20.6497 27.2001Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.7501 18.0333C31.3577 18.0333 31.8501 17.5408 31.8501 16.9333C31.8501 16.3257 31.3577 15.8333 30.7501 15.8333C30.1426 15.8333 29.6501 16.3257 29.6501 16.9333C29.6501 17.5408 30.1426 18.0333 30.7501 18.0333Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 5.8667H14.0333"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
