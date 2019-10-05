import React from 'react';
import { ThemeConsumer } from 'styled-components';
import styled, { css } from 'styled-components';
import { ReactComponent as HackerNewsLogoSVG } from '../assets/hacker-news-logo.svg';
import { ReactComponent as MoonSVG } from '../assets/moon.svg';
import { ReactComponent as SunSVG } from '../assets/sun.svg';

const Nav = styled.nav`
  width: 100%;
  background: ${props => props.theme.navBgColor};
  position: fixed;
`;

const NavContainer = styled.div`
  padding: 0 0.6em;
  width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 4rem;
`;

const SiteLogo = styled(HackerNewsLogoSVG)`
  width: 2rem;
  height: 2rem;
`;

const SiteHeader = styled.h1`
  color: #fff;
  font-size: 1.1rem;
  font-family: 'Open Sans';
  font-weight: 500;
`;

const ThemeIcon = css`
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

export const Header = () => {
  return (
    <ThemeConsumer>
      {({ mode, toggleTheme, ...theme }) => (
        <Nav>
          <NavContainer>
            <SiteLogo />
            <SiteHeader>Hacker News Reader</SiteHeader>
            {mode === 'light' && <MoonIcon onClick={toggleTheme} />}
            {mode === 'dark' && <SunIcon onClick={toggleTheme} />}
          </NavContainer>
        </Nav>
      )}
    </ThemeConsumer>
  );
};

// export default Header;
