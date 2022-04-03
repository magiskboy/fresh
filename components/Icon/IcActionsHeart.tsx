import React from "react";

export const IcActionsHeart: React.FC<{ size: string }> = ({ size }) => {
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
        d="M22.1835 8.15008C23.7748 6.55878 25.9331 5.66479 28.1835 5.66479C30.4339 5.66479 32.5922 6.55878 34.1835 8.15008C35.7748 9.74137 36.6688 11.8996 36.6688 14.1501C36.6688 16.4005 35.7748 18.5588 34.1835 20.1501L32.0002 22.3334L20.0002 34.3334L8.00016 22.3334L5.81682 20.1501C4.22553 18.5588 3.33154 16.4005 3.33154 14.1501C3.33154 11.8996 4.22553 9.74137 5.81682 8.15008C7.40812 6.55878 9.56639 5.66479 11.8168 5.66479C14.0673 5.66479 16.2255 6.55878 17.8168 8.15008L20.0002 10.3334L22.1835 8.15008Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
