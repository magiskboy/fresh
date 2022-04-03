import React from "react";

export const IcWeatherCloudy: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.9503 30C32.401 30.0588 33.8161 29.5417 34.887 28.5613C35.9579 27.5809 36.5977 26.2169 36.6669 24.7666C36.6121 23.5647 36.1525 22.4167 35.3628 21.5089C34.5731 20.6012 33.4997 19.9872 32.3169 19.7666C31.8001 18.8513 31.0494 18.0897 30.1416 17.5597C29.2338 17.0298 28.2015 16.7505 27.1503 16.7505C26.0991 16.7505 25.0668 17.0298 24.159 17.5597C23.2512 18.0897 22.5004 18.8513 21.9836 19.7666C20.7991 19.9866 19.7235 20.6 18.931 21.5075C18.1385 22.4149 17.6755 23.5633 17.6169 24.7666C17.6861 26.2169 18.326 27.5809 19.3969 28.5613C20.4678 29.5417 21.8829 30.0588 23.3336 30C24.0686 29.9976 24.797 29.8621 25.4836 29.6C25.9989 29.866 26.5704 30.0048 27.1503 30.0048C27.7302 30.0048 28.3017 29.866 28.8169 29.6C29.5036 29.8621 30.232 29.9976 30.9669 30"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3 6.06653C15.8723 5.27647 15.2357 4.61917 14.4597 4.16651C13.6837 3.71384 12.7982 3.48322 11.9 3.49986C11.0042 3.48443 10.1215 3.71573 9.34834 4.16843C8.57522 4.62113 7.94154 5.27779 7.51665 6.06653C6.49871 6.25326 5.57577 6.78389 4.90225 7.56967C4.22873 8.35544 3.84549 9.34868 3.81665 10.3832C3.87291 11.6153 4.41466 12.775 5.32347 13.6089C6.23229 14.4428 7.43426 14.8829 8.66665 14.8332C9.29301 14.8352 9.91443 14.7223 10.5 14.4999C10.9368 14.7116 11.4146 14.8254 11.9 14.8332C12.3966 14.8303 12.8863 14.7164 13.3333 14.4999C13.9189 14.7223 14.5403 14.8352 15.1667 14.8332C16.3962 14.8784 17.5939 14.4362 18.4991 13.6029C19.4043 12.7695 19.9437 11.6123 20 10.3832C19.9681 9.34957 19.5838 8.35792 18.9108 7.57276C18.2378 6.7876 17.3166 6.25613 16.3 6.06653V6.06653Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.5003 30.7164C28.0455 33.1347 24.8329 34.6341 21.4026 34.9624C17.9724 35.2907 14.5337 34.428 11.6647 32.5193C8.79569 30.6105 6.67138 27.7722 5.64891 24.4814C4.62645 21.1907 4.76818 17.6482 6.05028 14.4497"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3669 5.44957C17.5543 5.14736 18.7751 4.99617 20.0003 4.99957C23.9785 4.99957 27.7938 6.57992 30.6069 9.39297C33.4199 12.206 35.0003 16.0213 35.0003 19.9996C35.0003 20.2829 35.0003 20.5662 35.0003 20.8329"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
