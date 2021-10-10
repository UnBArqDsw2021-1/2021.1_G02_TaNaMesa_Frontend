import api from 'api';

export enum ENUM {
  'na fila',
  'na cozinha',
  'preparando',
  'na mesa',
  'solicitacao pagamento',
  'pagamento realizado',
}

interface Order {
  idOrder: number;
  status: ENUM;
  idTable: number;
  idClient: number;
  data: Date;
}

export const getAllOrders = async (): Promise<Order[]> => {
  const response = await api.get('order');

  return response.data.orders;
};

// export const putOneOrder = async (
//   idTable: number,
//   needHelp: boolean,
// ): Promise<Order[]> => {
//   const data = {
//     table: {
//       needHelp,
//     },
//   };
//   const response = await api.put(`table/${idTable}`, data);

//   return response.data;
// };
