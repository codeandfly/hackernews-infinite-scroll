import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';

import { StoriesContainer } from './containers/StoriesContainer';
import { Header } from './components/Header';
import { useTheme } from './hooks/useTheme';

export const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <StoriesContainer />
      </>
    </ThemeProvider>
  );
};
