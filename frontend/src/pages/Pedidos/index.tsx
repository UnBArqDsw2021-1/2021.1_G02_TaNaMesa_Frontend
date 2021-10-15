/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import Board, { moveCard } from '@asseinfo/react-kanban';

import NavBar from 'components/NavBar';
import PedidosModal from 'components/Modal/PedidosModal';

import { getAllOrders, putOneOrder, Order, ENUM } from 'services/orders';

import { Container } from './styles';
import { Status, getStatusColor } from './statusConsts';

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

  const getAndFilterOrders = (): void => {
    const column1: Order[] = [];
    const column2: Order[] = [];
    const column3: Order[] = [];

    getAllOrders()
      .then(newOrders => {
        newOrders.forEach((order: Order) => {
          if (order.status === ENUM[1]) {
            column1.push({ ...order, id: order.idOrder });
          } else if (order.status === ENUM[2]) {
            column2.push({ ...order, id: order.idOrder });
          } else if (order.status === ENUM[3]) {
            column3.push({ ...order, id: order.idOrder });
          }
        });

        const newColumns = board.columns.slice();
        newColumns[0].cards = column1;
        newColumns[1].cards = column2;
        newColumns[2].cards = column3;

        setBoard({ columns: newColumns });
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleOrderMove = (
    order: Order,
    source: any,
    destination: any,
  ): void => {
    const updatedBoard = moveCard(board, source, destination);
    setBoard(updatedBoard);

    putOneOrder(order.idOrder, ENUM[destination.toColumnId])
      .then(() => {
        getAndFilterOrders();
      })
      .catch(() => {
        window.location.reload();
      });
  };

  const selectOrder = (order: Order): void => {
    setSelectedOrder(order);
    setShowOrder(true);
  };

  useEffect(() => {
    getAndFilterOrders();
  }, []);

  return (
    <>
      <NavBar left="Voltar" center="Mesa" tableTitle="Pedidos" />
      <Container>
        <Board
          disableColumnDrag
          onCardDragEnd={handleOrderMove}
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
                <Status color={getStatusColor(order.status)} />
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
