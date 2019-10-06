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
          <Switch>
            <Route exact path='/' render={() => <StoriesContainer type='top' />} />
            <Route exact path='/new' render={() => <StoriesContainer type='new' />} />
            <Route exact path='/best' render={() => <StoriesContainer type='best' />} />
            <Route exact path='/ask' render={() => <StoriesContainer type='ask' />} />
            <Route exact path='/show' render={() => <StoriesContainer type='show' />} />
            <Route exact path='/jobs' render={() => <StoriesContainer type='job' />} />
          </Switch>
      </ThemeProvider>
    </Router>
  );
};
