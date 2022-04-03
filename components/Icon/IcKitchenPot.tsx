import React from "react";

export const IcKitchenPot: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6665 8.3335H28.3332C29.6593 8.3335 30.931 8.86028 31.8687 9.79796C32.8064 10.7356 33.3332 12.0074 33.3332 13.3335V31.6668C33.3332 32.5509 32.982 33.3987 32.3569 34.0239C31.7317 34.649 30.8839 35.0002 29.9998 35.0002H9.99984C9.11578 35.0002 8.26794 34.649 7.64281 34.0239C7.01769 33.3987 6.6665 32.5509 6.6665 31.6668V13.3335C6.6665 12.0074 7.19329 10.7356 8.13097 9.79796C9.06865 8.86028 10.3404 8.3335 11.6665 8.3335V8.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.6666 13.3335H3.33325"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6665 8.3335V6.66683C16.6665 5.78277 17.0177 4.93493 17.6428 4.30981C18.2679 3.68469 19.1158 3.3335 19.9998 3.3335C20.8839 3.3335 21.7317 3.68469 22.3569 4.30981C22.982 4.93493 23.3332 5.78277 23.3332 6.66683V8.3335"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
