import React from "react";

export const IcChevronLeft: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.6664 12.0332L16.8164 18.8832C16.506 19.1955 16.3318 19.6179 16.3318 20.0582C16.3318 20.4985 16.506 20.9209 16.8164 21.2332L23.4831 27.8999"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
