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

interface UserThemeContextData {
  theme: AppTheme;
  switchTheme: () => void;
}

interface AppTheme {
  type: string;
  primary01: string;
  primary02: string;
  primary03: string;
  primary04: string;

  secondaryYellow: string;
  secondaryRed: string;
  secondaryRed02: string;
  secondaryWine: string;
  secondaryGreen: string;
  secondaryLightGreen: string;

  black: string;
  white: string;
  background: string;
  gray: string;
}

const UserThemeContext = createContext<UserThemeContextData | null>(null);

export const UserThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(taNaMesaTheme);

  useEffect(() => {
    const themeType = localStorage.getItem('@TaNaMesa:theme');

    if (themeType) {
      setTheme(themeType === 'default' ? taNaMesaTheme : taNaMesaDarkTheme);
    } else {
      localStorage.setItem('@TaNaMesa:theme', 'default');
    }
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

export function useUserTheme(): UserThemeContextData {
  const context = useContext(UserThemeContext);

  if (!context) {
    throw new Error('useUserTheme must be used within an UserThemeProvider');
  }

  return context;
}
