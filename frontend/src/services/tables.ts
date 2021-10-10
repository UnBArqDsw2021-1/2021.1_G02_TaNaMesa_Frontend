import api from 'api';

interface Table {
  idTable: number;
  cpfWaiter: string;
  needHelp: boolean;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export const getAllTables = async (): Promise<Table[]> => {
  const response = await api.get('table');

  return response.data.tables;
};

export const putOneTable = async (
  idTable: number,
  needHelp: boolean,
): Promise<Table[]> => {
  const data = {
    table: {
      needHelp,
    },
  };
  const response = await api.put(`table/${idTable}`, data);

  return response.data;
};
