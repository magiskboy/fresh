import React from "react";

export const IcDirectionsConnectUp: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6666 36.6666V26.6666C11.6666 24.4564 12.5446 22.3368 14.1074 20.774C15.6702 19.2112 17.7898 18.3333 20 18.3333C22.2101 18.3333 24.3297 19.2112 25.8925 20.774C27.4553 22.3368 28.3333 24.4564 28.3333 26.6666V36.6666"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 4.93335V18.2667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8.33337L19.7667 3.50004C19.7963 3.46771 19.8324 3.4419 19.8726 3.42424C19.9127 3.40658 19.9561 3.39746 20 3.39746C20.0439 3.39746 20.0873 3.40658 20.1274 3.42424C20.1676 3.4419 20.2037 3.46771 20.2333 3.50004L25 8.33337"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
