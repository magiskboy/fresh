import React from "react";

export const IcDirectionsLeft: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10H26.6667C27.5507 10 28.3986 10.3512 29.0237 10.9763C29.6488 11.6014 30 12.4493 30 13.3333V35"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3331 15L8.56645 10.15C8.53412 10.1203 8.5083 10.0843 8.49064 10.0441C8.47299 10.0039 8.46387 9.96054 8.46387 9.91667C8.46387 9.87279 8.47299 9.82939 8.49064 9.78922C8.5083 9.74906 8.53412 9.713 8.56645 9.68333L13.3331 5"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
