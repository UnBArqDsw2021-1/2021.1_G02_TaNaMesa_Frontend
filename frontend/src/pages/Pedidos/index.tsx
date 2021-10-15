/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import Board, { moveCard } from '@asseinfo/react-kanban';

import NavBar from 'components/NavBar';
import PedidosModal from 'components/Modal/PedidosModal';

import { getAllOrders, putOneOrder, Order, ENUM } from 'services/orders';

import { Container, Status } from './styles';

interface Board {
  columns: Array<Columns>;
}

interface Columns {
  id: number;
  title: string;
  cards: Order[];
}

const initialBoard: Board = {
  columns: [
    {
      id: 1,
      title: 'Em aberto',
      cards: [],
    },
    {
      id: 2,
      title: 'Em produção',
      cards: [],
    },
    {
      id: 3,
      title: 'Concluídos',
      cards: [],
    },
  ],
};

const initialOrder: Order = {
  idOrder: 1001,
  status: 'preparando',
  idClient: 1,
  client: {
    idClient: 1,
    name: 'sergio',
  },
  idTable: 1,
  table: {
    idTable: 1,
    needHelp: false,
  },
  items: [],
  data: '2021-10-13T23:25:31.681Z',
};

const Pedidos: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order>(initialOrder);
  const [showOrder, setShowOrder] = useState<boolean>(false);

  const [board, setBoard] = useState(initialBoard);

  const handleCardMove = (_card: any, source: any, destination: any): void => {
    console.log(_card);
    const updatedBoard = moveCard(board, source, destination);
    setBoard(updatedBoard);
  };

  const selectOrder = (order: Order): void => {
    setSelectedOrder(order);
    setShowOrder(true);
  };

  const filterOrders = (newOrders: Order[]): void => {
    const filteredOrders: Order[] = [];

    newOrders.forEach((order: Order) => {
      if (
        order.status === ENUM[1] ||
        order.status === ENUM[2] ||
        order.status === ENUM[3]
      ) {
        filteredOrders.push({ ...order, id: order.idOrder });
      }
    });

    console.log('filtered', filteredOrders);
    setOrders(filteredOrders);

    const newColumns = board.columns.slice();
    newColumns[0].cards = filteredOrders;

    setBoard({ columns: newColumns });
  };

  useEffect(() => {
    setOrders([]);

    getAllOrders()
      .then(response => {
        filterOrders(response);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <NavBar left="Voltar" center="Mesa" tableTitle="Pedidos" />
      <Container>
        <Board
          disableColumnDrag
          onCardDragEnd={handleCardMove}
          renderCard={(order: Order, { dragging }: any) => (
            <div
              className={`order ${dragging ? 'dragging' : ''}`}
              key={`o${order.idOrder}`}
              role="button"
              tabIndex={0}
              onClick={() => selectOrder(order)}
            >
              <div className="status">
                <h4>Pedido #{order.idOrder}</h4>
                <Status color="#2BB426" />
              </div>
              <div className="content">
                <h5>Mesa {order.idTable}</h5>
              </div>
            </div>
          )}
        >
          {board}
        </Board>
      </Container>

      <PedidosModal
        visible={showOrder}
        order={selectedOrder}
        onClose={e => setShowOrder(e.target.value)}
      />
    </>
  );
};

export default Pedidos;
