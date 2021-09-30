import React, { FormEvent } from 'react';
import { useHistory } from 'react-router';

import { SideBarButtonContainer } from 'components/SideBarButton/styles';
import { useMenu } from 'hooks/menu';
import { useScreenSize } from 'hooks/screen';

interface SideBarButtonProps {
  icon: string;
  text: string;
  isCallWaiter?: boolean;
  route?: string | null;
  category?: string | null;
}

type Categories =
  | 'hamburgueres'
  | 'petiscos'
  | 'molhos adicionais'
  | 'saladas'
  | 'bebidas'
  | 'sobremesas';

const SideBarButton: React.FC<SideBarButtonProps> = ({
  icon,
  text,
  isCallWaiter,
  route,
  category,
}) => {
  const { changeMenuItemCategory } = useMenu();
  const { switchScreenSize } = useScreenSize();
  const history = useHistory();

  const whichFunctionOnClick = (): ((e: FormEvent) => void) => {
    if (route) {
      return e => {
        e.preventDefault();
        history.push(route);
      };
    }
    if (category) {
      return e => {
        e.preventDefault();
        changeMenuItemCategory(category as Categories);
        switchScreenSize();
      };
    }

    return () =>
      console.log('Ainda não foi especificado o tipo de ação do botão');
  };

  return (
    <SideBarButtonContainer
      style={isCallWaiter ? { marginTop: '12rem', marginBottom: '2rem' } : {}}
      onClick={whichFunctionOnClick()}
    >
      <img src={icon} alt="Buguer" />
      <span>{text}</span>
    </SideBarButtonContainer>
  );
};

SideBarButton.defaultProps = {
  isCallWaiter: false,
  route: null,
  category: null,
  // onClick: () => console.log('Sem função de onClick'),
};

export default SideBarButton;
