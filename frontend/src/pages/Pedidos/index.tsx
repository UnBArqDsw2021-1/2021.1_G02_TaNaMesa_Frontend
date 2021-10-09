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

const Pedidos: React.FC = () => {
  const [mesas, setMesas] = useState<Mesa[]>(mesas_);
  const [mesaSelected, setMesaSelected] = useState<Mesa>({
    id: 0,
    comandas: [],
  });

  const [showMesa, setShowMesa] = useState<boolean>(false);

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
        <div className="pedidos">
          <div className="col">
            <h3>Em aberto</h3>

            <div className="mesas">
              {mesas.map(mesa => (
                <button
                  type="button"
                  className="mesa"
                  key={mesa.id}
                  onClick={() => selectMesa(mesa)}
                >
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
                </button>
              ))}
            </div>
          </div>
          <div className="col">
            <h3>Em produção</h3>

            <div className="mesas">
              {mesas.map(mesa => (
                <button
                  type="button"
                  className="mesa"
                  key={mesa.id}
                  onClick={() => selectMesa(mesa)}
                >
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
                </button>
              ))}
            </div>
          </div>
          <div className="col">
            <h3>Concluídos</h3>

            <div className="mesas">
              {mesas.map(mesa => (
                <button
                  type="button"
                  className="mesa"
                  key={mesa.id}
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
                </button>
              ))}
            </div>
          </div>
        </div>
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
