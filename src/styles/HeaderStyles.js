import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HackerNewsLogoSVG } from '../assets/hacker-news-logo.svg';
import { ReactComponent as MoonSVG } from '../assets/moon.svg';
import { ReactComponent as SunSVG } from '../assets/sun-2.svg';

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
  margin-right: 5px;
`;

export const SiteHeader = styled.h1`
  color: #fff;
  font-size: 1.1rem;
  font-family: 'Open Sans';
  font-weight: 500;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 30px;
`;

export const NavListItem = styled.li`
  /* display: inline-block; */
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  margin-left: 20px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  padding: 5px 0;

  &:hover {
    /* color: #fff !important; */
  }
`;

export const ThemeIcon = css`
  width: 1.4rem;
  height: 1.4rem;
  margin-left: auto;
  cursor: pointer;
`;

export const MoonIcon = styled(MoonSVG)`
  ${ThemeIcon};
  fill: #46434c;
`;

export const SunIcon = styled(SunSVG)`
  ${ThemeIcon};
  width: 1.6rem;
  height: 1.9rem;
  fill: #f2d600;
  overflow:visible;
`;