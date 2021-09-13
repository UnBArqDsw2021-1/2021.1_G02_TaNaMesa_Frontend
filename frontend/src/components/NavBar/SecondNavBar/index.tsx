import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { SecondNavBarContainer, SecondNameContainer } from 'components/NavBar/SecondNavBar/styles';

const SecondNavBar: React.FC = () => {
  return (
    <SecondNavBarContainer>
      <section>
        <FiArrowLeft />
        <span>Voltar</span>
      </section>

      <SecondNameContainer>
        <span>Pedido Vazio</span>
      </SecondNameContainer>
    </SecondNavBarContainer>
  );
};

export default SecondNavBar;
