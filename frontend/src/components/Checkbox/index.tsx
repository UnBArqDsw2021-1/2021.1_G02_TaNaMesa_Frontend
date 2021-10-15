/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Container } from './styles';

type CheckboxProps = {
  id: string | number;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onClick: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  disabled,
  onClick,
}) => {
  return (
    <Container>
      <label htmlFor={`checkbox-${id}`}>
        <input
          type="checkbox"
          id={`checkbox-${id}`}
          checked={checked}
          disabled={disabled}
          onChange={() => onClick(!checked)}
        />
        <span className="checkmark" />
        {label}
      </label>
    </Container>
  );
};

Checkbox.defaultProps = {
  label: 'Rótulo para a checkbox',
  checked: false,
  disabled: false,
};

export default Checkbox;
