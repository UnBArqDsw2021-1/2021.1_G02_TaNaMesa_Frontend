import React, { useEffect } from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import { Container } from 'pages/Manager/styles';
import BackgroundHamburguer from 'components/BackgroundHamburguer';
import { useScreenSize } from 'hooks/screen';

const Manager: React.FC = () => {
  const { switchActualScreen } = useScreenSize();

  useEffect(() => switchActualScreen('manager'), []);

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
