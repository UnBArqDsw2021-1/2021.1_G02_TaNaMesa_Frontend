import React from 'react';

import { UserThemeProvider } from './theme';
import { UserProvider } from './user';
import { ScreenProvider } from './screen';
import { MenuProvider } from './menu';
import { WaiterProvider } from './waiter';

const AppProvider: React.FC = ({ children }) => {
  return (
    <UserThemeProvider>
      <UserProvider>
        <ScreenProvider>
          <MenuProvider>
            <WaiterProvider>{children}</WaiterProvider>
          </MenuProvider>
        </ScreenProvider>
      </UserProvider>
    </UserThemeProvider>
  );
};

export default AppProvider;
