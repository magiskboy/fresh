import React from "react";

export const IcConstructionDrill: React.FC<{ size: string }> = ({ size }) => {
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
        d="M10.7 10.0001V19.2334C10.7 20.1175 11.0511 20.9653 11.6763 21.5904C12.3014 22.2156 13.1492 22.5667 14.0333 22.5667H24.5666V30.0001C24.5666 30.8841 24.9178 31.732 25.5429 32.3571C26.168 32.9822 27.0159 33.3334 27.8999 33.3334H33.3333C34.2173 33.3334 35.0652 32.9822 35.6903 32.3571C36.3154 31.732 36.6666 30.8841 36.6666 30.0001V13.3334C36.6666 11.5653 35.9642 9.86961 34.714 8.61937C33.4638 7.36913 31.7681 6.66675 29.9999 6.66675H14.0333C13.1492 6.66675 12.3014 7.01794 11.6763 7.64306C11.0511 8.26818 10.7 9.11603 10.7 10.0001V10.0001Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6667 15H26.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.6502 15H2.2002"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7 9.99997C9.41628 9.95951 8.16897 10.4299 7.23162 11.3078C6.29428 12.1858 5.74345 13.3997 5.69995 14.6833C5.72146 15.3181 5.8679 15.9425 6.13089 16.5207C6.39388 17.0989 6.76827 17.6196 7.23264 18.053C7.69701 18.4865 8.24226 18.8241 8.83721 19.0466C9.43216 19.2692 10.0651 19.3722 10.7 19.35V19.35"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
