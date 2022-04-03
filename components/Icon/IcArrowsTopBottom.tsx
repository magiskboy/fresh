import React from "react";

export const IcArrowsTopBottom: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6.7666V32.9333"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M12.0332 26.3333L18.8832 33.1833C19.1955 33.4937 19.6179 33.6679 20.0582 33.6679C20.4985 33.6679 20.9209 33.4937 21.2332 33.1833L27.8999 26.5166"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M27.9665 13.6667L21.1165 6.81669C20.8042 6.50627 20.3818 6.33203 19.9415 6.33203C19.5012 6.33203 19.0788 6.50627 18.7665 6.81669L12.0999 13.4834"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
