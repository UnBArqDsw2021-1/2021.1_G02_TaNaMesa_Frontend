import React, { useEffect } from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import { Container } from 'pages/Kitchen/styles';
import BackgroundHamburguer from 'components/BackgroundHamburguer';
import { useScreenSize } from 'hooks/screen';

const Kitchen: React.FC = () => {
  const { switchActualScreen } = useScreenSize();

  useEffect(() => switchActualScreen('kitchen'), [switchActualScreen]);

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
