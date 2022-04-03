import React from "react";

export const IcKitchenSalt: React.FC<{ size: string }> = ({ size }) => {
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
        d="M13.3335 11.6667L11.6668 34.65C11.6621 34.6943 11.6668 34.7391 11.6806 34.7814C11.6944 34.8238 11.717 34.8628 11.7469 34.8958C11.7768 34.9288 11.8133 34.9552 11.8541 34.9731C11.8948 34.9911 11.9389 35.0002 11.9835 35H27.9501C27.9947 35.0002 28.0388 34.9911 28.0795 34.9731C28.1203 34.9552 28.1568 34.9288 28.1867 34.8958C28.2166 34.8628 28.2392 34.8238 28.253 34.7814C28.2668 34.7391 28.2715 34.6943 28.2668 34.65L26.6668 11.6667V8.33333C26.6668 7.44928 26.3156 6.60143 25.6905 5.97631C25.0654 5.35119 24.2175 5 23.3335 5H16.6668C15.7827 5 14.9349 5.35119 14.3098 5.97631C13.6847 6.60143 13.3335 7.44928 13.3335 8.33333V11.6667Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3335 11.6665H26.6668"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
