import React from "react";

export const IcMediaDisk: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.3333 8.3335H13.6666C13.4825 8.3335 13.3333 8.48273 13.3333 8.66683V31.3335C13.3333 31.5176 13.4825 31.6668 13.6666 31.6668H26.3333C26.5173 31.6668 26.6666 31.5176 26.6666 31.3335V8.66683C26.6666 8.48273 26.5173 8.3335 26.3333 8.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33325 13.3335H3.66659C3.57818 13.3335 3.4934 13.3686 3.43088 13.4311C3.36837 13.4936 3.33325 13.5784 3.33325 13.6668V26.3335C3.33325 26.4219 3.36837 26.5067 3.43088 26.5692C3.4934 26.6317 3.57818 26.6668 3.66659 26.6668H8.33325"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6665 26.6668H36.3332C36.4216 26.6668 36.5064 26.6317 36.5689 26.5692C36.6314 26.5067 36.6665 26.4219 36.6665 26.3335V13.6668C36.6665 13.5784 36.6314 13.4936 36.5689 13.4311C36.5064 13.3686 36.4216 13.3335 36.3332 13.3335H31.6665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
