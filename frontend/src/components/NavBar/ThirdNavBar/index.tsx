import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { NavBarContainer } from 'components/NavBar/styles';

const ThirdNavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <section>
        <FiArrowLeft />
        <span>Voltar</span>
      </section>
    </NavBarContainer>
  );
};

export default ThirdNavBar;
