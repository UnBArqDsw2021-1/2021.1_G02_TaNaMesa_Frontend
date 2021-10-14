import api from 'api';

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

export const getAllItems = async (category: string): Promise<Item[]> => {
  const response = await api.get(`item?category=${category}`);

  return response.data.items;
};

export const getComanda = async (name: string): Promise<string[]> => {
  const response = await api.get(`string?name=${name}`);

  return response.data.items;
};

export const postComanda = async (name: string): Promise<string[]> => {
  const response = await api.post(`string?name=${name}`);

  return response.data.items;
};

export const deleteComanda = async (name: string): Promise<string[]> => {
  const response = await api.delete(`string?name=${name}`);

  return response.data.items;
};
