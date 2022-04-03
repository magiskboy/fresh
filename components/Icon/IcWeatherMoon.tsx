import React from "react";

export const IcWeatherMoon: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0333 4.64984C16.4745 7.35633 15.5958 10.4007 15.4727 13.5216C15.3496 16.6424 15.9857 19.7466 17.3265 22.5674C18.6673 25.3883 20.6726 27.8417 23.1704 29.7168C25.6681 31.592 28.5837 32.8329 31.6666 33.3332L31.1166 33.6665C27.4633 35.828 23.1009 36.4497 18.9892 35.3948C14.8774 34.3399 11.3531 31.6949 9.19164 28.0415C7.03012 24.3881 6.40843 20.0258 7.46332 15.914C8.51821 11.8023 11.1633 8.27802 14.8166 6.1165C15.8405 5.51653 16.9241 5.02498 18.05 4.64984H18.0333ZM19.8833 1.6665H19.55C17.4314 2.06023 15.3997 2.82774 13.55 3.93317C11.4524 5.28893 9.65157 7.0561 8.25653 9.1278C6.86149 11.1995 5.9012 13.5326 5.43374 15.9861C4.96629 18.4396 5.00138 20.9624 5.53691 23.4019C6.07244 25.8414 7.09727 28.147 8.5494 30.179C10.0015 32.2111 11.8508 33.9275 13.9853 35.2244C16.1198 36.5213 18.4952 37.3717 20.9678 37.7242C23.4404 38.0767 25.9589 37.9239 28.3707 37.2752C30.7826 36.6264 33.0378 35.4952 35 33.9498C35.2603 33.7346 35.4491 33.4454 35.5413 33.1204C35.6335 32.7955 35.6248 32.4502 35.5164 32.1303C35.408 31.8104 35.2049 31.531 34.9341 31.3291C34.6633 31.1272 34.3375 31.0124 34 30.9998C30.979 30.8413 28.057 29.87 25.5423 28.1885C23.0276 26.507 21.0136 24.1777 19.7129 21.4466C18.4121 18.7154 17.873 15.6837 18.1523 12.6715C18.4317 9.65939 19.5192 6.77855 21.3 4.33317C21.4857 4.08555 21.5988 3.79112 21.6266 3.48285C21.6544 3.17458 21.5958 2.86466 21.4573 2.58781C21.3189 2.31097 21.1061 2.07814 20.8429 1.91542C20.5796 1.7527 20.2762 1.6665 19.9666 1.6665H19.8833Z"
        fill="#151515"
      />
    </svg>
  );
};
