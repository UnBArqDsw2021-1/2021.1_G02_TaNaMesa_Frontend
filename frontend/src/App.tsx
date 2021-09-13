import React from 'react';

import GlobalStyle from 'styles/global';

import NavBar from 'components/NavBar';
import Loading from 'components/Loading';
import MenuItem from 'components/MenuItem';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <MenuItem
        id={0}
        image="https://blog.finamac.com/wp-content/uploads/2019/10/309956-como-oferecer-os-melhores-sabores-de-milkshake-para-os-clientes-1280x640.jpg"
        name="Milkshake"
        price="16.90"
        discount={0}
        description={
          'Disponível nos sabores morango, chocolate, oreo e creme de\
                    avelã.'
        }
      />
      <Loading />
      <GlobalStyle />
    </>
  );
};

export default App;
