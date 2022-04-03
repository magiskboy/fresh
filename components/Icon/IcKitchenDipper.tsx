import React from "react";

export const IcKitchenDipper: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 8.3335V6.66683C30 5.78277 29.6488 4.93493 29.0237 4.30981C28.3986 3.68469 27.5507 3.3335 26.6667 3.3335H25.1333C24.2493 3.3335 23.4014 3.68469 22.7763 4.30981C22.1512 4.93493 21.8 5.78277 21.8 6.66683V30.7668C21.8 32.3316 21.1784 33.8323 20.0719 34.9388C18.9655 36.0452 17.4648 36.6668 15.9 36.6668C14.3366 36.6624 12.8384 36.0394 11.7329 34.9339C10.6274 33.8284 10.0044 32.3303 10 30.7668V28.3335H21.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
