import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { NavBarContainer,NameContainer } from 'components/NavBar/styles';

const SecondNavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <section>
        <FiArrowLeft />
        <span>Voltar</span>
      </section>

      <NameContainer>
        <span>Pedido Vazio</span>
      </NameContainer>
    </NavBarContainer>
  );
};

export default SecondNavBar;
