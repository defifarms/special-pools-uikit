import React, { cloneElement, Children, ReactElement } from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";
import { space } from "styled-system";
import { scales, variants } from "../Button/types";
import { ButtonMenuProps } from "./types";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

const getBackgroundColor = ({ theme, variant, bgColor }: StyledButtonMenuProps) => {
  return bgColor || theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const getBorderColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[
    variant === variants.SUBTLE ? "inputSecondary" : "disabled"
  ];
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
    background-color: ${getBackgroundColor};
    border-radius: ${({ borderRadius }) => borderRadius};
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

    & > button,
    & > a {
        margin-left: ${({ fullWidth }) => (fullWidth ? '0px' : '2px')}; // To avoid focus shadow overlap
        flex: ${({ fullWidth }) => (fullWidth ? 1 : 'auto')};
    }

    & > button + button,
    & > a + a {
        margin-left: 2px; // To avoid focus shadow overlap
    }

    & > button,
    & a {
        box-shadow: none;
    }

    ${({ isBorder }) => {
        if (isBorder) {
            return `
      border: 1px solid ${getBorderColor};
    `
        }
        return ''
    }}
    ${({ disabled, theme, variant }) => {
        if (disabled) {
            return `
        opacity: 0.5;

        & > button:disabled {
          background-color: transparent;
          color: ${variant === variants.PRIMARY ? theme.colors.cyan : theme.colors.textSubtle};
        }
    `
        }
        return ''
    }}
  ${space}
`

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  borderRadius,
  ...props
}) => {
  const theme = useTheme();
  return (
    <StyledButtonMenu
      borderRadius={theme.radii.rounded}
      disabled={disabled}
      variant={variant}
      fullWidth={fullWidth}
      {...props}
    >
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant,
          disabled,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
