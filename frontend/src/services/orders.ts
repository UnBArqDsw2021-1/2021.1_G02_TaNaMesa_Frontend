import api from 'api';

interface Order {
  idOrder: number;
  status: string;
  idTable: number;
  idClient: number;
}

export const getAllOrders = async (idTable?: number): Promise<Order[]> => {
  const response = await api.get(`order/?idTable=${idTable || ''}`);

  return response.data.orders;
};
