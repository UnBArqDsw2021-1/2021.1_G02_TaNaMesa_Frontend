import React from 'react';

import { Container } from 'components/HelpButton/styles';

type HelpButtonProps = {
  onClick: () => void;
};

const HelpButton: React.FC<HelpButtonProps> = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default HelpButton;
