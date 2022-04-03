import React from "react";

export const IcShoppingParfume: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6666 19.1665C18.8767 19.1665 20.9963 20.0445 22.5591 21.6073C24.1219 23.1701 24.9999 25.2897 24.9999 27.4998V35.8332H8.33325V27.4998C8.33325 25.2897 9.21123 23.1701 10.774 21.6073C12.3368 20.0445 14.4564 19.1665 16.6666 19.1665V19.1665Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6665 20.8332V17.4998C21.6665 16.6158 21.3153 15.7679 20.6902 15.1428C20.0651 14.5177 19.2172 14.1665 18.3332 14.1665H14.9998C14.1158 14.1665 13.2679 14.5177 12.6428 15.1428C12.0177 15.7679 11.6665 16.6158 11.6665 17.4998V20.8332"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6665 4.1665V14.1665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6665 7.5H21.6665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.3332 4.1665H24.9998C23.1589 4.1665 21.6665 5.65889 21.6665 7.49984C21.6665 9.34079 23.1589 10.8332 24.9998 10.8332H28.3332C30.1741 10.8332 31.6665 9.34079 31.6665 7.49984C31.6665 5.65889 30.1741 4.1665 28.3332 4.1665Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
