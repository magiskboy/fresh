import React from "react";

export const IcFurniturePouch: React.FC<{ size: string }> = ({ size }) => {
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
        d="M23.7998 29.9998H16.1998C14.6084 29.9988 13.0359 29.6541 11.5901 28.9892C10.1442 28.3243 8.85899 27.3549 7.82239 26.1474C6.78578 24.9399 6.02224 23.5227 5.58399 21.9928C5.14574 20.4629 5.04312 18.8564 5.28315 17.2831V17.2831C5.69603 14.5713 6.82499 12.0187 8.55356 9.88878C10.2821 7.75884 12.5477 6.12867 15.1165 5.16648V5.16648C18.2646 3.98357 21.7351 3.98357 24.8832 5.16648V5.16648C27.4444 6.12834 29.7036 7.75449 31.4288 9.87798C33.1539 12.0015 34.2829 14.5458 34.6998 17.2498V17.2498C34.9449 18.8241 34.8467 20.4329 34.4119 21.9657C33.977 23.4985 33.2158 24.9191 32.1805 26.1302C31.1451 27.3413 29.8601 28.3141 28.4136 28.982C26.967 29.65 25.3931 29.9972 23.7998 29.9998V29.9998Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6667 30L30.0001 35"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 30L10 35"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 20L13.9001 21.4833C15.7071 22.6867 17.829 23.3303 20.0001 23.3333C22.1711 23.3303 24.293 22.6867 26.1001 21.4833L28.3334 20"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
