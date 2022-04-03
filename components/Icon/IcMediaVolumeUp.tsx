import React from "react";

export const IcMediaVolumeUp: React.FC<{ size: string }> = ({ size }) => {
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
        d="M22.7667 8.90001L17.6 14.0667C17.5385 14.1295 17.4546 14.1654 17.3667 14.1667H8.33333C7.44928 14.1667 6.60143 14.5179 5.97631 15.143C5.35119 15.7681 5 16.616 5 17.5V23.3333C5 24.2174 5.35119 25.0652 5.97631 25.6904C6.60143 26.3155 7.44928 26.6667 8.33333 26.6667H16.55C16.6141 26.6407 16.6859 26.6407 16.75 26.6667L22.8 31.2C22.845 31.2353 22.8984 31.2585 22.9549 31.2672C23.0115 31.276 23.0693 31.27 23.1229 31.2499C23.1765 31.2298 23.224 31.1963 23.2608 31.1525C23.2977 31.1088 23.3227 31.0562 23.3333 31V9.13334C23.3324 9.0681 23.3124 9.00456 23.2757 8.9506C23.239 8.89664 23.1873 8.85464 23.1269 8.8298C23.0666 8.80495 23.0003 8.79836 22.9363 8.81084C22.8722 8.82332 22.8133 8.85433 22.7667 8.90001V8.90001Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.5 24.1668V15.8335"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.3334 20H36.6667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
