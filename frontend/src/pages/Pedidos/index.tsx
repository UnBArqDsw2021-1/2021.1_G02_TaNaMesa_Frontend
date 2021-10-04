import React, { useState, useEffect } from 'react';

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

const Pedidos: React.FC = () => {
  const [mesas, setMesas] = useState<Mesa[]>([]);

  useEffect(() => {
    setMesas([
      {
        id: 1,
        comandas: [
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
        comandas: [
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

            <div className="mesas">
              {mesas.map(mesa => (
                <div className="mesa" key={mesa.id}>
                  <div className="status">
                    <h4>Mesa {mesa.id}</h4>
                    <Status color="#EB4040" />
                  </div>
                  <div className="content">
                    <h5>
                      {mesa.comandas.length === 1
                        ? `1 Comanda`
                        : `${mesa.comandas.length} Comandas`}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col">
            <h3>Em produção</h3>

            <div className="mesas">
              {mesas.map(mesa => (
                <div className="mesa" key={mesa.id}>
                  <div className="status">
                    <h4>Mesa {mesa.id}</h4>
                    <Status color="#F9FC66" />
                  </div>
                  <div className="content">
                    <h5>
                      {mesa.comandas.length === 1
                        ? `1 Comanda`
                        : `${mesa.comandas.length} Comandas`}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col">
            <h3>Concluídos</h3>

            <div className="mesas">
              {mesas.map(mesa => (
                <div className="mesa" key={mesa.id}>
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
              ))}
            </div>
          </div>
        </div>
      </Container>

      <PedidosModal visible onClose={value => console.log(value)} />
    </>
  );
};

export default Pedidos;
