import React from 'react';

import { SideBarButtonContainer } from 'components/SideBarButton/styles';

interface SideBarButtonProps {
  icon: string;
  text: string;
  isCallWaiter?: boolean;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({
  icon,
  text,
  isCallWaiter,
}) => {
  return (
    <SideBarButtonContainer style={isCallWaiter ? { marginTop: '12rem' } : {}}>
      <img src={icon} alt="Buguer" />
      <span>{text}</span>
    </SideBarButtonContainer>
  );
};

SideBarButton.defaultProps = {
  isCallWaiter: false,
};

export default SideBarButton;
