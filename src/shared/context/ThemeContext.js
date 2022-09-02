import { createContext, useContext } from 'react';
import { theme } from '../Theme';

const ThemeContext = createContext({});
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
