import React from "react";
import { SvgProps } from "../../../components/Svg/types";
import { Svg } from "../../../components/Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      {...props}
      width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="17" cy="17.5" rx="17" ry="17.5" fill="#4D08DE" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22.5523 16.6153C22.5942 16.3652 22.6161 16.1083 22.6161 15.8463C22.6161 15.3067 22.5235 14.7887 22.3533 14.3074H27.2308V21.9997H8V14.3074H13.6481C13.4779 14.7887 13.3853 15.3067 13.3853 15.8463C13.3853 16.1083 13.4071 16.3652 13.4491 16.6153H10.3082V21.2307H24.9236V16.6153H22.5523Z" fill="white" />
      <circle cx="18.0002" cy="15.8462" r="3.84615" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14.003 18.1542H11.8459V20.4619H23.3844V18.1542H21.9988C21.2008 19.5337 19.7093 20.4618 18.0009 20.4618C16.2926 20.4618 14.801 19.5337 14.003 18.1542Z" fill="white" />

    </Svg>
  );
};

export default Icon;
