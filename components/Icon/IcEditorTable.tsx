import React from "react";

export const IcEditorTable: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.3333 3.33325H3.66659C3.48249 3.33325 3.33325 3.48249 3.33325 3.66659V36.3333C3.33325 36.5173 3.48249 36.6666 3.66659 36.6666H36.3333C36.5173 36.6666 36.6666 36.5173 36.6666 36.3333V3.66659C36.6666 3.48249 36.5173 3.33325 36.3333 3.33325Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 3.33325V36.6666"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33325 26.6665H36.6666"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.6666 15H3.33325"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
