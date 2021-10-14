import React, { createContext, useCallback, useContext, useState } from 'react';

interface ModalContextData {
  solicitationWaiter: boolean;
  solicitationOrder: boolean;
  handleSolicitationWaiter: (isWaiterSolicited: boolean) => void;
  handleSolicitationOrder: (isOrderSolicited: boolean) => void;
}

const ModalContext = createContext<ModalContextData | null>(null);

export const ModalProvider: React.FC = ({ children }) => {
  const [solicitationWaiter, setSolicitationWaiter] = useState<boolean>(false);
  const [solicitationOrder, setSolicitationOrder] = useState<boolean>(false);

  const handleSolicitationOrder = useCallback((isOrderSolicited: boolean) => {
    setSolicitationOrder(isOrderSolicited);
  }, []);

  const handleSolicitationWaiter = useCallback((isWaiterSolicited: boolean) => {
    setSolicitationWaiter(isWaiterSolicited);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        solicitationWaiter,
        handleSolicitationWaiter,
        solicitationOrder,
        handleSolicitationOrder,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useWaiter must be used within an UserWaiterProvider');
  }

  return context;
}
