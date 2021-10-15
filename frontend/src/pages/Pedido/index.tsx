/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

import NavBar from 'components/NavBar';
import Button from 'components/Button';
import ComandaModal from 'components/Modal/ComandaModal';

import {
  Container,
  ContainerOrderList,
  ContainerClientsOrder,
  ButtonsContainer,
  ContainerTotal,
  ContainerLeft,
  Item,
  OrderList,
} from './styles';

interface Item {
  id: number;
  quantity: number;
  name: string;
  price: number;
  obs?: string;
}

interface Client {
  name: string;
  totalPrice: number;
}

const Pedido: React.FC = () => {
  const theme = useTheme();

  const [items, setItems] = useState<Item[]>([]);
  const [clients, setClients] = useState<Client[]>([]);

  const [isComandaModalVisible, setIsComandaModalVisible] = useState(false);

  useEffect(() => {
    setItems([
      { id: 0, quantity: 1, name: 'Petit Gateu', price: 21.0, obs: '' },
      {
        id: 1,
        quantity: 2,
        name: 'Suco de Laranja',
        price: 20.0,
        obs: 'Suco sem açúcar',
      },
      { id: 2, quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      {
        id: 3,
        quantity: 3,
        name: 'Petit Gateu',
        price: 21.0,
        obs: 'Tem observação',
      },
      { id: 4, quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      { id: 5, quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      {
        id: 6,
        quantity: 3,
        name: 'Petit Gateu',
        price: 21.0,
        obs: 'Tem observação',
      },
      { id: 7, quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      {
        id: 8,
        quantity: 2,
        name: 'Suco de Laranja',
        price: 20.0,
        obs: 'Suco sem açúcar',
      },
      { id: 9, quantity: 1, name: 'Petit Gateu', price: 21.0, obs: '' },
      {
        id: 10,
        quantity: 2,
        name: 'Suco de Laranja',
        price: 20.0,
        obs: 'Suco sem açúcar',
      },
      { id: 11, quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      {
        id: 12,
        quantity: 3,
        name: 'Petit Gateu',
        price: 21.0,
        obs: 'Tem observação',
      },
      { id: 13, quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      { id: 14, quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      {
        id: 15,
        quantity: 3,
        name: 'Petit Gateu',
        price: 21.0,
        obs: 'Tem observação',
      },
      { id: 16, quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      {
        id: 17,
        quantity: 2,
        name: 'Suco de Laranja',
        price: 20.0,
        obs: 'Suco sem açúcar',
      },
    ]);

    setClients([
      { name: 'Brenda', totalPrice: 35.0 },
      { name: 'Sérgio', totalPrice: 23.0 },
      { name: 'Hérick', totalPrice: 42.0 },
      { name: 'Eduarda', totalPrice: 15.0 },
    ]);
  }, []);

  const getTotalPrice = (): number => {
    return clients.reduce((sum, { totalPrice }) => sum + totalPrice, 0);
  };

  return (
    <>
      <NavBar left="Voltar" center="Mesa" tableTitle="Mesa 1" />
      <Container>
        <ContainerLeft>
          <ContainerOrderList>
            <h1>Brenda</h1>
            <OrderList>
              {items.length === 0 ? (
                <h2 className="pedido-vazio">
                  Aqui você pode consultar os pedidos realizados sempre que
                  quiser.
                </h2>
              ) : (
                items.map(item => {
                  return (
                    <Item key={item.id}>
                      <h3>
                        {item.quantity}x {item.name}
                        {item.obs ? (
                          <span>Observação: {item.obs}</span>
                        ) : (
                          <br />
                        )}
                      </h3>
                      <p>R$ {item.price.toFixed(2)}</p>
                    </Item>
                  );
                })
              )}
            </OrderList>
          </ContainerOrderList>
          <ContainerClientsOrder>
            <div className="criar-comanda">
              <p>Comandas abertas:</p>
              <button
                type="button"
                onClick={() => setIsComandaModalVisible(true)}
              >
                +
              </button>
            </div>
            <ButtonsContainer>
              {clients.map(({ name }) => {
                return (
                  <Button
                    key={name}
                    color={theme.primary02}
                    width="10rem"
                    padding="1rem"
                    onClick={() => {}}
                  >
                    {name}
                  </Button>
                );
              })}
            </ButtonsContainer>
          </ContainerClientsOrder>
        </ContainerLeft>
        <ContainerTotal>
          <div className="total">
            <h1>Total</h1>
            {clients.map(client => {
              return (
                <div key={client.name} className="valor-total cliente">
                  <h3>{client.name}:</h3>
                  <p>R$ {client.totalPrice.toFixed(2)}</p>
                </div>
              );
            })}
            <div id="linha-horizontal" />
            <div className="valor-total pedido">
              <h1>Total:</h1>
              <h1>R$ {getTotalPrice().toFixed(2)}</h1>
            </div>
          </div>
          <Button color={theme.primary02} width="80%" onClick={() => {}}>
            Pedir Conta
          </Button>
        </ContainerTotal>
        <ComandaModal
          visible={isComandaModalVisible}
          onClose={() => setIsComandaModalVisible(false)}
        />
      </Container>
    </>
  );
};

export default Pedido;
