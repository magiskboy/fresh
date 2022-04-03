import React from "react";

export const IcSecurityLocked: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.1666 13.3335H7.49996C5.65901 13.3335 4.16663 14.8259 4.16663 16.6668V33.3335C4.16663 35.1744 5.65901 36.6668 7.49996 36.6668H34.1666C36.0076 36.6668 37.5 35.1744 37.5 33.3335V16.6668C37.5 14.8259 36.0076 13.3335 34.1666 13.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8333 26.6668C23.1345 26.6668 25 24.8013 25 22.5002C25 20.199 23.1345 18.3335 20.8333 18.3335C18.5321 18.3335 16.6666 20.199 16.6666 22.5002C16.6666 24.8013 18.5321 26.6668 20.8333 26.6668Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8333 26.667V31.667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6666 13.3335V6.66683C11.6666 5.78277 12.0178 4.93493 12.6429 4.30981C13.2681 3.68469 14.1159 3.3335 15 3.3335H25C25.884 3.3335 26.7319 3.68469 27.357 4.30981C27.9821 4.93493 28.3333 5.78277 28.3333 6.66683V13.3335"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
