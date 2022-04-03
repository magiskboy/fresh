import React from "react";

export const IcDevicesHeadphones: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.54985 16.4998H6.96651C5.12556 16.4998 3.63318 17.9921 3.63318 19.8331V26.4664C3.63318 28.3074 5.12556 29.7998 6.96651 29.7998H8.54985C10.3908 29.7998 11.8832 28.3074 11.8832 26.4664V19.8331C11.8832 17.9921 10.3908 16.4998 8.54985 16.4998Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.0335 16.4998H31.4502C29.6092 16.4998 28.1168 17.9921 28.1168 19.8331V26.4664C28.1168 28.3074 29.6092 29.7998 31.4502 29.7998H33.0335C34.8744 29.7998 36.3668 28.3074 36.3668 26.4664V19.8331C36.3668 17.9921 34.8744 16.4998 33.0335 16.4998Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6835 17.2665C15.0501 7.93317 24.5835 7.83317 29.0168 17.0498L29.1168 17.2665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
