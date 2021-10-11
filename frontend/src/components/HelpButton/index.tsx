/* eslint-disable */
import React from 'react';
import Icons from 'utils/assets';

import { Container } from 'components/HelpButton/styles';

type HelpButtonProps = {
  id: number;
  onToggle: (id: number) => void;
};

const HelpButton: React.FC<HelpButtonProps> = ({ children, onToggle, id }) => {
  return (
    <Container onClick={() => onToggle(id)}>
      <div className="content">
        {children}
        <img alt="helpbutton" src={Icons.simbolo_duvida} />
      </div>
    </Container>
  );
};

export default HelpButton;
