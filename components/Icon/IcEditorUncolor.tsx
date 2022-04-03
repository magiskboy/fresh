import React from "react";

export const IcEditorUncolor: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3826 36.8334C17.1451 37.086 17.9332 37.2537 18.7326 37.3334C19.1492 37.3334 19.5826 37.3334 19.9992 37.3334C20.4159 37.3334 20.8492 37.3334 21.2659 37.3334C29.5992 36.5167 34.0659 27.1001 30.1159 19.7667L28.9659 17.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M23.7663 8.00007L21.283 3.3334C21.16 3.09955 20.9754 2.90374 20.7492 2.76715C20.523 2.63055 20.2638 2.55835 19.9996 2.55835C19.7354 2.55835 19.4762 2.63055 19.25 2.76715C19.0238 2.90374 18.8393 3.09955 18.7163 3.3334L9.88295 19.7167C9.06716 21.2304 8.58148 22.8998 8.45795 24.6149C8.33442 26.33 8.57584 28.0518 9.16628 29.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M10 38.3333L31.6667 5"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
