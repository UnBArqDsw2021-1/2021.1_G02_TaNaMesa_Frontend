/* eslint-disable */
import React from 'react';
import Icons from 'utils/assets';

import { Container } from 'components/HelpButton/styles';

type HelpButtonProps = {
  checked: boolean;
  onToggle: (checked: boolean) => void;
};

const HelpButton: React.FC<HelpButtonProps> = ({
  children,
  checked,
  onToggle,
}) => {
  const checkCheckbox = (): boolean => {
    if (checked === true) return (checked = false);
    if (checked === false) return (checked = true);
    return true;
  };
  return (
    <Container onClick={() => onToggle(!checked)}>
      {children}
      <img alt="helpbutton" src={Icons.simbolo_duvida} />
      <label htmlFor="checkmark" className="containerInput">
        <input
          type="checkbox"
          checked={checked}
          onClick={checkCheckbox}
          onChange={() => onToggle(!checked)}
        />
        <span className="checkmark" />
      </label>
    </Container>
  );
};

export default HelpButton;
