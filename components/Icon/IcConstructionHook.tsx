import React from "react";

export const IcConstructionHook: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.0997 9.91675H10.0997C8.25874 9.91675 6.76636 11.4091 6.76636 13.2501V19.9167C6.76636 21.7577 8.25874 23.2501 10.0997 23.2501H30.0997C31.9406 23.2501 33.433 21.7577 33.433 19.9167V13.2501C33.433 11.4091 31.9406 9.91675 30.0997 9.91675Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0166 9.91675V6.66675"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.583 9.66675V6.66675"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 28.0169V29.0002C15 29.6341 15.1251 30.2618 15.3682 30.8473C15.6113 31.4328 15.9676 31.9645 16.4167 32.412C16.8657 32.8595 17.3986 33.2139 17.985 33.455C18.5713 33.6961 19.1994 33.8191 19.8333 33.8169V33.8169C21.1108 33.8169 22.3359 33.3094 23.2392 32.4061C24.1425 31.5028 24.65 30.2777 24.65 29.0002V28.0669C24.6281 26.801 24.1087 25.5947 23.2042 24.7089C22.2996 23.823 21.0827 23.329 19.8167 23.3335H15"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
