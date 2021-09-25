import React from 'react';

import { useUserTheme } from 'hooks/theme';

// import Loading from 'components/Loading';
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';

import { Container, StyledButton } from 'pages/Home/styles';

const Home: React.FC = () => {
  const { switchTheme, theme } = useUserTheme();

  return (
    <Container>
      <NavBar center="Mesa" tableTitle="Mesa 1" />
      <SideBar page="menu-user" />
    </Container>
  );
};

export default Home;
