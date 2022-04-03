import React from "react";

export const IcMediaVolumeDown: React.FC<{ size: string }> = ({ size }) => {
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
        d="M21.9333 8.8336L16.7666 14.0003C16.7051 14.0631 16.6212 14.099 16.5333 14.1003H7.49996C6.6159 14.1003 5.76806 14.4515 5.14294 15.0766C4.51782 15.7017 4.16663 16.5495 4.16663 17.4336V23.3336C4.16663 24.2177 4.51782 25.0655 5.14294 25.6906C5.76806 26.3157 6.6159 26.6669 7.49996 26.6669H15.7166C15.7808 26.641 15.8525 26.641 15.9166 26.6669L21.9666 31.2003C22.0162 31.2374 22.075 31.26 22.1367 31.2656C22.1983 31.2711 22.2603 31.2594 22.3157 31.2317C22.3711 31.2041 22.4176 31.1615 22.4502 31.1088C22.4827 31.0562 22.5 30.9955 22.5 30.9336V9.06693C22.499 9.00169 22.479 8.93815 22.4423 8.88419C22.4056 8.83024 22.3539 8.78823 22.2936 8.76339C22.2332 8.73855 22.1669 8.73196 22.1029 8.74444C22.0389 8.75692 21.9799 8.78792 21.9333 8.8336V8.8336Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6666 24.1004V15.7671"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5 19.9336H35.8333"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
