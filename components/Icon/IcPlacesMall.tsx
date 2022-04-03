import React from "react";

export const IcPlacesMall: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3333 14.0835H6.66659C4.82564 14.0835 3.33325 15.5759 3.33325 17.4168V30.7502C3.33325 32.5911 4.82564 34.0835 6.66659 34.0835H33.3333C35.1742 34.0835 36.6666 32.5911 36.6666 30.7502V17.4168C36.6666 15.5759 35.1742 14.0835 33.3333 14.0835Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2334 34.0837V22.7503C11.2334 22.6619 11.2685 22.5771 11.331 22.5146C11.3935 22.4521 11.4783 22.417 11.5667 22.417H28.0001C28.0885 22.417 28.1733 22.4521 28.2358 22.5146C28.2983 22.5771 28.3334 22.6619 28.3334 22.7503V34.0837"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 22.417V34.0837"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.98364 14.0834V9.08344C11.0204 7.01923 15.4859 5.93315 20.0197 5.91289C24.5536 5.89262 29.0286 6.93874 33.0836 8.96678L33.3336 9.08344V14.0834"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
