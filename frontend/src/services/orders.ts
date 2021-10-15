/* eslint-disable @typescript-eslint/no-explicit-any */
import api from 'api';

import { Table } from './tables';
import { Item } from './items';

export enum ENUM {
  'na fila',
  'na cozinha',
  'preparando',
  'na mesa',
  'solicitacao pagamento',
  'pagamento realizado',
}

export interface Order {
  id?: number;
  idOrder: number;
  status: string;
  idTable: number;
  table: Table;
  idClient: number;
  client: Record<string, any>;
  items: Array<Item>;
  data: string;
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
