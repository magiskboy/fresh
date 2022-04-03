import React from "react";

export const IcContactMail: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3334 8.33325H6.66671C4.82576 8.33325 3.33337 9.82564 3.33337 11.6666V28.3333C3.33337 30.1742 4.82576 31.6666 6.66671 31.6666H33.3334C35.1743 31.6666 36.6667 30.1742 36.6667 28.3333V11.6666C36.6667 9.82564 35.1743 8.33325 33.3334 8.33325Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M5 10L18.0167 23.0167C18.3262 23.3266 18.6939 23.5725 19.0985 23.7402C19.5032 23.9079 19.9369 23.9943 20.375 23.9943C20.8131 23.9943 21.2468 23.9079 21.6515 23.7402C22.0561 23.5725 22.4238 23.3266 22.7333 23.0167L35.7 10"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
