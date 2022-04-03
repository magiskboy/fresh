import React from "react";

export const IcEmojiSuperSmile: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9999 36.6668C29.2047 36.6668 36.6666 29.2049 36.6666 20.0002C36.6666 10.7954 29.2047 3.3335 19.9999 3.3335C10.7952 3.3335 3.33325 10.7954 3.33325 20.0002C3.33325 29.2049 10.7952 36.6668 19.9999 36.6668Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3333 15.1167H29.9999"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15H16.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6665 21.667C11.6665 23.8771 12.5445 25.9967 14.1073 27.5595C15.6701 29.1224 17.7897 30.0003 19.9998 30.0003V30.0003C22.21 30.0003 24.3296 29.1224 25.8924 27.5595C27.4552 25.9967 28.3332 23.8771 28.3332 21.667H11.6665Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
