/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useScreenSize } from 'hooks/screen';
import Icons from 'utils/assets';
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import HelpButton from 'components/HelpButton';
import AlertModal from 'components/Modal/AlertModal';

import { getAllTables, putOneTable } from 'services/tables';

import {
  Container,
  SolicitationWaiterContainer,
} from 'pages/SolicitationWaiter/styles';

const SolicitationWaiter: React.FC = () => {
  const { openMenu, switchActualScreen } = useScreenSize();
  const [modalOpen, setModalOpen] = useState(false);
  const [mesaArray, setMesaArray] = useState<any[]>([]);
  const [idTable, setIdTable] = useState(0);

  const onCloseModal = (event: any) => {
    event.preventDefault();
    setModalOpen(false);
  };

  const handleOnChange = (position: number): void => {
    putOneTable(position, false)
      .then(() => {
        setMesaArray(mesaArray.filter(item => item.idTable !== position));
      })
      .catch(() => {
        setMesaArray([]);
      });
  };

  useEffect(() => {
    switchActualScreen('waiter-help');
    getAllTables()
      .then(response => {
        response.map(item => {
          if (item.needHelp === true) {
            setMesaArray(oldArray => [...oldArray, item]);
          }
        });
      })
      .catch(() => {
        setMesaArray([]);
      });
  }, [switchActualScreen]);

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
                <div key={value.idTable} className="button-mesas">
                  <HelpButton
                    id={value.idTable}
                    onToggle={() => {
                      handleOnChange(value.idTable);
                      setModalOpen(true);
                      setIdTable(value.idTable);
                    }}
                  >
                    Mesa {value.idTable}
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
