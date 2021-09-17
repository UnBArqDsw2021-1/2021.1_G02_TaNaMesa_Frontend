import React from 'react';

import { useUserTheme } from 'hooks/theme';

import Loading from 'components/Loading';
import MenuItem from 'components/MenuItem';
import { Container } from 'pages/Home/styles';

import NavBar from 'components/NavBar';
import SecondNavBar from 'components/NavBar/SecondNavBar';
import ThirdNavBar from 'components/NavBar/ThirdNavBar';
// import FourthNavBar from 'components/NavBar/FourthNavBar';
import FifthNavBar from 'components/NavBar/FifthNavBar';

const Home: React.FC = () => {
  const { switchTheme, theme } = useUserTheme();

  return (
    <Container>
      <NavBar />
      <SecondNavBar />
      <ThirdNavBar />
      {/* <FourthNavBar /> */}
      <FifthNavBar />

      <h1>Tá na Mesa</h1>

      <button type="button" onClick={switchTheme}>
        Trocar tema
      </button>

      <h4>{theme.type}</h4>

      <MenuItem
        // id={0}
        image="https://blog.finamac.com/wp-content/uploads/2019/10/309956-como-oferecer-os-melhores-sabores-de-milkshake-para-os-clientes-1280x640.jpg"
        name="Milkshake"
        price="16.90"
        // discount={0}
        description={
          'Disponível nos sabores morango, chocolate, oreo e creme de\
                    avelã.'
        }
      />
      <Loading />
    </Container>
  );
};

export default Home;
