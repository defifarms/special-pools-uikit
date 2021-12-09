import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="17" cy="17.5" rx="17" ry="17.5" fill="#4D08DE" />
      <circle cx="11" cy="18" r="2" fill="#FCFCFC" />
      <circle cx="17" cy="18" r="2" fill="#FCFCFC" />
      <circle cx="23" cy="18" r="2" fill="#FCFCFC" />
    </Svg>
  );
};

export default Icon;
