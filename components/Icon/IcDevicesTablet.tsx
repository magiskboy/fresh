import React from "react";

export const IcDevicesTablet: React.FC<{ size: string }> = ({ size }) => {
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
        d="M20.0169 28.6499H20.0003C19.4112 28.6499 18.9336 29.1275 18.9336 29.7166V29.7332C18.9336 30.3223 19.4112 30.7999 20.0003 30.7999H20.0169C20.606 30.7999 21.0836 30.3223 21.0836 29.7332V29.7166C21.0836 29.1275 20.606 28.6499 20.0169 28.6499Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
