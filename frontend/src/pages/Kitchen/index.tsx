import React from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import { Container } from 'pages/Kitchen/styles';
import BackgroundHamburguer from 'components/BackgroundHamburguer';

const Kitchen: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <SideBar page="menu-kitchen" />
        <BackgroundHamburguer text="Área da Cozinha" />
        {/* <Loading /> */}
      </Container>
    </>
  );
};

export default Kitchen;
