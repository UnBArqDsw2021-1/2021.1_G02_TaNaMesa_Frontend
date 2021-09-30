import React from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import { Container } from 'pages/Waiter/styles';
import BackgroundHamburguer from 'components/BackgroundHamburguer';
import { useScreenSize } from 'hooks/screen';

const Waiter: React.FC = () => {
  const { switchActualScreen } = useScreenSize();

  switchActualScreen('waiter');

  return (
    <>
      <NavBar center="Mesa" tableTitle="Garçom" />
      <Container>
        <SideBar page="menu-waiter" />
        <BackgroundHamburguer text="Área do Garçom" />
        {/* <Loading /> */}
      </Container>
    </>
  );
};

export default Waiter;
