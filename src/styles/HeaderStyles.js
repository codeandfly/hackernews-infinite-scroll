import styled, { css } from 'styled-components';
import { ReactComponent as HackerNewsLogoSVG } from '../assets/hacker-news-logo.svg';
import { ReactComponent as MoonSVG } from '../assets/moon.svg';
import { ReactComponent as SunSVG } from '../assets/sun.svg';

export const Nav = styled.nav`
  width: 100%;
  background: ${props => props.theme.navBgColor};
  position: fixed;
`;

export const NavContainer = styled.div`
  padding: 0 0.6em;
  width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 4rem;
`;

export const SiteLogo = styled(HackerNewsLogoSVG)`
  width: 2rem;
  height: 2rem;
`;

export const SiteHeader = styled.h1`
  color: #fff;
  font-size: 1.1rem;
  font-family: 'Open Sans';
  font-weight: 500;
`;

export const ThemeIcon = css`
  width: 1.4rem;
  height: 1.4rem;
  margin-left: auto;
  cursor: pointer;
`;

export const MoonIcon = styled(MoonSVG)`
  ${ThemeIcon};
  fill: #7236f7;
`;

export const SunIcon = styled(SunSVG)`
  ${ThemeIcon};
  fill: #f2d600;
`;