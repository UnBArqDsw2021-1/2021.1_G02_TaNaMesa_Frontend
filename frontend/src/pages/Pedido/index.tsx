import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

import { Container, ContainerOrderList, ContainerTotal, Item, OrderList} from './styles';

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
      { "quantity": 1, "name": "Petit Gateu", "price": 21.00, "obs": "" },
      { "quantity": 2, "name": "Suco de Laranja", "price": 20.00, "obs": "Suco sem açúcar" },
      { "quantity": 1, "name": "Creme de Maracujá", "price": 12.00, "obs": "" },
    ]);
  }, []);

  return (
    <Container>
      <ContainerOrderList>
        <h1>Brenda</h1>
        <OrderList>
          {items.map((item) => {
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
        <div id="linha-horizontal"></div>
        <p>Comandas abertas:</p>
      </ContainerOrderList>
      <ContainerTotal>
        <h1>Total</h1>
        <div id="linha-horizontal"></div>
      </ContainerTotal>
    </Container>
  );
};

export default Pedido;
