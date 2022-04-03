import React from "react";

export const IcLayoutPictureRight: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8333 3.3335H9.16659C7.32564 3.3335 5.83325 4.82588 5.83325 6.66683V13.3335C5.83325 15.1744 7.32564 16.6668 9.16659 16.6668H15.8333C17.6742 16.6668 19.1666 15.1744 19.1666 13.3335V6.66683C19.1666 4.82588 17.6742 3.3335 15.8333 3.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8333 23.3335H9.16659C7.32564 23.3335 5.83325 24.8259 5.83325 26.6668V33.3335C5.83325 35.1744 7.32564 36.6668 9.16659 36.6668H15.8333C17.6742 36.6668 19.1666 35.1744 19.1666 33.3335V26.6668C19.1666 24.8259 17.6742 23.3335 15.8333 23.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.1665 26.667H24.1665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.8332 33.3335H24.1665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.8332 13.3335H24.1665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.1665 6.66699H24.1665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
