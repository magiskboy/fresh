import React from "react";

export const IcConstructionMeter: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.8334 24.6167V28.9"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.7332 33.8167V20.95C30.7769 17.5163 29.5248 14.1922 27.2266 11.6407C24.9283 9.0891 21.7528 7.49754 18.3332 7.18335C16.5093 7.06225 14.6801 7.31744 12.959 7.93307C11.238 8.54869 9.66191 9.51161 8.32868 10.762C6.99544 12.0124 5.93354 13.5236 5.20893 15.2016C4.48432 16.8797 4.11247 18.6888 4.11649 20.5167V32.1833C4.11649 32.6254 4.29208 33.0493 4.60464 33.3619C4.9172 33.6744 5.34113 33.85 5.78315 33.85H37.1165"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 19.3335C22.5 16.5721 20.2614 14.3335 17.5 14.3335C14.7386 14.3335 12.5 16.5721 12.5 19.3335C12.5 22.0949 14.7386 24.3335 17.5 24.3335C20.2614 24.3335 22.5 22.0949 22.5 19.3335Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
