/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useScreenSize } from 'hooks/screen';
import Icons from 'utils/assets';
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import HelpButton from 'components/HelpButton';
import AlertModal from 'components/Modal/AlertModal';

import { getAllOrders } from 'services/orders';

import {
  Container,
  SolicitationPaymentWaiterContainer,
} from 'pages/SolicitationPaymentWaiter/styles';

const SolicitationPaymentWaiter: React.FC = () => {
  const { openMenu, switchActualScreen } = useScreenSize();
  const [modalOpen, setModalOpen] = useState(false);
  const [orderArray, setOrderArray] = useState<any[]>([]);
  const [idOrder, setIdOrder] = useState(0);

  const onCloseModal = (event: any) => {
    event.preventDefault();
    setModalOpen(false);
  };

  const handleOnChange = (position: number): void => {
    console.log(position);
  };

  useEffect(() => {
    switchActualScreen('waiter-help');
    getAllOrders()
      .then(response => {
        console.log(response);
        // setOrderArray(oldArray => [...oldArray, item]);
      })
      .catch(() => {
        setOrderArray([]);
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
        <SolicitationPaymentWaiterContainer size={openMenu ? 'small' : 'large'}>
          <div className="title">
            Clique sobre a mesa quando atender a solicitação de ajuda
          </div>
          {orderArray &&
            orderArray.map(value => {
              return (
                <div key={value.idOrder} className="button-mesas">
                  <HelpButton
                    id={value.idOrder}
                    onToggle={() => {
                      handleOnChange(value.idOrder);
                      setModalOpen(true);
                      setIdOrder(value.idOrder);
                    }}
                  >
                    Mesa {value.idOrder}
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
              <p>Mesa {idOrder} retirada da Solicitação de Ajuda!</p>
            </AlertModal>
          </div>
        </SolicitationPaymentWaiterContainer>
      </Container>
    </>
  );
};

export default SolicitationPaymentWaiter;
