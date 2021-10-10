import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

import api from 'api';

interface UserContextData {
  table: string;
  token: string;
  changeToken: (newJWToken: string, newTable: string) => void;
}

const UserContext = createContext<UserContextData | null>(null);

export const UserProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState('');
  const [table, setTable] = useState('');

  useEffect(() => {
    const jwtToken = localStorage.getItem('@TaNaMesa:token');
    const actualTable = localStorage.getItem('@TaNaMesa:table');

    if (jwtToken) {
      setToken(jwtToken.split(' ')[1]);
      setTable(actualTable || '0');
      api.defaults.headers.common.Authorization = `${jwtToken}`;
    }
  }, []);

  const changeToken = useCallback((newJWToken, newTable) => {
    localStorage.setItem('@TaNaMesa:token', `Bearer ${newJWToken}`);
    setToken(newJWToken);
    setTable(newTable);
  }, []);

  return (
    <UserContext.Provider value={{ token, table, changeToken }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserThemeProvider');
  }

  return context;
}
