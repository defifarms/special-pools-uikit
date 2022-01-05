import styled from "styled-components";
import { scales } from "../Checkbox/types";
import { HandleProps, InputProps, ScaleKeys, ToggleProps } from "./types";

const scaleKeyValues = {
    sm: {
        handleHeight: '24px',
        handleWidth: '24px',
        handleLeft: '2px',
        handleTop: '2px',
        checkedLeft: 'calc(100% - 26px)',
        toggleHeight: '28px',
        toggleWidth: '50px',
    },
    md: {
        handleHeight: '32px',
        handleWidth: '32px',
        handleLeft: '4px',
        handleTop: '4px',
        checkedLeft: 'calc(100% - 36px)',
        toggleHeight: '40px',
        toggleWidth: '72px',
    },
    lg: {
    handleHeight: "32px",
    handleWidth: "32px",
    handleLeft: "4px",
    handleTop: "4px",
    checkedLeft: "calc(100% - 36px)",
    toggleHeight: "40px",
    toggleWidth: "72px",
  },
}

const getScale = (property: ScaleKeys) => ({
  scale = scales.MD,
}: ToggleProps) => {
  return scaleKeyValues[scale][property];
};

export const Handle = styled.div<HandleProps>`
  background-color: ${({ theme }) => theme.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  height: ${getScale("handleHeight")};
  left: ${getScale("handleLeft")};
  position: absolute;
  top: ${getScale("handleTop")};
  transition: left 200ms ease-in;
  width: ${getScale("handleWidth")};
  z-index: 1;
`;

export const Input = styled.input<InputProps>`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: ${getScale("checkedLeft")};
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const StyledToggle = styled.div<ToggleProps>`
    align-items: center;
    background-color: #ececec;
    // background-color: ${({ theme, checked }) => theme.colors[checked ? 'white' : 'white']};
    border-radius: 24px;
    box-shadow: ${({ theme }) => theme.shadows.inset};
    cursor: pointer;
    display: inline-flex;
    height: ${getScale('toggleHeight')};
    position: relative;
    transition: background-color 200ms;
    width: ${getScale('toggleWidth')};
`

export default StyledToggle;
