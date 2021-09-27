import React from 'react';

import { NormalButton } from 'components/Button/styles';

type ButtonProps = {
  color: string;
  width?: string;
  padding?: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  width,
  padding,
  disabled,
  onClick,
}) => {
  return (
    <NormalButton
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
};

export default Button;
