import React from "react";

export const IcMediaNote: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 31.5666C15.1743 31.5666 16.6667 30.0742 16.6667 28.2332C16.6667 26.3923 15.1743 24.8999 13.3333 24.8999C11.4924 24.8999 10 26.3923 10 28.2332C10 30.0742 11.4924 31.5666 13.3333 31.5666Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6666 28.2336C28.5075 28.2336 29.9999 26.7412 29.9999 24.9002C29.9999 23.0593 28.5075 21.5669 26.6666 21.5669C24.8256 21.5669 23.3333 23.0593 23.3333 24.9002C23.3333 26.7412 24.8256 28.2336 26.6666 28.2336Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 28.2335V15.1001C16.6681 15.0384 16.6858 14.9781 16.718 14.9255C16.7502 14.8728 16.7958 14.8295 16.8501 14.8001L29.5167 8.46681C29.5677 8.44112 29.6245 8.42895 29.6815 8.43148C29.7386 8.43401 29.794 8.45116 29.8425 8.48127C29.8911 8.51139 29.931 8.55346 29.9586 8.60346C29.9862 8.65346 30.0005 8.70971 30.0001 8.76681V24.9001"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
