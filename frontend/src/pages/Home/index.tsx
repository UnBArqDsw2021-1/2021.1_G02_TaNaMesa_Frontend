import React from 'react';

import { useUserTheme } from 'hooks/theme';

import { Container } from './styles';

import NavBar from '../../components/NavBar';

const Home: React.FC = () => {
  const { switchTheme, theme } = useUserTheme();

  return (
    <Container>
      <NavBar />
      <h1>Tá na Mesa</h1>

      <button type="button" onClick={switchTheme}>
        Trocar tema
      </button>

      <h4>{theme.type}</h4>
    </Container>
  );
};

export default Home;
