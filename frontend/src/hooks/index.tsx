import React from 'react';

import { UserThemeProvider } from './theme';
import { ScreenProvider } from './screen';
import { MenuProvider } from './menu';
import { WaiterProvider } from './waiter';

const AppProvider: React.FC = ({ children }) => {
  return (
    <UserThemeProvider>
      <ScreenProvider>
        <MenuProvider>
          <WaiterProvider>{children}</WaiterProvider>
        </MenuProvider>
      </ScreenProvider>
    </UserThemeProvider>
  );
};

export default AppProvider;
