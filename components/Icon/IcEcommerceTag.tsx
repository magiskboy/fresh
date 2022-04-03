import React from "react";

export const IcEcommerceTag: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.917 4.51671L8.91697 12.85C8.87894 12.8793 8.84849 12.9173 8.82819 12.9608C8.80789 13.0043 8.79833 13.0521 8.8003 13.1V32.5167C8.8003 33.4008 9.15149 34.2486 9.77661 34.8737C10.4017 35.4989 11.2496 35.85 12.1336 35.85H27.767C28.651 35.85 29.4989 35.4989 30.124 34.8737C30.7491 34.2486 31.1003 33.4008 31.1003 32.5167V13.3334C31.1023 13.283 31.0928 13.2328 31.0726 13.1866C31.0524 13.1404 31.022 13.0994 30.9836 13.0667L20.9836 4.58338C20.697 4.34123 20.337 4.20291 19.9619 4.19081C19.5868 4.17871 19.2187 4.29354 18.917 4.51671V4.51671Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0004 16.9668C21.4363 16.9668 22.6004 15.8028 22.6004 14.3668C22.6004 12.9309 21.4363 11.7668 20.0004 11.7668C18.5645 11.7668 17.4004 12.9309 17.4004 14.3668C17.4004 15.8028 18.5645 16.9668 20.0004 16.9668Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
