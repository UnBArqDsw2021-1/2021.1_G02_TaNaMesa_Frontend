import api from 'api';

interface Contain {
  idOrder: number;
  idItem: number;
  quantity: number;
  observation: string;
}

export const createContain = async (contain: Contain): Promise<Contain[]> => {
  const data = { contain };
  const response = await api.post('/contain', data);

  return response.data;
};
