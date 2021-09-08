import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

import { ThemeProvider } from 'styled-components';
import taNaMesaTheme from '../styles/taNaMesaTheme';
import taNaMesaDarkTheme from '../styles/taNaMesaDarkTheme';

interface IUserThemeContextData {
  theme: IAppTheme;
  switchTheme: () => void;
}

interface IAppTheme {
  type: string;
  primary01: string;
  primary02: string;
  primary03: string;
  primary04: string;

  secondaryYellow: string;
  secondaryRed: string;
  secondaryWine: string;
  secondaryGreen: string;
  secondaryLightGreen: string;

  black: string;
  white: string;
}

const UserThemeContext = createContext<IUserThemeContextData | null>(null);

export const UserThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(taNaMesaTheme);

  useEffect(() => {
    const themeType = localStorage.getItem('@TaNaMesa:theme');

    setTheme(themeType === 'default' ? taNaMesaTheme : taNaMesaDarkTheme);
  }, []);

  const switchTheme = useCallback(() => {
    localStorage.setItem(
      '@TaNaMesa:theme',
      theme.type === 'default' ? 'dark' : 'default',
    );
    setTheme(theme === taNaMesaTheme ? taNaMesaDarkTheme : taNaMesaTheme);
  }, [theme]);

  return (
    <UserThemeContext.Provider value={{ theme, switchTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UserThemeContext.Provider>
  );
};

export function useUserTheme(): IUserThemeContextData {
  const context = useContext(UserThemeContext);

  if (!context) {
    throw new Error('useUserTheme must be used within an UserThemeProvider');
  }

  return context;
}
