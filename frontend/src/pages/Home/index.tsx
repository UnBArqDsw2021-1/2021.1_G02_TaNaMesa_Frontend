import React from 'react';

import SideBar from 'components/SideBar';
import BackgroundHamburguer from 'components/BackgroundHamburguer';
// import Loading from 'components/Loading';

import { Container } from 'pages/Home/styles';
import { useScreenSize } from 'hooks/screen';

const Home: React.FC = () => {
  const { actualScreen, switchActualScreen } = useScreenSize();

  switchActualScreen('home');

  return (
    <>
      <Container>
        <SideBar page="menu-home" hasLogo={actualScreen !== 'menu'} />
        <BackgroundHamburguer text="Da mesa pra cozinha e da cozinha pra mesa." />
        {/* <Loading /> */}
      </Container>
    </>
  );
};

export default Home;
