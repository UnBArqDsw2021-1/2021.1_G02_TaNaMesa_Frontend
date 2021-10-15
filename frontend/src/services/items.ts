import api from 'api';

export interface Item {
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

export const getAllItems = async (category: string): Promise<Item[]> => {
  const response = await api.get(`item?category=${category}`);

  return response.data.items;
};
