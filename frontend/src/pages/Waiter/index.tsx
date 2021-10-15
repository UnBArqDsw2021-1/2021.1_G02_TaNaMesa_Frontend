import React, { useEffect } from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import { Container } from 'pages/Waiter/styles';
import BackgroundHamburguer from 'components/BackgroundHamburguer';
import { useScreenSize } from 'hooks/screen';

const Waiter: React.FC = () => {
  const { switchActualScreen, openMenu } = useScreenSize();

  useEffect(() => switchActualScreen('waiter'), []);

  return (
    <>
      <NavBar center="Mesa" tableTitle="Garçom" />
      <Container>
        <SideBar
          size={openMenu ? 'large' : 'small'}
          page="menu-waiter"
          hasLogo
        />
        <BackgroundHamburguer text="Área do Garçom" />
        {/* <Loading /> */}
      </Container>
    </>
  );
};

export default Waiter;
