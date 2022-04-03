import React from "react";

export const IcPlacesChurch: React.FC<{ size: string }> = ({ size }) => {
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
        d="M19.7667 3.56645L10.1 13.2331C10.0372 13.2947 10.0013 13.3785 10 13.4664V36.6664H30V13.4664C29.9987 13.3785 29.9628 13.2947 29.9 13.2331L20.2333 3.56645C20.2037 3.53412 20.1676 3.5083 20.1274 3.49064C20.0873 3.47299 20.0439 3.46387 20 3.46387C19.9561 3.46387 19.9127 3.47299 19.8726 3.49064C19.8324 3.5083 19.7963 3.53412 19.7667 3.56645V3.56645Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99992 23.333L5.84992 24.3663C5.13033 24.5482 4.49202 24.965 4.03614 25.5507C3.58026 26.1364 3.3329 26.8575 3.33325 27.5997V36.333C3.33325 36.4214 3.36837 36.5062 3.43088 36.5687C3.4934 36.6312 3.57818 36.6663 3.66659 36.6663H9.99992"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 23.333L34.15 24.3663C34.8696 24.5482 35.5079 24.965 35.9638 25.5507C36.4197 26.1364 36.667 26.8575 36.6667 27.5997V36.333C36.6667 36.4214 36.6315 36.5062 36.569 36.5687C36.5065 36.6312 36.4217 36.6663 36.3333 36.6663H30"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 13.333V21.6663"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6665 16.6665H23.3332"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
