import React from 'react';

import { UserThemeProvider } from './theme';
import { UserProvider } from './user';
import { ScreenProvider } from './screen';
import { MenuProvider } from './menu';
import { ModalProvider } from './modal';

const AppProvider: React.FC = ({ children }) => {
  return (
    <UserThemeProvider>
      <UserProvider>
        <ScreenProvider>
          <MenuProvider>
            <ModalProvider>{children}</ModalProvider>
          </MenuProvider>
        </ScreenProvider>
      </UserProvider>
    </UserThemeProvider>
  );
};

export default AppProvider;
