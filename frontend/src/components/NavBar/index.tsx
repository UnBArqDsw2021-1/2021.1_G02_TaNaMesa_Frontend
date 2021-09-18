import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { NavBarContainer, NameContainer } from 'components/NavBar/styles';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer style={{ marginBottom: '4rem' }}>
      <section>
        <FiArrowLeft />
        <span>Voltar</span>
      </section>

      <NameContainer>
        <span>Pedido</span>
      </NameContainer>
    </NavBarContainer>
  );
};

NavBar.defaultProps = {
  styles: {},
};

export default NavBar;
