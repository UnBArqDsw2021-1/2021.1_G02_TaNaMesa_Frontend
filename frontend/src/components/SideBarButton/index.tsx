import React, { FormEvent } from 'react';
import { useHistory } from 'react-router';

import { SideBarButtonContainer } from 'components/SideBarButton/styles';

interface SideBarButtonProps {
  icon: string;
  text: string;
  isCallWaiter?: boolean;
  route?: string | null;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({
  icon,
  text,
  isCallWaiter,
  route,
}) => {
  const history = useHistory();

  const whichFunctionOnClick = (): ((e: FormEvent) => void) => {
    if (route) {
      return e => {
        e.preventDefault();
        history.push(route);
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
  // onClick: () => console.log('Sem função de onClick'),
};

export default SideBarButton;
