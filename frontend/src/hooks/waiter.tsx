import React, { createContext, useCallback, useContext, useState } from 'react';

interface WaiterContextData {
  solicitationWaiter: boolean;
  solicitationOrder: boolean;
  handleSolicitationWaiter: (isWaiterSolicited: boolean) => void;
  handleSolicitationOrder: (isOrderSolicited: boolean) => void;
}

const WaiterContext = createContext<WaiterContextData | null>(null);

export const WaiterProvider: React.FC = ({ children }) => {
  const [solicitationWaiter, setSolicitationWaiter] = useState<boolean>(false);
  const [solicitationOrder, setSolicitationOrder] = useState<boolean>(false);

  const handleSolicitationOrder = useCallback((isOrderSolicited: boolean) => {
    setSolicitationOrder(isOrderSolicited);
  }, []);

  const handleSolicitationWaiter = useCallback((isWaiterSolicited: boolean) => {
    setSolicitationWaiter(isWaiterSolicited);
  }, []);

  return (
    <WaiterContext.Provider
      value={{
        solicitationWaiter,
        handleSolicitationWaiter,
        solicitationOrder,
        handleSolicitationOrder,
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
