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

interface GetContain {
  id: number;
  idOrder: number;
  idItem: number;
  quantity: number;
  observation: string;
  item: Item;
}

interface CreateContain {
  idOrder: number;
  idItem: number;
  quantity: number;
  observation: string;
}

export const createContain = async (contain: CreateContain): Promise<void> => {
  const data = { contain };
  const response = await api.post('/contain', data);

  return response.data;
};

export const getAllContains = async (): Promise<GetContain[]> => {
  const response = await api.get(`/contain`);

  return response.data.contains;
};

export const deleteContain = async (idContain: number): Promise<void> => {
  const response = await api.delete(`contain/${idContain}`);
};

export const getOneContain = async (idOrder: number): Promise<GetContain> => {
  const response = await api.get(`contain?id_order=${idOrder}`);

  return response.data.contains[0];
};
