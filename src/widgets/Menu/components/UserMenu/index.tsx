import React, { useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";
import Flex from "../../../../components/Box/Flex";
import isTouchDevice from "../../../../util/isTouchDevice";
import { UserMenuProps, variants } from "./types";
import MenuIcon from "./MenuIcon";
import { UserMenuItem } from "./styles";

const IconWrapper = styled(Flex)`
  cursor: pointer;
  height: 40px;
  &:hover {
    opacity: 0.65;
  }
`

const StyledUserMenu = styled(Flex)`
  align-items: center;
  background-color: #3230B2;
  border-radius: 107px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  height: 50px;
  width: unset;
  margin: 0 24px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 188px;
  }
`;

const LabelText = styled.div`
  color: #fff;
  display: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
    margin-left: 8px;
    margin-right: 4px;
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.card.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  padding-bottom: 4px;
  padding-top: 4px;
  pointer-events: auto;
  width: 280px;
  visibility: visible;
  z-index: 1001;

  ${({ isOpen }) =>
    !isOpen &&
    `
    pointer-events: none;
    visibility: hidden;
  `}

  ${UserMenuItem}:first-child {
    border-radius: 8px 8px 0 0;
  }

  ${UserMenuItem}:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

const UserMenu: React.FC<UserMenuProps> = ({
  account,
  text,
  avatarSrc,
  variant = variants.DEFAULT,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);
  const hideTimeout = useRef<number>();
  const isHoveringOverTooltip = useRef(false);
  const accountEllipsis = account
    ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}`
    : null;
  const { styles, attributes } = usePopper(targetRef, tooltipRef, {
    placement: "bottom-end",
    modifiers: [{ name: "offset", options: { offset: [0, 12] } }],
  });

  /**
   * See "useTooltip"
   */
  useEffect(() => {
    const showTooltip = (evt: MouseEvent | TouchEvent) => {
      setIsOpen(true);

      if (evt.target === targetRef) {
        clearTimeout(hideTimeout.current);
      }

      if (evt.target === tooltipRef) {
        isHoveringOverTooltip.current = true;
      }
    };

    const hideTooltip = (evt: MouseEvent | TouchEvent) => {
      if (hideTimeout.current) {
        window.clearTimeout(hideTimeout.current);
      }

      if (evt.target === tooltipRef) {
        isHoveringOverTooltip.current = false;
      }

      if (!isHoveringOverTooltip.current) {
        hideTimeout.current = window.setTimeout(() => {
          if (!isHoveringOverTooltip.current) {
            setIsOpen(false);
          }
        }, 150);
      }
    };

    const toggleTouch = (evt: TouchEvent) => {
      const target = evt.target as Node;
      const isTouchingTargetRef = target && targetRef?.contains(target);
      const isTouchingTooltipRef = target && tooltipRef?.contains(target);

      if (isTouchingTargetRef) {
        setIsOpen((prevOpen) => !prevOpen);
      } else if (isTouchingTooltipRef) {
        // Don't close the menu immediately so it catches the event
        setTimeout(() => {
          setIsOpen(false);
        }, 100);
      } else {
        setIsOpen(false);
      }
    };

    if (isTouchDevice()) {
      document.addEventListener("touchstart", toggleTouch);
    } else {
      targetRef?.addEventListener("mouseenter", showTooltip);
      targetRef?.addEventListener("mouseleave", hideTooltip);
      tooltipRef?.addEventListener("mouseenter", showTooltip);
      tooltipRef?.addEventListener("mouseleave", hideTooltip);
    }

    return () => {
      if (isTouchDevice()) {
        document.removeEventListener("touchstart", toggleTouch);
      } else {
        targetRef?.removeEventListener("mouseenter", showTooltip);
        targetRef?.removeEventListener("mouseleave", hideTooltip);
        tooltipRef?.removeEventListener("mouseenter", showTooltip);
        tooltipRef?.removeEventListener("mouseleave", hideTooltip);
      }
    };
  }, [targetRef, tooltipRef, hideTimeout, isHoveringOverTooltip, setIsOpen]);

  return (
    <Flex alignItems="center">
      <StyledUserMenu {...props}>
        <LabelText color="#fff" title={text || account}>{text || accountEllipsis}</LabelText>
      </StyledUserMenu>
      <Menu
        style={styles.popper}
        ref={setTooltipRef}
        {...attributes.popper}
        isOpen={isOpen}
      >
        {children}
      </Menu>
      <IconWrapper ref={setTargetRef}>
        <MenuIcon avatarSrc={avatarSrc} variant={variant} />
      </IconWrapper>
    </Flex>
  );
};

export default UserMenu;
