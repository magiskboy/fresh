import React from "react";

export const IcPlacesBeacon: React.FC<{ size: string }> = ({ size }) => {
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
        d="M14.9999 9.59978L13.3333 36.6664H26.6666L24.9999 9.59978C24.9543 8.78345 24.6103 8.01234 24.0333 7.43311L20.2333 3.56645C20.2036 3.53412 20.1675 3.5083 20.1274 3.49064C20.0872 3.47299 20.0438 3.46387 19.9999 3.46387C19.956 3.46387 19.9126 3.47299 19.8725 3.49064C19.8323 3.5083 19.7962 3.53412 19.7666 3.56645L15.8999 7.43311C15.3473 8.02241 15.0274 8.79236 14.9999 9.59978V9.59978Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6665 15H28.3332"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33325 11.6665L6.43325 14.7665C6.46558 14.7962 6.4914 14.8322 6.50905 14.8724C6.52671 14.9126 6.53583 14.956 6.53583 14.9998C6.53583 15.0437 6.52671 15.0871 6.50905 15.1273C6.4914 15.1674 6.46558 15.2035 6.43325 15.2332L3.33325 18.3332"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.5329 18.3332L33.4329 15.2332C33.4006 15.2035 33.3748 15.1674 33.3571 15.1273C33.3394 15.0871 33.3303 15.0437 33.3303 14.9998C33.3303 14.956 33.3394 14.9126 33.3571 14.8724C33.3748 14.8322 33.4006 14.7962 33.4329 14.7665L36.5329 11.6665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
