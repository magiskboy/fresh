import React from "react";

export const IcStatistics3: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33325 3.33301V33.333C3.33325 34.2171 3.68444 35.0649 4.30956 35.69C4.93468 36.3152 5.78253 36.6663 6.66659 36.6663H36.6666"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 29.9997V14.1663C10 12.6192 10.6146 11.1355 11.7085 10.0416C12.8025 8.94759 14.2862 8.33301 15.8333 8.33301V8.33301C17.3804 8.33301 18.8642 8.94759 19.9581 10.0416C21.0521 11.1355 21.6667 12.6192 21.6667 14.1663V17.9997C21.6667 21.1823 22.9309 24.2345 25.1814 26.485C27.4318 28.7354 30.4841 29.9997 33.6667 29.9997H36.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
