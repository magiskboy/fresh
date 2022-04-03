import React from "react";

export const IcDirectionsAgain: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.8333 6.18335C29.0347 7.51655 31.6752 9.91782 33.3056 12.9785C34.936 16.0393 35.4554 19.5704 34.7757 22.971C34.0959 26.3715 32.2588 29.4315 29.577 31.6303C26.8953 33.829 23.5345 35.0306 20.0667 35.0306C16.5988 35.0306 13.2381 33.829 10.5563 31.6303C7.87455 29.4315 6.03748 26.3715 5.35769 22.971C4.6779 19.5704 5.19739 16.0393 6.82776 12.9785C8.45812 9.91782 11.0986 7.51655 14.3 6.18335"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33325 5H14.6666C14.755 5 14.8398 5.03512 14.9023 5.09763C14.9648 5.16014 14.9999 5.24493 14.9999 5.33333V11.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6667 5H25.3333C25.2449 5 25.1601 5.03512 25.0976 5.09763C25.0351 5.16014 25 5.24493 25 5.33333V11.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
