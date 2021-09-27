import React from 'react';

import SideBar from 'components/SideBar';
import BackgroundHamburguer from 'components/BackgroundHamburguer';
// import Loading from 'components/Loading';

import { Container } from 'pages/Home/styles';

const Home: React.FC = () => {
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
