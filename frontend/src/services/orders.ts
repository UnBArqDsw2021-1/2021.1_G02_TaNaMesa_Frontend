import api from 'api';

export enum ENUM {
  'na fila',
  'na cozinha',
  'preparando',
  'na mesa',
  'solicitacao pagamento',
  'pagamento realizado',
}

interface Client {
  idClient: number;
  name: string;
}

interface Order {
  idOrder: number;
  status: ENUM;
  idTable: number;
  client: Client;
  data: Date;
}

export const getAllOrders = async (idTable?: number): Promise<Order[]> => {
  const response = await api.get(
    idTable ? `order/?idTable=${idTable}` : 'order',
  );

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
