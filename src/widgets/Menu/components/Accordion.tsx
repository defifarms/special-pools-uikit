import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import {
  LinkLabel,
  LinkStatus as LinkStatusComponent,
  MenuEntry,
} from "./MenuEntry";
import { LinkStatus, PushedProps } from "../types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../../components/Svg";

interface Props extends PushedProps {
  label: string;
  status?: LinkStatus;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  children: ReactNode;
  isActive?: boolean;
  isOpen?: boolean;
  handleClickToggle?: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{
    isOpen: boolean
    isPushed: boolean
    maxHeight: number
}>`
    max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
    transition: max-height 0.3s ease-out;
    overflow: hidden;

    a {
        padding: 0 18px;

        &:hover {
            background: ${({ theme }) => theme.colors.hoverNav};
            color: ${({ theme }) => theme.colors.white};
            border-radius: 8px;
        }
    }
`

const Accordion: React.FC<Props> = ({
  label,
  status,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isActive,
  handleClickToggle,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);
  const onClick = () => {
    setIsOpen(!isOpen)
    handleClickToggle && handleClickToggle()
  }

  return (
    <Container>
      <MenuEntry
        onClick={onClick}
        className={className}
        isActive={isActive}
        role="button"
      >
        {icon}
        <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
        {status && (
          <LinkStatusComponent color={status.color} fontSize="14px">
            {status.text}
          </LinkStatusComponent>
        )}
        {/* {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} */}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
