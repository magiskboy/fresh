import React from "react";

export const IcActionsFile: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.7667 3.33325H10.0001C9.11603 3.33325 8.26818 3.68444 7.64306 4.30956C7.01794 4.93468 6.66675 5.78253 6.66675 6.66659V33.3333C6.66675 34.2173 7.01794 35.0652 7.64306 35.6903C8.26818 36.3154 9.11603 36.6666 10.0001 36.6666H30.0001C30.8841 36.6666 31.732 36.3154 32.3571 35.6903C32.9822 35.0652 33.3334 34.2173 33.3334 33.3333V14.8666C33.3394 14.5257 33.2341 14.1922 33.0334 13.9166L26.1167 4.04992C25.9652 3.83144 25.7636 3.65238 25.5287 3.52771C25.2939 3.40304 25.0326 3.33636 24.7667 3.33325V3.33325Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
