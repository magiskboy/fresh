import React from "react";

export const IcDevicesWatch: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.2337 9.7002H10.8004C8.95942 9.7002 7.46704 11.1926 7.46704 13.0335V27.0335C7.46704 28.8745 8.95942 30.3669 10.8004 30.3669H25.2337C27.0747 30.3669 28.567 28.8745 28.567 27.0335V13.0335C28.567 11.1926 27.0747 9.7002 25.2337 9.7002Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.7169 9.63348V7.68348C24.8263 6.67642 24.5397 5.66628 23.9175 4.86685C23.2954 4.06741 22.3866 3.5414 21.3835 3.40015H14.6335C13.6304 3.5414 12.7217 4.06741 12.0995 4.86685C11.4774 5.66628 11.1907 6.67642 11.3002 7.68348V9.63348"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3001 30.4333V32.3667C11.1959 33.3673 11.4857 34.3691 12.108 35.1595C12.7304 35.9499 13.6363 36.4667 14.6335 36.6H21.3835C22.3806 36.4667 23.2865 35.9499 23.9089 35.1595C24.5313 34.3691 24.8211 33.3673 24.7168 32.3667V30.4333"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.5337 13.9502V17.9169"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
