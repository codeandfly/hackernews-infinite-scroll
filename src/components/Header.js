import React from 'react';
import { ThemeConsumer } from 'styled-components';
import {
  Nav,
  NavContainer,
  SiteHeader,
  SiteLogo,
  MoonIcon,
  SunIcon
} from '../styles/HeaderStyles';

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
