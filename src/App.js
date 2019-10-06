import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';

import { StoriesContainer } from './containers/StoriesContainer';
import { Header } from './components/Header';
import { useTheme } from './hooks/useTheme';

export const App = () => {
  const theme = useTheme();

  return (
    <Router>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <StoriesContainer />
          <Switch>
            <Route exact path='/' render={() => <StoriesContainer />} />
          </Switch>
      </ThemeProvider>
    </Router>
  );
};
