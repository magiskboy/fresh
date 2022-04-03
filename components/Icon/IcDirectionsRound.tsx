import React from "react";

export const IcDirectionsRound: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.18335 14.1667C7.51655 10.9653 9.91782 8.32482 12.9785 6.69446C16.0393 5.06409 19.5704 4.5446 22.971 5.22439C26.3715 5.90418 29.4315 7.74125 31.6303 10.423C33.829 13.1048 35.0306 16.4655 35.0306 19.9334C35.0306 23.4012 33.829 26.762 31.6303 29.4437C29.4315 32.1255 26.3715 33.9626 22.971 34.6424C19.5704 35.3221 16.0393 34.8027 12.9785 33.1723C9.91782 31.5419 7.51655 28.9014 6.18335 25.7"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8.3335V14.6668C5 14.7552 5.03512 14.84 5.09763 14.9025C5.16014 14.965 5.24493 15.0002 5.33333 15.0002H11.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
