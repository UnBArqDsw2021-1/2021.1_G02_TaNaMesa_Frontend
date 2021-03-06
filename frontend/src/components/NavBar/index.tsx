import React from 'react';
import { useHistory } from 'react-router';
import { FiArrowLeft } from 'react-icons/fi';

import {
  NavBarContainer,
  BackButton,
  CenterContainer,
  RightContainer,
} from 'components/NavBar/styles';
import { useUserTheme } from 'hooks/theme';
import Button from 'components/Button';

interface NavBarProps {
  left?: 'Voltar' | null;
  tableTitle?: string;
  right?: 'Pedido' | null;
  isOrderEmpty?: boolean;
  center?: 'Pedidos' | 'Mesa' | null;
}

const NavBar: React.FC<NavBarProps> = ({
  left,
  tableTitle,
  right,
  isOrderEmpty,
  center,
}) => {
  const history = useHistory();
  const { theme } = useUserTheme();

  const renderLeftSide = (): JSX.Element | null => {
    switch (left) {
      case 'Voltar':
        return (
          <BackButton type="button" onClick={() => history.goBack()}>
            <FiArrowLeft />
            <span>Voltar</span>
          </BackButton>
        );

      default:
        return null;
    }
  };

  const renderRightSide = (): JSX.Element | null => {
    switch (right) {
      case 'Pedido':
        return (
          <RightContainer>
            <Button
              width="100%"
              padding="0.8rem"
              color={theme.white}
              disabled={isOrderEmpty}
              onClick={() => {
                history.push('/pedido');
              }}
            >
              <span>{isOrderEmpty ? 'Pedido vazio' : 'Pedido'}</span>
            </Button>
          </RightContainer>
        );

      default:
        return null;
    }
  };

  const renderOnCenter = (): JSX.Element | null => {
    switch (center) {
      case 'Mesa':
        return (
          <CenterContainer>
            <span>{tableTitle}</span>
          </CenterContainer>
        );

      case 'Pedidos':
        return (
          <CenterContainer>
            <span>Pedidos</span>
          </CenterContainer>
        );

      default:
        return null;
    }
  };

  return (
    <NavBarContainer>
      {renderLeftSide()}
      {renderOnCenter()}
      {renderRightSide()}
    </NavBarContainer>
  );
};

NavBar.defaultProps = {
  left: null,
  right: null,
  isOrderEmpty: false,
  center: null,
  tableTitle: '',
};

export default NavBar;
