/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

import NavBar from 'components/NavBar';
import Button from 'components/Button';

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

  useEffect(() => {
    setItems([
      { quantity: 1, name: 'Petit Gateu', price: 21.0, obs: '' },
      {
        quantity: 2,
        name: 'Suco de Laranja',
        price: 20.0,
        obs: 'Suco sem açúcar',
      },
      { quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      { quantity: 3, name: 'Petit Gateu', price: 21.0, obs: 'Tem observação' },
      { quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      { quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      { quantity: 3, name: 'Petit Gateu', price: 21.0, obs: 'Tem observação' },
      { quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      {
        quantity: 2,
        name: 'Suco de Laranja',
        price: 20.0,
        obs: 'Suco sem açúcar',
      },
      { quantity: 1, name: 'Petit Gateu', price: 21.0, obs: '' },
      {
        quantity: 2,
        name: 'Suco de Laranja',
        price: 20.0,
        obs: 'Suco sem açúcar',
      },
      { quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      { quantity: 3, name: 'Petit Gateu', price: 21.0, obs: 'Tem observação' },
      { quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      { quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      { quantity: 3, name: 'Petit Gateu', price: 21.0, obs: 'Tem observação' },
      { quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
      {
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
                    <Item>
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
              <button type="button" onClick={() => {}}>
                +
              </button>
            </div>
            <ButtonsContainer>
              {clients.map(({ name }) => {
                return (
                  <Button
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
                <div className="valor-total cliente">
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
      </Container>
    </>
  );
};

export default Pedido;
