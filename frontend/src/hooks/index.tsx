import React from 'react';

import { UserThemeProvider } from './theme';
import { ScreenProvider } from './screen';

const AppProvider: React.FC = ({ children }) => {
  return (
    <UserThemeProvider>
      <ScreenProvider>{children}</ScreenProvider>
    </UserThemeProvider>
  );
};

export default AppProvider;
