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
  name: string;
  idClient: number;
}

interface Item {
  category: string;
  createdAt: string;
  description: string;
  discount: number;
  idItem: number;
  image: string;
  name: string;
  notes: string;
  price: number;
  updatedAt: string;
}

interface Order {
  idOrder: number;
  status: ENUM;
  idTable: number;
  client: Client;
  idClient: number;
  data: Date;
  items: Item[];
}
export const createOrder = async (
  idClient: number,
  idTable: number,
): Promise<Order> => {
  const response = await api.post('order', { order: { idClient, idTable } });

  return response.data.order;
};

export const deleteOrder = async (idOrder: number): Promise<void> => {
  const response = await api.delete(`order/${idOrder}`);
};

export const getAllOrders = async (idTable?: number): Promise<Order[]> => {
  const response = await api.get(
    idTable ? `order/?idTable=${idTable}` : 'order',
  );

  return response.data.orders;
};

export const getOrdersByTableId = async (tableId: string): Promise<Order[]> => {
  const response = await api.get(`order?id_table=${tableId}`);

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
