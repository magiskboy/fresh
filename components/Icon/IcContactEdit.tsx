import React from "react";

export const IcContactEdit: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.9002 7.58328C27.3767 7.09672 26.6824 6.83612 25.968 6.85796C25.2535 6.8798 24.5765 7.18232 24.0836 7.69994L7.41691 24.3666L6.90025 32.4666C6.89537 32.5445 6.90711 32.6225 6.9347 32.6955C6.96229 32.7685 7.00509 32.8348 7.06026 32.8899C7.11543 32.9451 7.18172 32.9879 7.2547 33.0155C7.32769 33.0431 7.40571 33.0548 7.48358 33.0499L15.5836 32.5333L32.2503 15.8666C32.7679 15.3737 33.0704 14.6967 33.0922 13.9822C33.1141 13.2678 32.8535 12.5735 32.3669 12.0499L27.9002 7.58328Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
