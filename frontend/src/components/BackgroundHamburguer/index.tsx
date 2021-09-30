import React from 'react';

import {
  Container,
  Logo,
  Slogan,
} from 'components/BackgroundHamburguer/styles';

import logo from 'assets/logo-contorno.png';
import { useScreenSize } from 'hooks/screen';

interface BackgroundProps {
  text?: string | null;
}

const BackgroundHamburguer: React.FC<BackgroundProps> = ({ text }) => {
  const { actualScreen } = useScreenSize();
  return (
    <Container needToBeHidden={actualScreen !== 'menu'}>
      <Logo src={logo} alt="Tá Na Mesa" />

      {text && (
        <Slogan>
          <h1>{text}</h1>
        </Slogan>
      )}
    </Container>
  );
};

BackgroundHamburguer.defaultProps = {
  text: null,
};

export default BackgroundHamburguer;
