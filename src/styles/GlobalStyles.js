import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap');
    margin: 0;
    padding: 0;
    line-height: 1;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    font-family: 'Open Sans';
    font-size: 16px;
  }

  a {
    color: ${props => props.theme.color};
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;
