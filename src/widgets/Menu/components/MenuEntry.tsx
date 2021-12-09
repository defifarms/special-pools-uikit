import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../components/Text";
import { Colors } from "../../../theme/types";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  opacity: 0.9;
  color: #fff;
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? '0 16px 0 62px' : '0 16px 0 0')};
  font-family: Poppins;
  font-style: normal;
  font-size: 18px;
  line-height: ${MENU_ENTRY_HEIGHT}px;
  background-color: ${({ isActive }) =>
    isActive ? '#3A09A2' : '#300095'};
  // box-shadow: ${({ isActive, theme }) =>
    isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none"};
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    height: inherit;
    width: 6px;
    background-color: ${({ isActive }) =>
    isActive ? '#FEA23E' : 'transparent'};
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.linkText};
    margin: 0 22px 0 24px;
  }

  &:hover {
    color: #657eec;
    background: #3A09A2;
    svg {
        fill: ${({ theme }) => theme.colors.white};
    }

    &:hover {
        color: ${({ theme }) => theme.colors.textHoverNav};

        svg {
            fill: ${({ theme }) => theme.colors.textHoverNav} !important;
        }
    }

  .active {
    color: #657eec;
    background-color: #3A09A2;
    svg {
      fill: #657eec;
    }

    .active {
        color: #657eec;

        svg {
            fill: #657eec;
        }
    }
`
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
};

const LinkStatus = styled(Text) <{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;

const LinkLabelMemo = React.memo(
  LinkLabel,
  (prev, next) => prev.isPushed === next.isPushed
);

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
