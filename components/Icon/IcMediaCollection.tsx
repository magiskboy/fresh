import React from "react";

export const IcMediaCollection: React.FC<{ size: string }> = ({ size }) => {
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
        d="M15.7334 4.44981L5.21677 8.33314C5.15244 8.35717 5.09709 8.40049 5.05831 8.45717C5.01953 8.51385 4.9992 8.58113 5.00011 8.64981V31.5165C4.99748 31.5835 5.0174 31.6495 5.05667 31.7039C5.09595 31.7582 5.15232 31.7979 5.21677 31.8165L15.8668 35.5498C15.9175 35.5688 15.9722 35.5751 16.0259 35.5682C16.0797 35.5613 16.131 35.5414 16.1753 35.5102C16.2196 35.479 16.2557 35.4374 16.2803 35.3892C16.305 35.3409 16.3175 35.2873 16.3168 35.2331L16.1834 4.76647C16.1842 4.71227 16.1717 4.65872 16.147 4.61044C16.1223 4.56217 16.0863 4.52064 16.042 4.48944C15.9976 4.45825 15.9464 4.43834 15.8926 4.43143C15.8389 4.42452 15.7842 4.43083 15.7334 4.44981Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6666 8.4165V31.7498"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.3334 8.4165V31.7498"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 8.4165V31.7498"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
