import React from 'react';

import { UserThemeProvider } from './theme';
import { ScreenProvider } from './screen';
import { MenuProvider } from './menu';

const AppProvider: React.FC = ({ children }) => {
  return (
    <UserThemeProvider>
      <ScreenProvider>
        <MenuProvider>{children}</MenuProvider>
      </ScreenProvider>
    </UserThemeProvider>
  );
};

export default AppProvider;
