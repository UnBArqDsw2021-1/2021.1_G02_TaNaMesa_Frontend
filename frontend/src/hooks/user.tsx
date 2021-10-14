import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import jwt from 'jwt-decode';

import api from 'api';

interface UserContextData {
  table: string;
  token: string;
  occupation: string;
  isLoginVisible: boolean;
  setIsLoginVisible: (isVisible: boolean) => void;
  changeToken: (newJWToken: string, newTable: string) => void;
  logoutUser: () => void;
}

interface TokenPayload {
  sub: string;
  exp: number;
}

const UserContext = createContext<UserContextData | null>(null);

export const UserProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState('');
  const [occupation, setOccupation] = useState('');
  const [table, setTable] = useState('');

  const [isLoginVisible, setIsLoginVisible] = useState(true);

  useEffect(() => {
    const jwtToken = localStorage.getItem('@TaNaMesa:token');
    const actualTable = localStorage.getItem('@TaNaMesa:table');

    if (jwtToken) {
      const user = jwt(jwtToken.split(' ')[1]) as TokenPayload;
      console.log({ user });
      if (Math.floor(new Date().getTime() / 1000) <= user.exp) {
        setOccupation(user.sub);
        setTable(actualTable || '0');

        api.defaults.headers.common.Authorization = `${jwtToken}`;
        setToken(jwtToken.split(' ')[1]);
      }
    }
  }, []);

  const changeToken = useCallback((newJWToken, newTable) => {
    localStorage.setItem('@TaNaMesa:token', `Bearer ${newJWToken}`);

    const user = jwt(newJWToken) as TokenPayload;
    api.defaults.headers.common.Authorization = `Bearer ${newJWToken}`;

    setOccupation(user.sub);
    setTable(newTable);
    setToken(newJWToken);
  }, []);

  const logoutUser = useCallback((): void => {
    setToken('');
    setOccupation('');
    setTable('');
    setIsLoginVisible(true);

    localStorage.removeItem('@TaNaMesa:token');
  }, []);

  return (
    <UserContext.Provider
      value={{
        token,
        table,
        changeToken,
        occupation,
        isLoginVisible,
        setIsLoginVisible,
        logoutUser,
      }}
    >
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
