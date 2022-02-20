import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Box/Flex";
import {
  HamburgerIcon,
  LogoIcon as LogoWithText,
  LogoMobileIcon,
  ChristmasIcon
} from "../icons";
import LogoIcon from "../../../components/Svg/Icons/Logo";
import MenuButton from "./MenuButton";
import {
  MENU_HEIGHT,
  SIDEBAR_WIDTH_REDUCED,
  SIDEBAR_WIDTH_FULL,
} from "../config";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  isMobile: boolean;
  isChristmas?: boolean;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const Text = styled.div`

`

const StyledWrapper = styled(Flex) <{ isPushed: boolean }>`
  height: ${MENU_HEIGHT}px;
  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) =>
    `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    background-color: #300095;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    margin-left: 24px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const MenuButtonMobile = styled(MenuButton)`
  height: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

const Logo: React.FC<Props> = ({ isChristmas, isPushed, togglePush, isDark, href, isMobile }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = <>{!isPushed ? <LogoMobileIcon isDark={isDark} /> : <LogoWithText className='desktop-icon' isDark={isDark} />}</>

  return (
    <StyledWrapper isPushed={isPushed}>
      <MenuButtonMobile
        aria-label="Toggle menu"
        onClick={togglePush}
        mr="24px"
        ml="20px"
        className="hidden-desktop"
      >
        <HamburgerIcon width="28px" color={isPushed ? '#FFB230' : '#0F0B5F'} />
      </MenuButtonMobile>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="DeFiFarms home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="DeFiFarms home page">
          {innerLogo}
        </StyledLink>
      )}
    </StyledWrapper>
  );
};

export default React.memo(
  Logo,
  (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark
);
