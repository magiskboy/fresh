import React from "react";

export const IcSportWinner: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0001 37.3332C27.3639 37.3332 33.3334 31.3636 33.3334 23.9998C33.3334 16.636 27.3639 10.6665 20.0001 10.6665C12.6363 10.6665 6.66675 16.636 6.66675 23.9998C6.66675 31.3636 12.6363 37.3332 20.0001 37.3332Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0004 10.9998L10.5004 5.3665C10.3066 5.12136 10.1857 4.8267 10.1514 4.51614C10.1171 4.20559 10.1708 3.89164 10.3064 3.61013C10.4419 3.32861 10.6538 3.09087 10.918 2.92402C11.1822 2.75717 11.4879 2.66794 11.8004 2.6665H28.2004C28.5128 2.66794 28.8186 2.75717 29.0827 2.92402C29.3469 3.09087 29.5588 3.32861 29.6944 3.61013C29.8299 3.89164 29.8836 4.20559 29.8493 4.51614C29.815 4.8267 29.6941 5.12136 29.5004 5.3665L25.0004 10.9998"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6501 21.5165L20.4668 17.1665V30.4998"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
