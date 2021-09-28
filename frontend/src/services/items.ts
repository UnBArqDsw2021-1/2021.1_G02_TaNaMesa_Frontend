import api from 'api';

export interface Item {
  category: string;
  createdAt: string;
  description: string;
  discount: number;
  idItem: number;
  name: string;
  notes: string;
  price: number;
  updatedAt: string;
}

export const getAllItems = async (): Promise<Item[]> => {
  const response = await api.get('item');

  return response.data.items;
};
