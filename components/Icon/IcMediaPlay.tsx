import React from "react";

export const IcMediaPlay: React.FC<{ size: string }> = ({ size }) => {
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
        d="M15.2 12.1V27.9C15.2 28.2167 15.4666 28.4334 15.6833 28.2834L27.95 20.3834C28.006 20.3364 28.0511 20.2778 28.082 20.2116C28.1129 20.1453 28.1289 20.0731 28.1289 20C28.1289 19.9269 28.1129 19.8547 28.082 19.7885C28.0511 19.7223 28.006 19.6636 27.95 19.6167L15.6833 11.6667C15.4666 11.5667 15.2 11.7834 15.2 12.1Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9999 36.6668C29.2047 36.6668 36.6666 29.2049 36.6666 20.0002C36.6666 10.7954 29.2047 3.3335 19.9999 3.3335C10.7952 3.3335 3.33325 10.7954 3.33325 20.0002C3.33325 29.2049 10.7952 36.6668 19.9999 36.6668Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
