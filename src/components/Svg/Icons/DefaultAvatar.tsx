import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="25" cy="25" r="25" fill="#3230B2" />
      <circle cx="25.0006" cy="17.1429" r="7.14286" fill="white" />
      <path d="M15 35.2385C15 29.7157 19.4772 25.2385 25 25.2385C30.5228 25.2385 35 29.7157 35 35.2385V39.5242H15V35.2385Z" fill="white" />

    </Svg>
  );
};

export default Icon;
