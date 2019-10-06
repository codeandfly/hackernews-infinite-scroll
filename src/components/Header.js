import React from 'react';
import { ThemeConsumer } from 'styled-components';

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
                <NavListItem>
                  <StyledNavLink
                    to="/best"
                    exact
                    activeStyle={{
                      color: `${theme.navLinkActive}`,
                      fontWeight: '600',
                    }}
                  >
                    Best
                  </StyledNavLink>
                </NavListItem>
                <NavListItem>
                  <StyledNavLink
                    to="/ask"
                    exact
                    activeStyle={{
                      color: `${theme.navLinkActive}`,
                      fontWeight: '600',
                    }}
                  >
                    Ask
                  </StyledNavLink>
                </NavListItem>
                <NavListItem>
                  <StyledNavLink
                    to="/show"
                    exact
                    activeStyle={{
                      color: `${theme.navLinkActive}`,
                      fontWeight: '600',
                    }}
                  >
                    Show
                  </StyledNavLink>
                </NavListItem>
                <NavListItem>
                  <StyledNavLink
                    to="/jobs"
                    exact
                    activeStyle={{
                      color: `${theme.navLinkActive}`,
                      fontWeight: '600',
                    }}
                  >
                    Jobs
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
