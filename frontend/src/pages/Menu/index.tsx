import React, { useEffect, useState } from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import MenuItem from 'components/MenuItem';
import { useScreenSize } from 'hooks/screen';

import { Container, MenuContainer } from 'pages/Menu/styles';

import { getAllItems, Item } from 'services/items';

const Menu: React.FC = () => {
  const { openMenu } = useScreenSize();

  const [menuItems, setMenuItems] = useState<Item[]>([]);

  useEffect(() => {
    getAllItems().then(response => {
      setMenuItems(response);
    });
  }, []);

  return (
    <>
      <NavBar left="Voltar" center="Mesa" tableTitle="Mesa 1" right="Pedido" />
      <Container>
        <SideBar
          collapse
          size={openMenu ? 'large' : 'small'}
          page="menu-user"
          hasLogo
        />

        <MenuContainer size={openMenu ? 'small' : 'large'}>
          <h1>Cardápio</h1>

          {menuItems.map(item => {
            return (
              <MenuItem
                key={item.idItem}
                image="https://blog.finamac.com/wp-content/uploads/2019/10/309956-como-oferecer-os-melhores-sabores-de-milkshake-para-os-clientes-1280x640.jpg"
                name={item.name}
                price={String(item.price)}
                // discount={0}
                description={`${item.description} ${item.notes}`}
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
