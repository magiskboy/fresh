import React from "react";

export const IcActionsAddRibbon: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.6666 29.4667V34.55C31.6657 34.6081 31.6496 34.6649 31.62 34.7148C31.5903 34.7648 31.5482 34.8061 31.4976 34.8347C31.4471 34.8633 31.39 34.8783 31.3319 34.878C31.2739 34.8778 31.2169 34.8624 31.1666 34.8334L20.1666 26.8834C20.1173 26.8504 20.0593 26.8328 19.9999 26.8328C19.9406 26.8328 19.8826 26.8504 19.8333 26.8834L8.83325 34.8334C8.78297 34.8624 8.72597 34.8778 8.66791 34.878C8.60984 34.8783 8.55272 34.8633 8.50221 34.8347C8.45169 34.8061 8.40952 34.7648 8.37989 34.7148C8.35025 34.6649 8.33418 34.6081 8.33325 34.55V8.45003C8.33325 7.56598 8.68444 6.71813 9.30956 6.09301C9.93468 5.46789 10.7825 5.1167 11.6666 5.1167H28.3333C29.2173 5.1167 30.0652 5.46789 30.6903 6.09301C31.3154 6.71813 31.6666 7.56598 31.6666 8.45003V10.6"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6665 20H36.6665"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6665 15V25"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
