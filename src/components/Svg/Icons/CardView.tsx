import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
          <g opacity={0.8} filter='url(#prefix__filter0_b_50:2732)'>
              <rect width={28} height={27} rx={1} transform='matrix(1 0 0 -1 0 27)' fill='#6E2DE520' />
          </g>
          <path d='M24 23h-5v-5h5v5zm-7.5 0h-5v-5h5v5zM9 23H4v-5h5v5zm15-7.5h-5v-5h5v5zm-7.5 0h-5v-5h5v5zm-7.5 0H4v-5h5v5zM24 8h-5V3h5v5zm-7.5 0h-5V3h5v5zM9 8H4V3h5v5z' />
          <defs>
              <filter id='prefix__filter0_b_50:2732' x={-200} y={-200} width={428} height={427} filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity={0} result='BackgroundImageFix' />
                  <feGaussianBlur in='BackgroundImage' stdDeviation={100} />
                  <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_50:2732' />
                  <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_50:2732' result='shape' />
              </filter>
          </defs>
      </Svg>
  )
};

export default Icon;
