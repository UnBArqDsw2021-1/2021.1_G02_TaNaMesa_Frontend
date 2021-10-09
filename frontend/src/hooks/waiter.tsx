import React, { createContext, useCallback, useContext, useState } from 'react';

interface WaiterContextData {
  solicitationWaiter: boolean;
  handleSolicitationWaiter: (isWaiterSolicited: boolean) => void;
}

const WaiterContext = createContext<WaiterContextData | null>(null);

export const WaiterProvider: React.FC = ({ children }) => {
  const [solicitationWaiter, setsolicitationWaiter] = useState<boolean>(false);

  const handleSolicitationWaiter = useCallback((isWaiterSolicited: boolean) => {
    setsolicitationWaiter(isWaiterSolicited);
  }, []);

  return (
    <WaiterContext.Provider
      value={{
        solicitationWaiter,
        handleSolicitationWaiter,
      }}
    >
      {children}
    </WaiterContext.Provider>
  );
};

export function useWaiter(): WaiterContextData {
  const context = useContext(WaiterContext);

  if (!context) {
    throw new Error('useWaiter must be used within an UserWaiterProvider');
  }

  return context;
}
