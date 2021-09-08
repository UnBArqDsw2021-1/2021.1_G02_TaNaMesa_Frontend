import React from 'react';

import { UserThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => {
  return <UserThemeProvider>{children}</UserThemeProvider>;
};

export default AppProvider;
