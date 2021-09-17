import React from 'react';
import { useTheme } from 'styled-components';

import { Container, ContainerOrderList, ContainerTotal } from './styles';

const Pedido: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <ContainerOrderList>
        <h1>Tela de Pedido</h1>
      </ContainerOrderList>
      <ContainerTotal>
        <h1>Total</h1>
      </ContainerTotal>
    </Container>
  );
};

export default Pedido;
