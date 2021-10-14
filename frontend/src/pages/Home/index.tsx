/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import SideBar from 'components/SideBar';
import BackgroundHamburguer from 'components/BackgroundHamburguer';
import AlertModal from 'components/Modal/AlertModal';
import Button from 'components/Button';
// import Loading from 'components/Loading';

import { Container } from 'pages/Home/styles';
import { useScreenSize } from 'hooks/screen';
import { useUserTheme } from 'hooks/theme';
import { useWaiter } from 'hooks/waiter';

const Home: React.FC = () => {
  const { theme } = useUserTheme();
  const { actualScreen, switchActualScreen } = useScreenSize();
  const {
    solicitationWaiter,
    handleSolicitationWaiter,
    solicitationOrder,
    handleSolicitationOrder,
  } = useWaiter();

  useEffect(() => switchActualScreen('home'), []);

  return (
    <>
      <Container>
        <SideBar page="menu-home" hasLogo={actualScreen !== 'menu'} />
        <BackgroundHamburguer text="Da mesa pra cozinha e da cozinha pra mesa." />

        <AlertModal
          visible={solicitationWaiter}
          onClose={(_: any) => handleSolicitationWaiter(false)}
        >
          <p style={{ marginBottom: '5rem', marginTop: 0 }}>
            O garçom já foi notificado e, em breve, irá até você!
          </p>
          <Button
            color={theme.primary01}
            onClick={() => handleSolicitationWaiter(false)}
            width="80%"
            padding="1.0rem"
          >
            OK
          </Button>
        </AlertModal>

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
          <Button
            color={theme.primary01}
            onClick={() => handleSolicitationOrder(false)}
            width="80%"
            padding="1.0rem"
          >
            OK
          </Button>
        </AlertModal>

        {/* <Loading /> */}
      </Container>
    </>
  );
};

export default Home;
