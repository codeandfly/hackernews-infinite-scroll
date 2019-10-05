import { useState, useEffect } from 'react';
import { themes } from '../styles/theme';

export const useTheme = (defaultTheme = {...themes['light']}) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const lightTheme = () => ({
    ...themes['light']
  });

  const darkTheme = () => ({
    ...themes['dark']
  });

  const toggleTheme = () => {
    if (theme.mode !== 'dark') {
      setTheme(darkTheme());
    } else {
      setTheme(lightTheme());
    }
  };

  function getInitialTheme() {
    const localTheme = localStorage.getItem('theme');
    return localTheme 
      ? JSON.parse(localTheme)
      : defaultTheme
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return {
    ...theme,
    toggleTheme
  };
};
