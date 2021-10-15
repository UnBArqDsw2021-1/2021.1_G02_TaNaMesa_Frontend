import api from 'api';

interface Contain {
  id: number;
}

export const deleteContain = async (idContain: number): Promise<void> => {
  const response = await api.delete(`contain/${idContain}`);
};

export const getOneContain = async (idOrder: number): Promise<Contain> => {
  const response = await api.get(`contain?id_order=${idOrder}`);

  return response.data.contains[0];
};
