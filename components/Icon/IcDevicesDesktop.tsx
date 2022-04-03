import React from "react";

export const IcDevicesDesktop: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.7831 4.8999H6.19979C4.35884 4.8999 2.86646 6.39229 2.86646 8.23324V25.4332C2.86646 27.2742 4.35884 28.7666 6.19979 28.7666H33.7831C35.6241 28.7666 37.1165 27.2742 37.1165 25.4332V8.23324C37.1165 6.39229 35.6241 4.8999 33.7831 4.8999Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2166 29.4165V34.1998"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.7833 29.4165V34.1998"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.86621 35.1001H31.1329"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
