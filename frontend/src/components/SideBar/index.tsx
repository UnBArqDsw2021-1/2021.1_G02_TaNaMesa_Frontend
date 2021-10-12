import React, { useState, useEffect, useCallback } from 'react';

import SideBarButton from 'components/SideBarButton';
import Button from 'components/Button';
import Icons from 'utils/assets';
import { FiMenu, FiX } from 'react-icons/fi';
import { useUserTheme } from 'hooks/theme';
import { useScreenSize } from 'hooks/screen';
import {
  homeButtons,
  kitchenOptions,
  managerOptions,
  menuUserButtons,
  waiterOptions,
} from './sideBarObjects';

import { Container, LogoContainer } from './styles';

interface SideBarProps {
  page:
    | 'menu-user'
    | 'menu-home'
    | 'menu-waiter'
    | 'menu-kitchen'
    | 'menu-manager';
  hasLogo?: boolean;
  size?: 'large' | 'small';
  collapse?: boolean;
}

interface SideBarObjects {
  icon: string;
  text: string;
  id: number;
  route?: string;
  category?: string;
  solicitationWaiter?: boolean;
  solicitationOrder?: boolean;
}

const screensNamesNeedToBeStatic = ['home', 'waiter', 'kitchen', 'manager'];

const SideBar: React.FC<SideBarProps> = ({ page, hasLogo, size, collapse }) => {
  const { switchScreenSize, actualScreen } = useScreenSize();
  const { theme } = useUserTheme();

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
    <Container
      needToBeStatic={screensNamesNeedToBeStatic.includes(actualScreen)}
      size={size}
      hasLogo={hasLogo}
    >
      {size === 'large' ? (
        <>
          <LogoContainer>
            {hasLogo && <img src={Icons.logo_contorno} alt="Tá Na Mesa" />}
            {collapse && (
              <Button
                width="25%"
                color={theme.primary01}
                padding="1rem 0rem"
                onClick={switchScreenSize}
              >
                <FiX size="3rem" color={theme.white} />
              </Button>
            )}
          </LogoContainer>

          {menuOptions.map(option => {
            return (
              <SideBarButton
                key={option.id}
                text={option.text}
                icon={option.icon}
                category={option.category ? option.category : null}
                route={option.route ? option.route : null}
                solicitationWaiter={
                  option.solicitationWaiter ? option.solicitationWaiter : false
                }
                solicitationOrder={
                  option.solicitationOrder ? option.solicitationOrder : false
                }
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
        </>
      ) : (
        <Button
          width="80%"
          color={theme.primary01}
          padding="1rem 0rem"
          onClick={switchScreenSize}
        >
          <FiMenu size="3rem" color={theme.white} />
        </Button>
      )}
    </Container>
  );
};

SideBar.defaultProps = {
  hasLogo: false,
  size: 'large',
  collapse: false,
};

export default SideBar;
