import React from "react";

export const IcDirectionsTurnBack: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 35V12.5C30.0022 11.5145 29.8097 10.5382 29.4336 9.62729C29.0575 8.71636 28.5051 7.88869 27.8082 7.19182C27.1113 6.49494 26.2837 5.94258 25.3727 5.56645C24.4618 5.19031 23.4856 4.99782 22.5 5.00002C21.5145 4.99782 20.5382 5.19031 19.6273 5.56645C18.7164 5.94258 17.8887 6.49494 17.1918 7.19182C16.4949 7.88869 15.9426 8.71636 15.5664 9.62729C15.1903 10.5382 14.9978 11.5145 15 12.5V23.3334"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 20L14.7667 24.7667C14.7963 24.799 14.8324 24.8248 14.8726 24.8425C14.9127 24.8601 14.9561 24.8692 15 24.8692C15.0439 24.8692 15.0873 24.8601 15.1274 24.8425C15.1676 24.8248 15.2037 24.799 15.2333 24.7667L20 20"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
