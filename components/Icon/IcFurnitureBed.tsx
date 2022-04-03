import React from "react";

export const IcFurnitureBed: React.FC<{ size: string }> = ({ size }) => {
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
        d="M33.3333 27.4334H6.66659C5.78253 27.4334 4.93468 27.0823 4.30956 26.4571C3.68444 25.832 3.33325 24.9842 3.33325 24.1001V19.1001C14.0347 14.8332 25.9651 14.8332 36.6666 19.1001V19.1001V24.1001C36.6666 24.9842 36.3154 25.832 35.6903 26.4571C35.0652 27.0823 34.2173 27.4334 33.3333 27.4334Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33325 22.4334V14.1001C14.0347 9.83316 25.9651 9.83316 36.6666 14.1001V14.1001V22.4334"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33325 27.4336V29.9669"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6665 27.4336V29.9669"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
