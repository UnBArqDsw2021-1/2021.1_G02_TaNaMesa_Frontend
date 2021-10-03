/* eslint-disable */
import React from 'react';
import Icons from 'utils/assets';

import { Container } from 'components/HelpButton/styles';

type HelpButtonProps = {
  checked: string;
  id: string;
  onToggle: (checked: string) => void;
};

const HelpButton: React.FC<HelpButtonProps> = ({
  children,
  checked,
  onToggle,
  id,
}) => {
  return (
    <Container onClick={() => onToggle(checked)}>
      {children}
      <img alt="helpbutton" src={Icons.simbolo_duvida} />
      <label htmlFor="checkmark" className="containerInput">
        <input
          id={id}
          type="checkbox"
          checked={checked === id}
          onChange={() => onToggle(checked)}
        />
        <span className="checkmark" />
      </label>
    </Container>
  );
};

export default HelpButton;
