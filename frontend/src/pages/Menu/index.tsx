/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import Loading from 'components/Loading';
import MenuItem from 'components/MenuItem';
import OrderModal from 'components/Modal/OrderModal';
import Icons from 'utils/assets';

import { Container, MenuContainer } from 'pages/Menu/styles';
import { useScreenSize } from 'hooks/screen';
import { getAllItems } from 'services/items';
import { useMenu } from 'hooks/menu';

interface Item {
  category: string;
  createdAt: string;
  description: string;
  discount: number;
  idItem: number;
  image: string;
  name: string;
  notes: string;
  price: number;
  updatedAt: string;
}

const Menu: React.FC = () => {
  const { openMenu, switchActualScreen } = useScreenSize();
  const { selectedCategory, selectedCategoryText } = useMenu();

  const [menuItems, setMenuItems] = useState<Item[]>([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [itemOrderModal, setItemOrderModal] = useState<Item>();

  const onCloseModal = (event: any = null): void => {
    event && event.preventDefault();
    setIsOrderModalOpen(false);
  };

  const openOrderModal = (item: Item): void => {
    setIsOrderModalOpen(true);
    setItemOrderModal(item);
  };

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => switchActualScreen('menu'), []);

  useEffect(() => {
    setIsLoading(true);
    getAllItems(selectedCategory)
      .then(response => {
        setMenuItems(response);
      })
      .catch(() => {
        setMenuItems([]);
      })
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

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

        <MenuContainer
          hasItems={menuItems.length !== 0}
          size={openMenu ? 'small' : 'large'}
        >
          {menuItems.length !== 0 && <h1>{selectedCategoryText}</h1>}

          {menuItems.map(item => {
            return (
              <MenuItem
                key={item.idItem}
                image={item.image}
                name={item.name}
                price={String(item.price)}
                onClick={() => openOrderModal(item)}
                description={item.description}
                note={item.notes}
              />
            );
          })}
          {menuItems.length === 0 ? (
            <>
              <img
                className="menu-vazio"
                src={Icons.sem_itens}
                alt="Sem itens no momento"
              />
              <p className="menu-vazio-texto">Sem items no menu no momento</p>
              <br />
              <p className="menu-vazio-texto">
                Fale com um garçom para mais informações 😋
              </p>
            </>
          ) : null}
        </MenuContainer>
        {isOrderModalOpen && (
          <OrderModal
            visible={isOrderModalOpen}
            item={itemOrderModal as Item}
            onClose={onCloseModal}
          />
        )}
        {isLoading && <Loading />}
      </Container>
    </>
  );
};

export default Menu;
