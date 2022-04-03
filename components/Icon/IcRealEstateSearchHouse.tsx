import React from "react";

export const IcRealEstateSearchHouse: React.FC<{ size: string }> = ({
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
        d="M36.6667 28.0167V16.7833C36.6975 16.7029 36.6975 16.6138 36.6667 16.5333L20.3334 3.46668C20.2743 3.41935 20.2008 3.39355 20.125 3.39355C20.0493 3.39355 19.9758 3.41935 19.9167 3.46668L3.51671 16.5333C3.48134 16.5649 3.45276 16.6034 3.4327 16.6464C3.41265 16.6893 3.40154 16.7359 3.40004 16.7833L3.33337 33.0667C3.33337 33.9507 3.68456 34.7986 4.30968 35.4237C4.93481 36.0488 5.78265 36.4 6.66671 36.4L23.7 36.5167"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0001 30.0002C24.6025 30.0002 28.3334 26.2692 28.3334 21.6668C28.3334 17.0645 24.6025 13.3335 20.0001 13.3335C15.3977 13.3335 11.6667 17.0645 11.6667 21.6668C11.6667 26.2692 15.3977 30.0002 20.0001 30.0002Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M25.0997 28.6831L31.6664 34.9998"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
