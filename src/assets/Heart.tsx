interface ILogo {
  className?: string;
}

const Heart = ({ className }: ILogo) => {
  return (
    <svg
      className={className}
      width="23"
      height="20"
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5833 19.2989L10.5836 19.2992C10.7303 19.4291 10.9174 19.5 11.1111 19.5C11.3047 19.5 11.4921 19.4291 11.6386 19.2994L11.6387 19.2993C12.5412 18.5009 13.4104 17.7515 14.1752 17.0924L14.1755 17.0921C16.425 15.1528 18.3199 13.517 19.6316 11.9158L19.6316 11.9158C21.0807 10.1471 21.7222 8.51522 21.7222 6.75591C21.7222 5.02057 21.1346 3.44031 20.0899 2.29405C19.0349 1.13645 17.5907 0.5 16.0144 0.5C14.8462 0.5 13.7793 0.871106 12.831 1.61305L12.831 1.61307C12.4126 1.94033 12.0253 2.33376 11.6741 2.79047C11.3903 3.1595 10.8319 3.15942 10.5481 2.79041C10.1971 2.33379 9.80965 1.94035 9.39141 1.61305C8.44308 0.871106 7.37621 0.5 6.20795 0.5C4.63156 0.5 3.18753 1.13645 2.13246 2.29405L10.5833 19.2989ZM10.5833 19.2989C9.68363 18.5031 8.81653 17.7555 8.05359 17.0978C8.05294 17.0973 8.05229 17.0967 8.05164 17.0962L8.05158 17.0961L8.0516 17.0961M10.5833 19.2989L8.0516 17.0961M8.0516 17.0961L8.04775 17.0927M8.0516 17.0961L8.04775 17.0927M8.04775 17.0927C5.79776 15.1531 3.90253 13.517 2.59083 11.916M8.04775 17.0927L2.13244 2.29407C1.0878 3.44035 0.5 5.02061 0.5 6.75591C0.5 8.51519 1.14172 10.1471 2.59083 11.916M2.59083 11.916L2.20405 12.2329L2.59083 11.916Z"
        stroke="#F7F7F7"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Heart;
