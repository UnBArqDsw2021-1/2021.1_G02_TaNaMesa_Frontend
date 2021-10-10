/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import Board, { moveCard } from '@asseinfo/react-kanban';

import NavBar from 'components/NavBar';
import PedidosModal from 'components/Modal/PedidosModal';

import { Container, Status } from './styles';

interface Mesa {
  id: number;
  comandas: Array<Comanda>;
}

interface Comanda {
  id: number;
  pessoa: Client;
  itens: Array<Item>;
}

interface Client {
  name: string;
  totalPrice: number;
}

interface Item {
  id: number;
  quantity: number;
  name: string;
  price: number;
  obs?: string;
}

// eslint-disable-next-line no-underscore-dangle
const mesas_ = [
  {
    id: 1,
    comandas: [
      {
        id: 1,
        pessoa: { name: 'Ítalo', totalPrice: 21.0 },
        itens: [
          { id: 0, quantity: 2, name: 'Petit', price: 21.0, obs: 'Obs.' },
          { id: 1, quantity: 1, name: 'Creme', price: 12.0, obs: '' },
        ],
      },
      {
        id: 2,
        pessoa: { name: 'Tiago', totalPrice: 12.0 },
        itens: [{ id: 2, quantity: 3, name: 'Creme', price: 12.0, obs: '' }],
      },
    ],
  },
  {
    id: 2,
    comandas: [
      {
        id: 3,
        pessoa: { name: 'Tiago', totalPrice: 12.0 },
        itens: [{ id: 3, quantity: 3, name: 'Creme', price: 12.0, obs: '' }],
      },
    ],
  },
];

const board = {
  columns: [
    {
      id: 1,
      title: 'Em aberto',
      cards: [mesas_[0], mesas_[1]],
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

const Pedidos: React.FC = () => {
  const [mesas, setMesas] = useState<Mesa[]>(mesas_);
  const [mesaSelected, setMesaSelected] = useState<Mesa>({
    id: 0,
    comandas: [],
  });

  const [showMesa, setShowMesa] = useState<boolean>(false);

  const [controlledBoard, setBoard] = useState(board);

  const handleCardMove = (_card: any, source: any, destination: any): void => {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  };

  const selectMesa = (mesa: Mesa): void => {
    setMesaSelected(mesa);
    setShowMesa(true);
  };

  useEffect(() => {
    setMesas(mesas_);
  }, []);

  return (
    <>
      <NavBar left="Voltar" center="Mesa" tableTitle="Pedidos" />
      <Container>
        <Board
          disableColumnDrag
          onCardDragEnd={handleCardMove}
          renderCard={(mesa: any, { dragging }: any) => (
            <div
              className={`mesa ${dragging ? 'dragging' : ''}`}
              key={mesa.id}
              role="button"
              tabIndex={0}
              onClick={() => selectMesa(mesa)}
            >
              <div className="status">
                <h4>Mesa {mesa.id}</h4>
                <Status color="#2BB426" />
              </div>
              <div className="content">
                <h5>
                  {mesa.comandas.length === 1
                    ? `1 Comanda`
                    : `${mesa.comandas.length} Comandas`}
                </h5>
              </div>
            </div>
          )}
        >
          {controlledBoard}
        </Board>
      </Container>

      <PedidosModal
        visible={showMesa}
        table={mesaSelected}
        onClose={e => setShowMesa(e.target.value)}
      />
    </>
  );
};

export default Pedidos;
