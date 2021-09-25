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

const Pedido: React.FC = () => {
  const theme = useTheme();

  const [items, setItems] = useState<Item[]>([]);

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
      { quantity: 1, name: 'Petit Gateu', price: 21.0, obs: '' },
      {
        quantity: 2,
        name: 'Suco de Laranja',
        price: 20.0,
        obs: 'Suco sem açúcar',
      },
      { quantity: 1, name: 'Creme de Maracujá', price: 12.0, obs: '' },
    ]);
  }, []);

  return (
    <>
      <NavBar left="Voltar" center="Mesa" tableTitle="Mesa 1" />
      <Container>
        <ContainerLeft>
          <ContainerOrderList>
            <h1>Brenda</h1>
            <OrderList>
              {items.map(item => {
                return (
                  <Item>
                    <h2>
                      {item.quantity}x {item.name}
                      {item.obs ? <h3>Observação: {item.obs}</h3> : <br />}
                    </h2>
                    <h2>R$ {item.price.toFixed(2)}</h2>
                  </Item>
                );
              })}
            </OrderList>
          </ContainerOrderList>
          <ContainerClientsOrder>
            <p>Comandas abertas:</p>
            <ButtonsContainer>
              <Button
                color={theme.primary02}
                width="10rem"
                padding="1rem"
                onClick={() => {}}
              >
                Sérgio
              </Button>
              <Button
                color={theme.primary02}
                width="10rem"
                padding="1rem"
                onClick={() => {}}
              >
                Brenda
              </Button>
              <Button
                color={theme.secondaryGreen}
                padding="1rem"
                onClick={() => {}}
              >
                Criar Comanda
              </Button>
            </ButtonsContainer>
          </ContainerClientsOrder>
        </ContainerLeft>
        <ContainerTotal>
          <h1>Total</h1>
          <h2>Brenda R$ 10.00</h2>
          <h2>Sérgio R$ 15.00</h2>
          <div id="linha-horizontal" />
          <h1>Total R$ 25.00</h1>
          <Button color={theme.primary02} width="30rem" onClick={() => {}}>
            Pedir Conta
          </Button>
        </ContainerTotal>
      </Container>
    </>
  );
};

export default Pedido;
