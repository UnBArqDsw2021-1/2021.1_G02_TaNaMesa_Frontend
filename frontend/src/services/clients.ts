import api from 'api';

interface Client {
  name: string;
  idClient: number;
}

export const createClient = async (name: string): Promise<Client> => {
  const response = await api.post('client', { client: { name } });

  return response.data.client;
};

export const deleteClient = async (idClient: number): Promise<void> => {
  const response = await api.delete(`client/${idClient}`);
};
