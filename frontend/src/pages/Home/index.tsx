import React, { useEffect, useState } from 'react';

import SideBar from 'components/SideBar';
import BackgroundHamburguer from 'components/BackgroundHamburguer';
// import Loading from 'components/Loading';

import { Container } from 'pages/Home/styles';
import { useScreenSize } from 'hooks/screen';
import LoginModal from 'components/Modal/LoginModal';

const Home: React.FC = () => {
  const { actualScreen, switchActualScreen } = useScreenSize();

  const [isLoginVisible, setIsLoginVisible] = useState(true);

  useEffect(() => switchActualScreen('home'), [switchActualScreen]);

  return (
    <>
      <Container isLoginVisible={isLoginVisible}>
        <SideBar page="menu-home" hasLogo={actualScreen !== 'menu'} />
        <BackgroundHamburguer text="Da mesa pra cozinha e da cozinha pra mesa." />

        {/* <Loading /> */}
      </Container>
      <LoginModal
        title="Login"
        visible={isLoginVisible}
        onClose={() => setIsLoginVisible(false)}
      />
    </>
  );
};

export default Home;
