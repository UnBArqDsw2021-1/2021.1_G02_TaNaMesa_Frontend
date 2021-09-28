// const [openMenu, setOpenMenu] = useState(false);
import React, { createContext, useCallback, useContext, useState } from 'react';

interface ScreenContextData {
  openMenu: boolean;
  switchScreenSize: () => void;
}

const ScreenContext = createContext<ScreenContextData | null>(null);

export const ScreenProvider: React.FC = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const switchScreenSize = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  return (
    <ScreenContext.Provider value={{ openMenu, switchScreenSize }}>
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
