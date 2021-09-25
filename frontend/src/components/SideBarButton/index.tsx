import React from 'react';

import imgBurguer from 'assets/SideBar/smbolo_hamburguer 1.png';
import { SideBarButtonContainer } from 'components/SideBarButton/styles';

interface SideBarButtonProps {
  icon: string;
  text: string;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({ icon, text }) => {
  return (
    <SideBarButtonContainer>
      <img src={icon} alt="Buguer" />
      <span>{text}</span>
    </SideBarButtonContainer>
  );
};

export default SideBarButton;
