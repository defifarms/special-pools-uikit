import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7956 18.3353C17.4537 17.3785 16.7004 16.533 15.6526 15.9299C14.6047 15.3269 13.3208 15 12 15C10.6792 15 9.3953 15.3269 8.34743 15.9299C7.29957 16.533 6.5463 17.3785 6.20445 18.3353"
        stroke="black"
        strokeLinecap="round"
      />
      <circle cx="12" cy="9" r="3" stroke="black" strokeLinecap="round" />
    </Svg>
  );
};

export default Icon;
