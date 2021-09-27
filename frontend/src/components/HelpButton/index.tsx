import React from 'react';
import Icons from 'utils/assets';

import { Container } from 'components/HelpButton/styles';

type HelpButtonProps = {
  onClick: () => void;
};

const HelpButton: React.FC<HelpButtonProps> = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>
      {children}
      <img alt="helpbutton" src={Icons.simbolo_duvida} />
    </Container>
  );
};

export default HelpButton;
