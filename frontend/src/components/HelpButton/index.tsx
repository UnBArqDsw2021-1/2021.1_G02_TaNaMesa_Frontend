/* eslint-disable */
import React from 'react';
import Icons from 'utils/assets';

import { Container } from 'components/HelpButton/styles';

type HelpButtonProps = {
  [checked: string]: any;
  id: number;
  onToggle: (checked: string) => void;
};

const HelpButton: React.FC<HelpButtonProps> = ({
  children,
  checked,
  onToggle,
  id,
}) => {
  return (
    <Container onClick={() => onToggle(checked[id])}>
      {children}
      <img alt="helpbutton" src={Icons.simbolo_duvida} />
      <label htmlFor="checkmark" className="containerInput">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(checked[id])}
        />
        <span className="checkmark" />
      </label>
    </Container>
  );
};

export default HelpButton;
