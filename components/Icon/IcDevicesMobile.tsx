import React from "react";

export const IcDevicesMobile: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.5669 3.0166H13.4503C11.6093 3.0166 10.1169 4.50899 10.1169 6.34994V33.6333C10.1169 35.4742 11.6093 36.9666 13.4503 36.9666H26.5669C28.4079 36.9666 29.9003 35.4742 29.9003 33.6333V6.34994C29.9003 4.50899 28.4079 3.0166 26.5669 3.0166Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0169 28.9333H20.0003C19.4112 28.9333 18.9336 29.4109 18.9336 30V30.0167C18.9336 30.6058 19.4112 31.0833 20.0003 31.0833H20.0169C20.606 31.0833 21.0836 30.6058 21.0836 30.0167V30C21.0836 29.4109 20.606 28.9333 20.0169 28.9333Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
