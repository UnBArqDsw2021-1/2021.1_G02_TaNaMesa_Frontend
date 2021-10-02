import React, { useState, useEffect } from 'react';

import NavBar from 'components/NavBar';

import { Container } from './styles';

interface Mesa {
  id: number;
  comanda: Array<Comanda>;
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

const Pedidos: React.FC = () => {
  const [mesas, setMesas] = useState<Mesa[]>([]);

  useEffect(() => {
    setMesas([
      {
        id: 1,
        comanda: [
          {
            id: 1,
            pessoa: { name: 'Ítalo', totalPrice: 21.0 },
            itens: [
              { id: 0, quantity: 1, name: 'Petit Gateu', price: 21.0, obs: '' },
            ],
          },
        ],
      },
      {
        id: 2,
        comanda: [
          {
            id: 2,
            pessoa: { name: 'Tiago', totalPrice: 12.0 },
            itens: [
              { id: 2, quantity: 1, name: 'Creme', price: 12.0, obs: '' },
            ],
          },
        ],
      },
    ]);
  }, []);

  return (
    <>
      <NavBar left="Voltar" center="Mesa" tableTitle="Pedidos" />
      <Container>
        <div className="pedidos">
          <div className="col">
            <h3>Em aberto</h3>
          </div>
          <div className="col">
            <h3>Em produção</h3>
          </div>
          <div className="col">
            <h3>Concluídos</h3>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Pedidos;
