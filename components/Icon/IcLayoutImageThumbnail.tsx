import React from "react";

export const IcLayoutImageThumbnail: React.FC<{ size: string }> = ({
  size,
}) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 6.6665H6.66658C4.82564 6.6665 3.33325 8.15889 3.33325 9.99984V16.6665C3.33325 18.5075 4.82564 19.9998 6.66658 19.9998H13.3333C15.1742 19.9998 16.6666 18.5075 16.6666 16.6665V9.99984C16.6666 8.15889 15.1742 6.6665 13.3333 6.6665Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 33.333H5"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 26.6665H5"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3333 6.6665H26.6666C24.8256 6.6665 23.3333 8.15889 23.3333 9.99984V16.6665C23.3333 18.5075 24.8256 19.9998 26.6666 19.9998H33.3333C35.1742 19.9998 36.6666 18.5075 36.6666 16.6665V9.99984C36.6666 8.15889 35.1742 6.6665 33.3333 6.6665Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6667 33.333H25"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 26.6665H25"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
