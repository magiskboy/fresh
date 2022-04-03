import React from "react";

export const IcMediaBackward: React.FC<{ size: string }> = ({ size }) => {
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
        d="M34.8002 27.8999V12.0999C34.8002 11.7832 34.5335 11.5666 34.3169 11.7166L22.0502 19.6166C21.9942 19.6635 21.9491 19.7221 21.9182 19.7884C21.8872 19.8546 21.8712 19.9268 21.8712 19.9999C21.8712 20.073 21.8872 20.1452 21.9182 20.2114C21.9491 20.2777 21.9942 20.3363 22.0502 20.3832L34.3169 28.3332C34.5335 28.4332 34.8002 28.2166 34.8002 27.8999Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1336 27.8999V12.0999C18.1336 11.7832 17.8669 11.5666 17.6502 11.7166L5.38357 19.6166C5.32753 19.6635 5.28246 19.7221 5.25154 19.7884C5.22062 19.8546 5.20459 19.9268 5.20459 19.9999C5.20459 20.073 5.22062 20.1452 5.25154 20.2114C5.28246 20.2777 5.32753 20.3363 5.38357 20.3832L17.6502 28.3332C17.8669 28.4332 18.1336 28.2166 18.1336 27.8999Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
