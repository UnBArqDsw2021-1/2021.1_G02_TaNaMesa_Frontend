/* eslint-disable */
import React, { FormEvent } from 'react';
import { useHistory } from 'react-router';

import { SideBarButtonContainer } from 'components/SideBarButton/styles';
import { useMenu } from 'hooks/menu';
import { useScreenSize } from 'hooks/screen';
import { useModal } from 'hooks/modal';

interface SideBarButtonProps {
  icon: string;
  text: string;
  isCallWaiter?: boolean;
  route?: string | null;
  category?: string | null;
  solicitationWaiter?: boolean;
  solicitationOrder?: boolean;
}

type Categories =
  | 'hamburgueres'
  | 'petiscos'
  | 'molhos adicionais'
  | 'saladas'
  | 'bebidas'
  | 'sobremesas';

type CategoriesTexts = 'Burguers' | 'Batatas' | 'Bebidas' | 'Sobremesas';

const SideBarButton: React.FC<SideBarButtonProps> = ({
  icon,
  text,
  isCallWaiter,
  route,
  category,
  solicitationWaiter,
  solicitationOrder,
}) => {
  const { changeMenuItemCategory, changeMenuItemCategoryText } = useMenu();
  const { handleSolicitationWaiter, handleSolicitationOrder } = useModal();
  const { switchScreenSize } = useScreenSize();
  const history = useHistory();

  const whichFunctionOnClick = (): ((e: FormEvent) => void) => {
    if (route) {
      return e => {
        e.preventDefault();
        history.push(route);
        switchScreenSize();
      };
    }
    if (category) {
      return e => {
        e.preventDefault();
        changeMenuItemCategory(category as Categories);
        changeMenuItemCategoryText(text as CategoriesTexts);
        switchScreenSize();
      };
    }
    if (solicitationWaiter) {
      return e => {
        e.preventDefault();
        handleSolicitationWaiter(true);
      };
    }
    if (solicitationOrder) {
      return e => {
        e.preventDefault();
        handleSolicitationOrder(true);
      };
    }

    return () =>
      console.log('Ainda não foi especificado o tipo de ação do botão');
  };

  return (
    <SideBarButtonContainer
      hasBorder={isCallWaiter}
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
  solicitationWaiter: false,
  solicitationOrder: false,
  // onClick: () => console.log('Sem função de onClick'),
};

export default SideBarButton;
