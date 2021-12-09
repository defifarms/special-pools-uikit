import styled from "styled-components";
import {
  scales,
  DefifarmsToggleProps,
  HandleProps,
  InputProps,
  ScaleKeys,
} from "./types";

const scaleKeyValues = {
  sm: {
    defifarmsSize: "16px", // The size of a defifarms (the handle)
    travelDistance: "16px", // How far defifarmss should travel horizontally
    toggleHeight: "20px", // General Height and
    toggleWidth: "36px", // Width of a toggle box
    defifarmsThickness: "1px", // Bottom shadow of a defifarms
    defifarmsTwoOffset: "0px", // defifarmss don't look good when they are concentric
    defifarmsThreeOffset: "-3px", // so defifarms 2 and 3 are shifted a little bit
    butterTop: "3px", // Fine adjustments for butter position
    butterLeft: "10px",
    butterWidth: "6px", // Widht and
    butterHeight: "5px", // Height of a butter block on top of defifarmss
    butterThickness: "0.5px", // Shadow on the bottom of the butter block
    butterRadius: "2px", // Rounded corners for the butter
    butterSmearOneTop: "10px", // There is melted butter
    butterSmearOneLeft: "2.5px", // next to the butter block
    butterSmearTwoTop: "11px", // implemented with :before and :after
    butterSmearTwoRight: "2.5px", // these values adjust the position of it
  },
  md: {
    defifarmsSize: "32px",
    travelDistance: "34px",
    toggleHeight: "40px",
    toggleWidth: "72px",
    defifarmsThickness: "2px",
    defifarmsTwoOffset: "-3px",
    defifarmsThreeOffset: "-8px",
    butterTop: "3px",
    butterLeft: "16px",
    butterWidth: "12px",
    butterHeight: "11px",
    butterThickness: "1px",
    butterRadius: "4px",
    butterSmearOneTop: "20px",
    butterSmearOneLeft: "5px",
    butterSmearTwoTop: "22px",
    butterSmearTwoRight: "5px",
  },
};

const getScale = (property: ScaleKeys) => ({
  scale = scales.MD,
}: DefifarmsToggleProps) => {
  return scaleKeyValues[scale][property];
};

export const DefifarmsStack = styled.div<HandleProps>`
  position: relative;
  display: inline-block;

  &:label:before {
    content: none;
  }

  .defifarmss {
    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .defifarms {
    background: #e27c31;
    border-radius: 50%;
    width: ${getScale("defifarmsSize")};
    height: ${getScale("defifarmsSize")};
    position: absolute;
    transition: 0.4s ease;
    top: 2px;
    left: 4px;
    box-shadow: 0 ${getScale("defifarmsThickness")} 0
      ${getScale("defifarmsThickness")} #fbbe7c;
    background: url(data:image/png;base64,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);
    background-size: contain;
  }

  .defifarms:nth-child(1) {
    background: ${({ theme }) => theme.pancakeToggle.handleBackground};
    box-shadow: 0 ${getScale("defifarmsThickness")} 0
      ${getScale("defifarmsThickness")}
      ${({ theme }) => theme.pancakeToggle.handleShadow};
  }

  .defifarms:nth-child(2) {
    left: 0;
    top: ${getScale("defifarmsTwoOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .defifarms:nth-child(3) {
    top: ${getScale("defifarmsThreeOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }


  .defifarms:nth-child(3):before {
    top: ${getScale("butterSmearOneTop")};
    left: ${getScale("butterSmearOneLeft")};
  }

  .defifarms:nth-child(3):after {
    top: ${getScale("butterSmearTwoTop")};
    right: ${getScale("butterSmearTwoRight")};
  }
`;

export const DefifarmsInput = styled.input<InputProps>`
  height: 40px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 40px;

  &:focus + label {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:checked + label .defifarmss {
    transform: translateX(${getScale("travelDistance")});
  }

  &:checked + label .defifarms:nth-child(1) {
    background: #e27c31;
    box-shadow: 0 ${getScale("defifarmsThickness")} 0
      ${getScale("defifarmsThickness")} #fbbe7c;
    transition-delay: 0.2s;
  }

  &:checked + label .defifarms:nth-child(2) {
    transform: scale(1);
    transition-delay: 0.2s;
  }

  &:checked + label .defifarms:nth-child(3) {
    transform: scale(1);
    transition-delay: 0.4s;
  }

  &:checked + label .butter {
    transform: scale(1);
    transition-delay: 0.6s;
  }
`;

export const DefifarmsLabel = styled.label<DefifarmsToggleProps>`
  width: ${getScale("toggleWidth")};
  height: ${getScale("toggleHeight")};
  background: ${({ theme, checked }) =>
    theme.colors[checked ? "success" : "input"]};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  display: inline-block;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
`;
