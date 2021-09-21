import React from 'react';

import { NormalButton } from 'components/Button/styles';

type ButtonProps = {
  color: string;
  width?: string;
  padding?: string;
  enabled?: boolean;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  width,
  padding,
  enabled,
  onClick,
}) => {
  return (
    <NormalButton
      color={color}
      width={width}
      padding={padding}
      enabled={enabled}
      onClick={onClick}
    >
      {children}
    </NormalButton>
  );
};

Button.defaultProps = {
  width: '15rem',
  padding: '1.5rem',
  enabled: true,
};

export default Button;
