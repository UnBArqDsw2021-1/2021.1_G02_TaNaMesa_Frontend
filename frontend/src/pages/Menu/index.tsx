import React from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import MenuItem from 'components/MenuItem';

import { Container, MenuContainer } from 'pages/Menu/styles';

const Menu: React.FC = () => {
  return (
    <>
      <NavBar left="Voltar" center="Mesa" tableTitle="Mesa 1" right="Pedido" />
      <Container>
        <SideBar page="menu-user" hasLogo />

        <MenuContainer>
          <h1>Cardápio</h1>
          {Array.from({ length: 10 }, (_, i) => i + 1).map(index => {
            return (
              <MenuItem
                key={index}
                image="https://blog.finamac.com/wp-content/uploads/2019/10/309956-como-oferecer-os-melhores-sabores-de-milkshake-para-os-clientes-1280x640.jpg"
                name="Milkshake"
                price="16.90"
                // discount={0}
                description="Disponível nos sabores morango, chocolate, oreo e creme de avelã."
              />
            );
          })}
        </MenuContainer>

        {/* <Loading /> */}
      </Container>
    </>
  );
};

export default Menu;
