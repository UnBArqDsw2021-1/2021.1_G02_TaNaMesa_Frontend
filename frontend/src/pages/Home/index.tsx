import React from 'react';

import { useUserTheme } from 'hooks/theme';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import BackgroundHamburguer from 'components/BackgroundHamburguer';
// import Loading from 'components/Loading';

import { Container } from 'pages/Home/styles';

const Home: React.FC = () => {
  const { switchTheme, theme } = useUserTheme();

  return (
    <>
      <Container>
        <SideBar page="menu-home" />
        <BackgroundHamburguer text="Da mesa pra cozinha e da cozinha pra mesa." />
        {/* <Loading /> */}
      </Container>
    </>
  );
};

export default Home;
