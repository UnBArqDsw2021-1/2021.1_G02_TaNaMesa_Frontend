import React, { useState } from 'react';

import { useUserTheme } from 'hooks/theme';

// import Loading from 'components/Loading';
import MenuItem from 'components/MenuItem';
import NavBar from 'components/NavBar';

import { Container, StyledButton } from 'pages/Home/styles';
import LoginModal from 'components/Modal/LoginModal';
import ComandaModal from 'components/Modal/ComandaModal';

const Home: React.FC = () => {
  const { switchTheme, theme } = useUserTheme();

  const [showLogin, setShowLogin] = useState(false);
  const [showComanda, setShowComanda] = useState(true);

  return (
    <Container>
      <NavBar center="Mesa" tableTitle="Mesa 1" />
      <NavBar left="Voltar" center="Mesa" tableTitle="Mesa 1" />
      <NavBar left="Voltar" right="Pedido" />
      <NavBar left="Voltar" right="Pedido" isOrderEmpty />
      <NavBar left="Voltar" />
      <NavBar left="Voltar" center="Pedidos" />

      <h1>Tá na Mesa</h1>

      <StyledButton type="button" onClick={switchTheme}>
        Trocar tema
      </StyledButton>

      <h4>{theme.type}</h4>

      <MenuItem
        // id={0}
        image="https://blog.finamac.com/wp-content/uploads/2019/10/309956-como-oferecer-os-melhores-sabores-de-milkshake-para-os-clientes-1280x640.jpg"
        name="Milkshake"
        price="16.90"
        // discount={0}
        description="Disponível nos sabores morango, chocolate, oreo e creme de avelã."
      />

      <LoginModal
        title="Login"
        visible={showLogin}
        onClose={() => setShowLogin(false)}
      />
      <ComandaModal
        visible={showComanda}
        onClose={() => setShowComanda(false)}
      />

      {/* <Loading /> */}
    </Container>
  );
};

export default Home;
