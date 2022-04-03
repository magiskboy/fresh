import React from "react";

export const IcDirectionsTwoPoints: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6666 5V13.3333C11.6666 15.5435 12.5446 17.6631 14.1074 19.2259C15.6702 20.7887 17.7898 21.6667 20 21.6667V21.6667C22.2101 21.6667 24.3297 20.7887 25.8925 19.2259C27.4553 17.6631 28.3333 15.5435 28.3333 13.3333V5"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66663 8.33337L11.4333 3.50004C11.463 3.46771 11.499 3.4419 11.5392 3.42424C11.5793 3.40658 11.6227 3.39746 11.6666 3.39746C11.7105 3.39746 11.7539 3.40658 11.7941 3.42424C11.8342 3.4419 11.8703 3.46771 11.9 3.50004L16.6666 8.33337"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3333 8.33337L28.0999 3.50004C28.1296 3.46771 28.1656 3.4419 28.2058 3.42424C28.246 3.40658 28.2894 3.39746 28.3333 3.39746C28.3771 3.39746 28.4205 3.40658 28.4607 3.42424C28.5009 3.4419 28.5369 3.46771 28.5666 3.50004L33.3333 8.33337"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 21.6001V36.6001"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
