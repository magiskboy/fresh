import React from "react";

export const IcEditorAttachament: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 14.1667V24.1667C16.6667 25.0508 17.0179 25.8986 17.643 26.5238C18.2681 27.1489 19.1159 27.5001 20 27.5001C20.8841 27.5001 21.7319 27.1489 22.357 26.5238C22.9821 25.8986 23.3333 25.0508 23.3333 24.1667V10.8334C23.3333 9.0653 22.631 7.36961 21.3807 6.11937C20.1305 4.86913 18.4348 4.16675 16.6667 4.16675C14.8986 4.16675 13.2029 4.86913 11.9526 6.11937C10.7024 7.36961 10 9.0653 10 10.8334V25.8334C10 28.4856 11.0536 31.0291 12.9289 32.9045C14.8043 34.7798 17.3478 35.8334 20 35.8334V35.8334C22.6522 35.8334 25.1957 34.7798 27.0711 32.9045C28.9464 31.0291 30 28.4856 30 25.8334V10.8334"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
