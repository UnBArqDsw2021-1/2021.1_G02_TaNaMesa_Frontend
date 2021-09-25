import React, { useState, useEffect } from 'react';

import SideBarButton from 'components/SideBarButton';
import logo from 'assets/logo-contorno.png';
import sideBarObjects from './sideBarObjects';

import { Container, Logo } from './styles';

interface SideBarProps {
  page: 'menu-user' | string;
}

interface SideBarObjects {
  icon: string;
  text: string;
}

const SideBar: React.FC<SideBarProps> = ({ page }) => {
  const [menuOptions, setMenuOptions] = useState<SideBarObjects[]>([]);

  const getMenuOptions = (): void => {
    switch (page) {
      case 'menu-user':
        setMenuOptions(sideBarObjects.menuUserButtons);
        break;

      default:
        setMenuOptions(sideBarObjects.menuUserButtons);
        break;
    }
  };

  useEffect(() => {
    getMenuOptions();
  }, []);

  return (
    <Container>
      <Logo src={logo} alt="Tá Na Mesa" />

      {menuOptions.map(option => {
        return <SideBarButton text={option.text} icon={option.icon} />;
      })}
    </Container>
  );
};

export default SideBar;
