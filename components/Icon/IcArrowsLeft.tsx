import React from "react";

export const IcArrowsLeft: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.4501 20H7.28345"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M13.8837 12.0332L7.03373 18.8832C6.72331 19.1955 6.54907 19.6179 6.54907 20.0582C6.54907 20.4985 6.72331 20.9209 7.03373 21.2332L13.7004 27.8999"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
