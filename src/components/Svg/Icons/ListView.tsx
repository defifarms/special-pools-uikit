import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
          <g opacity={0.8} filter='url(#prefix__filter0_b_50:2722)'>
              <rect width={28} height={27} rx={1} transform='matrix(1 0 0 -1 0 27)' fill='#6E2DE520' />
          </g>
          <path d='M4 3h5v5H4zM4 10.5h5v5H4zM4 18h5v5H4zM11.5 3H24v5H11.5zM11.5 10.5H24v5H11.5zM11.5 18H24v5H11.5z' />
          <defs>
              <filter id='prefix__filter0_b_50:2722' x={-200} y={-200} width={428} height={427} filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity={0} result='BackgroundImageFix' />
                  <feGaussianBlur in='BackgroundImage' stdDeviation={100} />
                  <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_50:2722' />
                  <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_50:2722' result='shape' />
              </filter>
          </defs>
      </Svg>
  )
};

export default Icon;
