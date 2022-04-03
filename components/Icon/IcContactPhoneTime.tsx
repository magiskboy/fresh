import React from "react";

export const IcContactPhoneTime: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.1165 37.3667L30.0998 33.3333C30.4098 33.0238 30.6556 32.6561 30.8234 32.2515C30.9911 31.8468 31.0775 31.413 31.0775 30.975C31.0775 30.5369 30.9911 30.1032 30.8234 29.6985C30.6556 29.2939 30.4098 28.9262 30.0998 28.6167L27.8332 26.4C27.5236 26.0901 27.156 25.8442 26.7513 25.6765C26.3466 25.5087 25.9129 25.4224 25.4748 25.4224C25.0368 25.4224 24.603 25.5087 24.1984 25.6765C23.7937 25.8442 23.4261 26.0901 23.1165 26.4L21.6165 27.9C17.7551 25.5852 14.5214 22.3573 12.1998 18.5V18.5L13.6998 17C14.0098 16.6904 14.2556 16.3228 14.4234 15.9181C14.5911 15.5135 14.6775 15.0797 14.6775 14.6417C14.6775 14.2036 14.5911 13.7699 14.4234 13.3652C14.2556 12.9605 14.0098 12.5929 13.6998 12.2833L11.4498 10C11.1391 9.67996 10.7674 9.42553 10.3566 9.25179C9.94573 9.07805 9.50422 8.98853 9.05818 8.98853C8.61213 8.98853 8.17062 9.07805 7.7598 9.25179C7.34898 9.42553 6.97721 9.67996 6.66651 10L2.74984 14C2.47685 14.2712 2.30611 14.6285 2.26662 15.0113C2.22712 15.3941 2.3213 15.7788 2.53318 16.1V16.1C8.19848 24.6151 15.5014 31.918 24.0165 37.5833V37.5833C24.3377 37.7952 24.7224 37.8894 25.1052 37.8499C25.488 37.8104 25.8453 37.6397 26.1165 37.3667V37.3667Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4331 5.16653C16.4083 3.57197 19.8152 2.96999 23.1567 3.44845C26.4982 3.9269 29.5993 5.46075 32.0075 7.82613C34.4157 10.1915 36.0049 13.2646 36.5432 16.597C37.0815 19.9294 36.5407 23.3465 34.9998 26.3499"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6667 9.46655V18.7999H28.3334"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
