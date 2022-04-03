import React from "react";

export const IcContactMobile: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.5833 2.91675H13.4666C11.6257 2.91675 10.1333 4.40913 10.1333 6.25008V33.5334C10.1333 35.3744 11.6257 36.8667 13.4666 36.8667H26.5833C28.4243 36.8667 29.9166 35.3744 29.9166 33.5334V6.25008C29.9166 4.40913 28.4243 2.91675 26.5833 2.91675Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0333 28.55H20.0166C19.4275 28.55 18.95 29.0276 18.95 29.6167V29.6334C18.95 30.2225 19.4275 30.7001 20.0166 30.7001H20.0333C20.6224 30.7001 21.1 30.2225 21.1 29.6334V29.6167C21.1 29.0276 20.6224 28.55 20.0333 28.55Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
