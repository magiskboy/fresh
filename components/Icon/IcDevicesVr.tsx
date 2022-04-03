import React from "react";

export const IcDevicesVr: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.9498 16.5667H8.06649C6.22554 16.5667 4.73315 18.059 4.73315 19.9V26.75C4.73315 28.5909 6.22554 30.0833 8.06649 30.0833H31.9498C33.7908 30.0833 35.2832 28.5909 35.2832 26.75V19.9C35.2832 18.059 33.7908 16.5667 31.9498 16.5667Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3329 16.35C13.2879 14.7211 13.8876 13.1403 15.0018 11.9512C16.116 10.7621 17.6545 10.0609 19.2829 10H20.5496C22.1868 10.0522 23.7364 10.752 24.8582 11.9457C25.98 13.1393 26.5823 14.7293 26.5329 16.3667V16.3667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7163 23.3167H17.9663"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2498 23.3167H29.4998"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
