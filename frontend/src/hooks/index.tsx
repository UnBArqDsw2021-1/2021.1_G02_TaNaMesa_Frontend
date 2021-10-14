import React from 'react';

import { UserThemeProvider } from './theme';
import { UserProvider } from './user';
import { ScreenProvider } from './screen';
import { MenuProvider } from './menu';

const AppProvider: React.FC = ({ children }) => {
  return (
    <UserThemeProvider>
      <UserProvider>
        <ScreenProvider>
          <MenuProvider>{children}</MenuProvider>
        </ScreenProvider>
      </UserProvider>
    </UserThemeProvider>
  );
};

export default AppProvider;
