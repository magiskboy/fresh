import React from "react";

export const IcSecurityCamera: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.7168 3.3335H10.0501C8.20918 3.3335 6.7168 4.82588 6.7168 6.66683V16.6668C6.7168 18.5078 8.20918 20.0002 10.0501 20.0002H26.7168C28.5577 20.0002 30.0501 18.5078 30.0501 16.6668V6.66683C30.0501 4.82588 28.5577 3.3335 26.7168 3.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 8.3335H36.2333C36.2856 8.3337 36.337 8.34618 36.3835 8.36991C36.43 8.39365 36.4703 8.42799 36.5012 8.47015C36.532 8.51232 36.5524 8.56114 36.5609 8.61267C36.5694 8.6642 36.5657 8.71701 36.55 8.76683L34.5167 15.9668C34.4955 16.0343 34.4533 16.0932 34.3964 16.1352C34.3395 16.1771 34.2707 16.1999 34.2 16.2002H30"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.1333 20V30C18.1333 30.8841 17.7821 31.7319 17.1569 32.357C16.5318 32.9821 15.684 33.3333 14.7999 33.3333H3.33325"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.38354 30V36.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
