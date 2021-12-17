import React, {useState} from "react";
import styled, { useTheme } from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  background-color: #300095;
  border-top: 1px solid #6420F3;
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) =>
    theme.isDark ? theme.colors.textSubtle : "#2C48C1"};
    border-radius: 8px;
  }
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();
  const theme = useTheme();
  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;
  const [isOpen, setIsOpen] = useState(false);
  const handleClickToggle = () => {
    if (isPushed) {
      setIsOpen(
        !isOpen
      );
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon color={theme.colors.linkText} width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass
          ? entry.calloutClass
          : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex(
            (item) => item.href === location.pathname
          );
          const initialOpenState =
            entry.initialOpenState === true
              ? entry.initialOpenState
              : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              status={entry.status}
              initialOpenState={initialOpenState}
              className={calloutClass}
              handleClickToggle={handleClickToggle}
            >
              {isPushed && 
                entry.items.map((item) => (
                  <MenuEntry
                    key={item.href}
                    secondary
                    isActive={(item.href === location.pathname)}
                    onClick={handleClick}
                  >
                    <MenuLink href={item.href} target={item.target}>
                      <LinkLabel isPushed={isPushed}>{item.label}</LinkLabel>
                      {item.status && (
                        <LinkStatus color={item.status.color} fontSize="12px">
                          {item.status.text}
                        </LinkStatus>
                      )}
                    </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry
            key={entry.label}
            isActive={entry.href === location.pathname}
            className={calloutClass}
          >
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              {entry.status && (
                <LinkStatus color={entry.status.color} fontSize="12px">
                  {entry.status.text}
                </LinkStatus>
              )}
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
