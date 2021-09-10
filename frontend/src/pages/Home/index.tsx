import React from 'react';
import { useTheme } from 'styled-components';

import { useUserTheme } from 'hooks/theme';

import { Container } from './styles';

const Home: React.FC = () => {
  const { switchTheme } = useUserTheme();
  const theme = useTheme();

  return (
    <Container>
      <h1>Tá na Mesa</h1>

      <button type="button" onClick={switchTheme}>
        Trocar tema
      </button>

      <h4>{theme.type}</h4>
    </Container>
  );
};

export default Home;
