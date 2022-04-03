import React from "react";

export const IcEmojiAngry: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9999 36.6666C29.2047 36.6666 36.6666 29.2047 36.6666 19.9999C36.6666 10.7952 29.2047 3.33325 19.9999 3.33325C10.7952 3.33325 3.33325 10.7952 3.33325 19.9999C3.33325 29.2047 10.7952 36.6666 19.9999 36.6666Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 29.4165C24.9353 28.1533 24.3729 26.9672 23.4358 26.1176C22.4988 25.268 21.2635 24.8242 20 24.8831V24.8831C18.7365 24.8242 17.5012 25.268 16.5642 26.1176C15.6271 26.9672 15.0647 28.1533 15 29.4165"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.9001 16.4998L29.1335 14.1665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4667 16.4998L11.2334 14.1665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
