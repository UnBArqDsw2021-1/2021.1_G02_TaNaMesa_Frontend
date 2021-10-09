/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useScreenSize } from 'hooks/screen';
import Icons from 'utils/assets';
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import HelpButton from 'components/HelpButton';
import AlertModal from 'components/Modal/AlertModal';

import {
  Container,
  SolicitationWaiterContainer,
} from 'pages/SolicitationWaiter/styles';

const SolicitationWaiter: React.FC = () => {
  const { openMenu, switchActualScreen } = useScreenSize();
  const mesas = [
    {
      id: 0,
      mesa: 1,
    },
    {
      id: 1,
      mesa: '2',
    },
    {
      id: 2,
      mesa: '3',
    },
    {
      id: 3,
      mesa: '4',
    },
    {
      id: 4,
      mesa: '5',
    },
  ];
  const [checked, setChecked] = useState(new Array(mesas.length).fill(false));
  const [modalOpen, setModalOpen] = useState(false);
  const [mesaArray, setMesaArray] = useState(mesas);
  const [idTable, setIdTable] = useState(0);

  const onCloseModal = (event: any) => {
    event.preventDefault();
    setModalOpen(false);
  };

  const handleOnChange = (position: number): void => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item,
    );
    setChecked(updatedCheckedState);
    setMesaArray(mesaArray.filter(item => item.id !== position));
  };

  useEffect(() => switchActualScreen('waiter-help'), [switchActualScreen]);

  return (
    <>
      <NavBar left="Voltar" />
      <Container>
        <SideBar
          collapse
          size={openMenu ? 'large' : 'small'}
          page="menu-waiter"
          hasLogo
        />
        <SolicitationWaiterContainer size={openMenu ? 'small' : 'large'}>
          <div className="title">
            Clique sobre a mesa quando atender a solicitação de ajuda
          </div>
          {mesaArray &&
            mesaArray.map(value => {
              return (
                <div key={value.id} className="button-mesas">
                  <HelpButton
                    id={value.id}
                    checked={checked[value.id]}
                    onToggle={() => {
                      handleOnChange(value.id);
                      setModalOpen(true);
                      setIdTable(value.id + 1);
                    }}
                  >
                    Mesa {value.mesa}
                  </HelpButton>
                </div>
              );
            })}
          <div onClick={() => setModalOpen(false)}>
            <AlertModal
              icon={Icons.simbolo_ok}
              visible={modalOpen}
              onClose={onCloseModal}
            >
              <p>Mesa {idTable} retirada da Solicitação de Ajuda!</p>
            </AlertModal>
          </div>
        </SolicitationWaiterContainer>
      </Container>
    </>
  );
};

export default SolicitationWaiter;
