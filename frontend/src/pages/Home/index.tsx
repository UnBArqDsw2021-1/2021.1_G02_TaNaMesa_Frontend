/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import SideBar from 'components/SideBar';
import BackgroundHamburguer from 'components/BackgroundHamburguer';
import AlertModal from 'components/Modal/AlertModal';

import { Container } from 'pages/Home/styles';
import { useScreenSize } from 'hooks/screen';
import { useModal } from 'hooks/modal';

const Home: React.FC = () => {
  const { actualScreen, switchActualScreen } = useScreenSize();
  const {
    solicitationWaiter,
    handleSolicitationWaiter,
    solicitationOrder,
    handleSolicitationOrder,
  } = useModal();

  useEffect(() => switchActualScreen('home'), []);

  return (
    <>
      <Container>
        <SideBar page="menu-home" hasLogo={actualScreen !== 'menu'} />
        <BackgroundHamburguer text="Da mesa pra cozinha e da cozinha pra mesa." />

        <div onClick={() => handleSolicitationWaiter(false)}>
          <AlertModal
            visible={solicitationWaiter}
            onClose={(_: any) => handleSolicitationWaiter(false)}
          >
            <p style={{ marginBottom: '5rem', marginTop: 0 }}>
              O garçom já foi notificado e, em breve, irá até você!
            </p>
          </AlertModal>
        </div>

        <div onClick={() => handleSolicitationOrder(false)}>
          <AlertModal
            visible={solicitationOrder}
            onClose={(_: any) => handleSolicitationOrder(false)}
          >
            <p style={{ marginBottom: '2rem', marginTop: 0 }}>
              Sua conta já foi solicitada, aguarde o garçom para saber as formas
              de pagamento!
            </p>
            <p style={{ marginBottom: '2rem', marginTop: 0 }}>
              Obrigado por comer conosco! :D
            </p>
          </AlertModal>
        </div>
      </Container>
    </>
  );
};

export default Home;
