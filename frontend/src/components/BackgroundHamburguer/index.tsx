import React from 'react';

import {
  Container,
  Logo,
  Slogan,
} from 'components/BackgroundHamburguer/styles';

import Icons from 'utils/assets';
import { useScreenSize } from 'hooks/screen';

interface BackgroundProps {
  text?: string | null;
}

const BackgroundHamburguer: React.FC<BackgroundProps> = ({ text }) => {
  const { actualScreen } = useScreenSize();
  return (
    <Container needToBeHidden={actualScreen !== 'menu'}>
      <Logo src={Icons.logo_contorno} alt="Tá Na Mesa" />

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
