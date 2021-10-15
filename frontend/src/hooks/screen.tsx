import React, { createContext, useCallback, useContext, useState } from 'react';

interface ScreenContextData {
  openMenu: boolean;
  switchScreenSize: () => void;
  switchActualScreen: (newScreen: string) => void;
  actualScreen: string;
}

const ScreenContext = createContext<ScreenContextData | null>(null);

export const ScreenProvider: React.FC = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [actualScreen, setActualScreen] = useState('home');

  const switchScreenSize = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  const switchActualScreen = useCallback((newScreen: string) => {
    setActualScreen(newScreen);
  }, []);

  return (
    <ScreenContext.Provider
      value={{ openMenu, switchScreenSize, actualScreen, switchActualScreen }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export function useScreenSize(): ScreenContextData {
  const context = useContext(ScreenContext);

  if (!context) {
    throw new Error('useUserTheme must be used within an UserThemeProvider');
  }

  return context;
}
