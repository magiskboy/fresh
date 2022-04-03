import React from "react";

export const IcArrowsTop: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 33.4499V7.2832"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M27.9665 13.8832L21.1165 7.03324C20.8042 6.72282 20.3818 6.54858 19.9415 6.54858C19.5012 6.54858 19.0788 6.72282 18.7665 7.03324L12.0999 13.6999"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
