import React from "react";

export const IcPlacesMosque: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 21.667C22.6522 21.667 25.1957 22.7206 27.0711 24.5959C28.9464 26.4713 30 29.0148 30 31.667V36.667H10V31.667C10 29.0148 11.0536 26.4713 12.9289 24.5959C14.8043 22.7206 17.3478 21.667 20 21.667V21.667Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1831 25.0002V21.1502C12.1831 19.0771 13.0066 17.0889 14.4726 15.6229C15.9385 14.157 17.9267 13.3335 19.9998 13.3335V13.3335C22.0729 13.3335 24.0611 14.157 25.527 15.6229C26.9929 17.0889 27.8164 19.0771 27.8164 21.1502V25.0002"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3334 16.1502C13.3334 11.8335 16.3167 8.3335 20 8.3335C23.6834 8.3335 26.6667 11.8335 26.6667 16.1502"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 3.3335V8.3335"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6666 36.667V30.0003C16.6666 29.1163 17.0178 28.2684 17.6429 27.6433C18.2681 27.0182 19.1159 26.667 20 26.667C20.884 26.667 21.7319 27.0182 22.357 27.6433C22.9821 28.2684 23.3333 29.1163 23.3333 30.0003V36.667"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
