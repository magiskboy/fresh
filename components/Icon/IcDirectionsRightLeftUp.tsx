import React from "react";

export const IcDirectionsRightLeftUp: React.FC<{ size: string }> = ({
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
        d="M30 20H23.3333C22.4493 20 21.6014 20.3512 20.9763 20.9763C20.3512 21.6014 20 22.4493 20 23.3333V35"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6667 25L31.4334 20.2333C31.4657 20.2037 31.4916 20.1676 31.5092 20.1274C31.5269 20.0873 31.536 20.0439 31.536 20C31.536 19.9561 31.5269 19.9127 31.5092 19.8726C31.4916 19.8324 31.4657 19.7963 31.4334 19.7667L26.6667 15"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 23.3334V6.66675"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 10.6835L20.2333 5.91679C20.2037 5.88446 20.1676 5.85864 20.1274 5.84099C20.0873 5.82333 20.0439 5.81421 20 5.81421C19.9561 5.81421 19.9127 5.82333 19.8726 5.84099C19.8324 5.85864 19.7963 5.88446 19.7667 5.91679L15 10.6835"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 20H16.6667C17.5507 20 18.3986 20.3512 19.0237 20.9763C19.6488 21.6014 20 22.4493 20 23.3333V35"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3331 25L8.56645 20.15C8.53412 20.1203 8.5083 20.0843 8.49064 20.0441C8.47299 20.0039 8.46387 19.9605 8.46387 19.9167C8.46387 19.8728 8.47299 19.8294 8.49064 19.7892C8.5083 19.7491 8.53412 19.713 8.56645 19.6833L13.3331 15"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
