/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import Loading from 'components/Loading';
import MenuItem from 'components/MenuItem';
import OrderModal from 'components/Modal/OrderModal';
import AlertModal from 'components/Modal/AlertModal';
import Icons from 'utils/assets';

import { Container, MenuContainer } from 'pages/Menu/styles';
import { getAllItems } from 'services/items';
import { useMenu } from 'hooks/menu';
import { useModal } from 'hooks/modal';
import { useScreenSize } from 'hooks/screen';

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
  const { solicitationWaiter, handleSolicitationWaiter } = useModal();

  const [menuItems, setMenuItems] = useState<Item[]>([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [itemOrderModal, setItemOrderModal] = useState<Item>();

  const onCloseModal = (event: any = null): void => {
    event && event.preventDefault();
    setIsOrderModalOpen(false);
  };

  const openOrderModal = (item: Item): void => {
    setItemOrderModal(item);
    setIsOrderModalOpen(true);
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
        {isLoading && <Loading />}
      </Container>
    </>
  );
};

export default Menu;
