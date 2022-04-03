import React from "react";

export const IcChevronTop: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.9665 23.6667L21.1165 16.8167C20.8042 16.5063 20.3818 16.332 19.9415 16.332C19.5012 16.332 19.0788 16.5063 18.7665 16.8167L12.0999 23.4834"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
