export function NotificationIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      {/* <path
        d="M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30V10Z"
        fill="white"
      /> */}
      <path
        d="M26 23.75H27.5V25.25H12.5V23.75H14V18.5C14 16.9087 14.6321 15.3826 15.7574 14.2574C16.8826 13.1321 18.4087 12.5 20 12.5C21.5913 12.5 23.1174 13.1321 24.2426 14.2574C25.3679 15.3826 26 16.9087 26 18.5V23.75ZM24.5 23.75V18.5C24.5 17.3065 24.0259 16.1619 23.182 15.318C22.3381 14.4741 21.1935 14 20 14C18.8065 14 17.6619 14.4741 16.818 15.318C15.9741 16.1619 15.5 17.3065 15.5 18.5V23.75H24.5ZM17.75 26.75H22.25V28.25H17.75V26.75Z"
        fill="#5C5C5C"
      />
      <g filter="url(#filter0_d_2_10045)">
        <circle cx="26" cy="14" r="2" fill="#FB3748" />
        <circle cx="26" cy="14" r="3" stroke="white" strokeWidth="2" />
      </g>
      <defs>
        <filter
          id="filter0_d_2_10045"
          x="20"
          y="9"
          width="12"
          height="12"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_10045"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_10045"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
