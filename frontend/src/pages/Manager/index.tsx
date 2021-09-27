import React from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import { Container } from 'pages/Manager/styles';
import BackgroundHamburguer from 'components/BackgroundHamburguer';

const Manager: React.FC = () => {
  return (
    <>
      <NavBar center="Mesa" tableTitle="Gerente | Administrador" />
      <Container>
        <SideBar page="menu-manager" />
        <BackgroundHamburguer text="Área do Gerente" />
        {/* <Loading /> */}
      </Container>
    </>
  );
};

export default Manager;
