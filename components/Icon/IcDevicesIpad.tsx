import React from "react";

export const IcDevicesIpad: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.7167 3.0166H10.2667C8.42573 3.0166 6.93335 4.50899 6.93335 6.34994V33.6333C6.93335 35.4742 8.42573 36.9666 10.2667 36.9666H29.7167C31.5576 36.9666 33.05 35.4742 33.05 33.6333V6.34994C33.05 4.50899 31.5576 3.0166 29.7167 3.0166Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0165 24.6665H19.9998C18.1312 24.6665 16.6165 26.1813 16.6165 28.0498V28.0665C16.6165 29.9351 18.1312 31.4498 19.9998 31.4498H20.0165C21.885 31.4498 23.3998 29.9351 23.3998 28.0665V28.0498C23.3998 26.1813 21.885 24.6665 20.0165 24.6665Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
