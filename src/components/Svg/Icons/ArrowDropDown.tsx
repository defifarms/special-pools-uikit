import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
        <svg
      width={16}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.658 11.368L8.002 5.686l-5.657 5.682.943.947L8.002 7.58l4.713 4.736.943-.947z"
        fill="#fff"
      />
    </svg>
  );
};

export default Icon;
