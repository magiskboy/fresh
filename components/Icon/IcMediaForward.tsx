import React from "react";

export const IcMediaForward: React.FC<{ size: string }> = ({ size }) => {
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
        d="M5.2002 12.1V27.9C5.2002 28.2167 5.46686 28.4334 5.68353 28.2834L17.9502 20.3834C18.0062 20.3364 18.0513 20.2778 18.0822 20.2116C18.1131 20.1453 18.1292 20.0731 18.1292 20C18.1292 19.9269 18.1131 19.8547 18.0822 19.7885C18.0513 19.7223 18.0062 19.6636 17.9502 19.6167L5.68353 11.6667C5.46686 11.5667 5.2002 11.7834 5.2002 12.1Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.8669 12.1V27.9C21.8669 28.2167 22.1336 28.4334 22.3503 28.2834L34.6169 20.3834C34.673 20.3364 34.718 20.2778 34.749 20.2116C34.7799 20.1453 34.7959 20.0731 34.7959 20C34.7959 19.9269 34.7799 19.8547 34.749 19.7885C34.718 19.7223 34.673 19.6636 34.6169 19.6167L22.3503 11.6667C22.1336 11.5667 21.8669 11.7834 21.8669 12.1Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
