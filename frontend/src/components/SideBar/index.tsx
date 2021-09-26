import React, { useState, useEffect, useCallback } from 'react';

import SideBarButton from 'components/SideBarButton';
import logo from 'assets/logo-contorno.png';
import {
  homeButtons,
  kitchenOptions,
  managerOptions,
  menuUserButtons,
  waiterOptions,
} from './sideBarObjects';

import { Container, Logo } from './styles';

interface SideBarProps {
  page:
    | 'menu-user'
    | 'menu-home'
    | 'menu-waiter'
    | 'menu-kitchen'
    | 'menu-manager';
  hasLogo?: boolean;
}

interface SideBarObjects {
  icon: string;
  text: string;
  id: number;
}

const SideBar: React.FC<SideBarProps> = ({ page, hasLogo }) => {
  const [menuOptions, setMenuOptions] = useState<SideBarObjects[]>([]);
  const [callWaiterOnMenuUser, setCallWaiterOnMenuUser] =
    useState<SideBarObjects | null>(null);

  const getMenuOptions = useCallback((): void => {
    switch (page) {
      case 'menu-user':
        setCallWaiterOnMenuUser(menuUserButtons.callWaiter);
        setMenuOptions(menuUserButtons.options);
        break;

      case 'menu-home':
        setCallWaiterOnMenuUser(null);
        setMenuOptions(homeButtons);
        break;

      case 'menu-waiter':
        setCallWaiterOnMenuUser(null);
        setMenuOptions(waiterOptions);
        break;

      case 'menu-kitchen':
        setCallWaiterOnMenuUser(null);
        setMenuOptions(kitchenOptions);
        break;

      case 'menu-manager':
        setCallWaiterOnMenuUser(null);
        setMenuOptions(managerOptions);
        break;

      default:
        setCallWaiterOnMenuUser(menuUserButtons.callWaiter);
        setMenuOptions(menuUserButtons.options);
        break;
    }
  }, [page]);

  useEffect(() => {
    getMenuOptions();
  }, [getMenuOptions]);

  return (
    <Container hasLogo={hasLogo}>
      {hasLogo && <Logo src={logo} alt="Tá Na Mesa" />}

      {menuOptions.map(option => {
        return (
          <SideBarButton
            key={option.id}
            text={option.text}
            icon={option.icon}
          />
        );
      })}

      {callWaiterOnMenuUser && (
        <SideBarButton
          text={callWaiterOnMenuUser.text}
          icon={callWaiterOnMenuUser.icon}
          isCallWaiter
        />
      )}
    </Container>
  );
};

SideBar.defaultProps = {
  hasLogo: false,
};

export default SideBar;
