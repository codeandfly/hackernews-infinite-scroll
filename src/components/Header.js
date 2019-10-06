import React from 'react';
import styled, { css, ThemeConsumer } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import {
  Nav,
  NavContainer,
  SiteHeader,
  SiteLogo,
  MoonIcon,
  SunIcon,
  StyledNavLink,
  NavList,
  NavListItem
  // ActiveStyle
} from '../styles/HeaderStyles';

const activeStyle = {};

export const Header = () => {
  return (
    <ThemeConsumer>
      {({ mode, toggleTheme, ...theme }) => {
        return (
          <Nav>
            <NavContainer>
              <SiteLogo />
              <SiteHeader>Hacker News Reader</SiteHeader>
              <NavList>
                <NavListItem>
                  <StyledNavLink
                    to="/"
                    exact
                    activeStyle={{
                      color: `${theme.navLinkActive}`,
                      fontWeight: '600',
                    }}
                  >
                    Top
                  </StyledNavLink>
                </NavListItem>
                <NavListItem>
                  <StyledNavLink
                    to="/new"
                    exact
                    activeStyle={{
                      color: `${theme.navLinkActive}`,
                      fontWeight: '600',
                    }}
                  >
                    New
                  </StyledNavLink>
                </NavListItem>
              </NavList>
              {mode === 'light' && <MoonIcon onClick={toggleTheme} />}
              {mode === 'dark' && <SunIcon onClick={toggleTheme} />}
            </NavContainer>
          </Nav>
        );
      }}
    </ThemeConsumer>
  );
};

// export default Header;
