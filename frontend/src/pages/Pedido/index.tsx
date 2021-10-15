/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

import NavBar from 'components/NavBar';
import Button from 'components/Button';
import Loading from 'components/Loading';
import ComandaModal from 'components/Modal/ComandaModal';

import { useUser } from 'hooks/user';
import { getOrdersByTableId } from 'services/orders';
import { getAllContains } from 'services/contains';
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
  category: string;
  createdAt: string;
  description: string;
  discount: number;
  idItem: number;
  image: string;
  name: string;
  notes: string;
  price: number;
  updatedAt: string;
}

interface Contain {
  id: number;
  idOrder: number;
  idItem: number;
  quantity: number;
  observation: string;
  item: Item;
}

export enum ENUM {
  'na fila',
  'na cozinha',
  'preparando',
  'na mesa',
  'solicitacao pagamento',
  'pagamento realizado',
}

interface Client {
  idClient: number;
  name: string;
}

interface Order {
  idOrder: number;
  status: string;
  idTable: number;
  idClient: number;
  client: Client;
  data: string;
}

const Pedido: React.FC = () => {
  let tableTotalPrice = 0;
  const theme = useTheme();
  const { table } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState(0);
  const [allItems, setAllItems] = useState<Contain[]>([]);
  const [orderContain, setOrderContain] = useState<Contain[]>([]);

  const [isComandaModalVisible, setIsComandaModalVisible] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getAllContains()
      .then(response => {
        setAllItems(response);

        getOrdersByTableId(table)
          .then(responseOrders => {
            setOrders(responseOrders);
            setSelectedOrder(responseOrders[0].idOrder);
            setOrderContain(
              allItems.filter(({ idOrder }) => idOrder === selectedOrder),
            );
          })
          .catch(() => {
            setOrders([]);
          });
      })
      .catch(() => {
        setAllItems([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setOrderContain(
      allItems.filter(({ idOrder }) => idOrder === selectedOrder),
    );
  }, [selectedOrder]);

  const getComandaName = (): string => {
    return orders.filter(({ idOrder }) => idOrder === selectedOrder)[0].client
      .name;
  };

  const getOrderPrice = (order: number): number => {
    const orderItems = allItems.filter(({ idOrder }) => idOrder === order);
    const orderPrice = orderItems.reduce(
      (sum, { quantity, item }) => sum + quantity * item.price,
      0,
    );
    tableTotalPrice += orderPrice;
    return orderPrice;
  };

  return (
    <>
      <NavBar left="Voltar" center="Mesa" tableTitle="Mesa 1" />
      <Container>
        {isLoading && <Loading />}
        <ContainerLeft>
          <ContainerOrderList>
            <h1>{selectedOrder ? getComandaName() : '...'}</h1>
            <OrderList>
              {orderContain.length === 0 ? (
                <h2 className="pedido-vazio">
                  Essa comanda ainda não possui itens adicionados.
                </h2>
              ) : (
                orderContain.map(contain => {
                  return (
                    <Item key={contain.id}>
                      <h3>
                        {contain.quantity}x {contain.item?.name}
                        {contain.observation ? (
                          <span>Observação: {contain.observation}</span>
                        ) : (
                          <br />
                        )}
                      </h3>
                      <p>
                        R$ {(contain.quantity * contain.item.price).toFixed(2)}
                      </p>
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
              {orders.map(order => {
                return (
                  <Button
                    key={order.idOrder}
                    color={theme.primary02}
                    disabled={order.idOrder === selectedOrder}
                    width="10rem"
                    padding="1rem"
                    onClick={() => {
                      setSelectedOrder(order.idOrder);
                    }}
                  >
                    {order.client.name}
                  </Button>
                );
              })}
            </ButtonsContainer>
          </ContainerClientsOrder>
        </ContainerLeft>
        <ContainerTotal>
          <div className="total">
            <h1>Total</h1>
            {orders.map(order => {
              return (
                <div key={order.idOrder} className="valor-total cliente">
                  <h3>{order.client.name}:</h3>
                  <p>R$ {getOrderPrice(order.idOrder).toFixed(2)}</p>
                </div>
              );
            })}
            <div id="linha-horizontal" />
            <div className="valor-total pedido">
              <h1>Total:</h1>
              <h1>R$ {tableTotalPrice.toFixed(2)}</h1>
            </div>
          </div>
          <Button
            color={theme.primary02}
            width="80%"
            onClick={() => {
              /* TODO: Criar fluxo de enviar pedido para a cozinha */
            }}
          >
            Enviar Pedido
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
