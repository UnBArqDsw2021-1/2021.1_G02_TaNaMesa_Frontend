import api from 'api';

export enum ENUM {
  'na fila',
  'na cozinha',
  'preparando',
  'na mesa',
  'solicitacao pagamento',
  'pagamento realizado',
}

interface Order {
  idOrder: number;
  status: ENUM;
  idTable: number;
  nameClient: string;
  idClient: number;
  data: Date;
}

export const getAllOrders = async (): Promise<Order[]> => {
  const response = await api.get('order');

  return response.data.orders;
};

export const putOneOrder = async (
  idOrder: number,
  status: string,
): Promise<Order[]> => {
  const data = {
    order: {
      status,
    },
  };
  const response = await api.put(`order/${idOrder}`, data);
  return response.data;
};
