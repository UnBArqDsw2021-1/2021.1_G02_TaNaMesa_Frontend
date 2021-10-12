import React, { useEffect } from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import EditAddItem from 'components/EditAddItem';
import { Container } from 'pages/EditAddItem/styles';
import { useScreenSize } from 'hooks/screen';

const EditAddItemPage: React.FC = () => {
  const { switchActualScreen } = useScreenSize();

  useEffect(
    () => switchActualScreen('manager-edit-add-item'),
    [switchActualScreen],
  );

  return (
    <>
      <NavBar
        left="Voltar"
        center="Mesa"
        tableTitle="Gerente | Administrador"
      />
      <SideBar page="menu-manager" />
      <Container>
        <EditAddItem
          image=""
          name="xburguer"
          price="10"
          description="Isso aqui é um xburguer"
        />
      </Container>
    </>
  );
};

export default EditAddItemPage;
