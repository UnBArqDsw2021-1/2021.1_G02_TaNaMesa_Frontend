import React from 'react';

import { NormalButton } from 'components/Button/styles';

type ButtonProps = {
  color: string;
  width?: string;
  padding?: string;
  disabled?: boolean;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  width,
  padding,
  disabled,
  onClick,
  type,
}) => {
  return (
    <NormalButton
      type={type}
      color={color}
      width={width}
      padding={padding}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </NormalButton>
  );
};

Button.defaultProps = {
  width: '15rem',
  padding: '1.5rem',
  disabled: false,
  type: 'button',
};

export default Button;
