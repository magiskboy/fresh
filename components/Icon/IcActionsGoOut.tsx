import React from "react";

export const IcActionsGoOut: React.FC<{ size: string }> = ({ size }) => {
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
        d="M32.6335 6.93354L6.88355 16.6669C6.82346 16.6952 6.77267 16.74 6.73709 16.796C6.70151 16.8521 6.68262 16.9171 6.68262 16.9835C6.68262 17.0499 6.70151 17.115 6.73709 17.1711C6.77267 17.2271 6.82346 17.2719 6.88355 17.3002L17.9002 22.0169C17.9415 22.0336 17.9789 22.0585 18.0104 22.09C18.0419 22.1215 18.0668 22.159 18.0835 22.2002L22.8002 33.2169C22.8285 33.277 22.8733 33.3278 22.9294 33.3633C22.9854 33.3989 23.0505 33.4178 23.1169 33.4178C23.1833 33.4178 23.2483 33.3989 23.3044 33.3633C23.3605 33.3278 23.4053 33.277 23.4335 33.2169L33.0669 7.36687C33.0911 7.3063 33.0971 7.23994 33.084 7.17602C33.0708 7.1121 33.0393 7.05344 32.9931 7.0073C32.947 6.96116 32.8883 6.92958 32.8244 6.91647C32.7605 6.90336 32.6941 6.90929 32.6335 6.93354V6.93354Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3338 6.66675L18.0171 21.9834"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
