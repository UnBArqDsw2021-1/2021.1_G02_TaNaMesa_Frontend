/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import Icons from 'utils/assets';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import ComandaModal from 'components/Modal/ComandaModal';
import { useUserTheme } from 'hooks/theme';
import { useUser } from 'hooks/user';
import { getOrdersByTableId } from 'services/orders';
import { createContain } from 'services/contains';
import Loading from 'components/Loading';
import { Container } from './styles';

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

export enum ENUM {
  'na fila',
  'na cozinha',
  'preparando',
  'na mesa',
  'solicitacao pagamento',
  'pagamento realizado',
}

interface Client {
  idClient: number;
  name: string;
}

interface Order {
  idOrder: number;
  status: ENUM;
  idTable: number;
  client: Client;
  data: Date;
}

interface Contain {
  idOrder: number;
  idItem: number;
  quantity: number;
  observation: string;
}

type Props = {
  visible: boolean;
  item: Item;
  onClose: (event?: any) => void;
};

const OrderModal: React.FC<Props> = ({ visible, item, onClose }) => {
  const modalRef = useRef(null);
  const { theme } = useUserTheme();
  const { table } = useUser();

  const [rightSideModal, setRigthSideModal] = useState('first');
  const [desireCheckbox, setDesireCheckbox] = useState('agora');
  const [observationText, setObservationText] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [isComandaModalOpen, setIsComandaModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeInput = (event: any): void => {
    return setObservationText(event.target.value);
  };

  useEffect(() => {
    getOrdersByTableId(table)
      .then(response => {
        setOrders(response);
        setSelectedOrder(response[0].idOrder);
      })
      .catch(() => {
        setOrders([]);
      });
  }, [isComandaModalOpen]);

  useEffect(() => {
    const escFunction = (event: any): void => {
      if (event.keyCode === 27) onClose(event);
    };

    const handleClick = (event: any): void => {
      if (modalRef.current === event.target) onClose(event);
    };

    document.addEventListener('keydown', escFunction, false);
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [onClose]);

  const onCloseComandaModal = (event: any): void => {
    event.preventDefault();
    setIsComandaModalOpen(false);
  };

  const handleSubmit = (): void => {
    const contain: Contain = {
      idOrder: selectedOrder,
      idItem: item.idItem,
      quantity: itemQuantity,
      observation:
        `${observationText ? `${observationText}. ` : ''}` +
        `Entregar: ${
          desireCheckbox === 'agora' ? 'Agora' : 'Depois do Pedido'
        }`,
    };

    setIsLoading(true);
    createContain(contain)
      .then(response => {
        onClose();
      })
      .catch(response => {
        console.log(response);
      })
      .finally(() => setIsLoading(false));
  };

  const renderRigthSideModal = (): JSX.Element | null => {
    switch (rightSideModal) {
      case 'first':
        return (
          <div className="modal-rigth">
            <div className="checkboxes">
              <p>Entrega</p>
              <Checkbox
                label="Agora"
                id={1}
                checked={desireCheckbox === 'agora'}
                onClick={_ => setDesireCheckbox('agora')}
              />
              <Checkbox
                label="Depois do pedido"
                id={2}
                checked={desireCheckbox === 'depois'}
                onClick={_ => setDesireCheckbox('depois')}
              />
            </div>
            <Button
              color={theme.primary01}
              width="80%"
              onClick={() => setRigthSideModal('second')}
            >
              <span>Próximo</span>
            </Button>
          </div>
        );

      case 'second':
        return (
          <div className="modal-rigth">
            <div className="qtd-obs">
              <p>Quantidade</p>
              <div className="items-qtd">
                <button
                  type="button"
                  className="qtd-circulo"
                  disabled={itemQuantity === 1}
                  onClick={() => setItemQuantity(itemQuantity - 1)}
                >
                  <FiMinus color={theme.white} size="2rem" />
                </button>
                <div
                  style={{ backgroundColor: theme.gray }}
                  className="qtd-circulo"
                >
                  {itemQuantity}
                </div>
                <button
                  type="button"
                  className="qtd-circulo"
                  onClick={() => setItemQuantity(itemQuantity + 1)}
                >
                  <FiPlus color={theme.white} size="2rem" />
                </button>
              </div>
              <p>Observações</p>
              <textarea
                id="observacao"
                name="observacao"
                onChange={onChangeInput}
              />
              <span>
                Deseja realizar alguma alteração no item? Conta pra gente!
              </span>
            </div>
            <Button
              color={theme.primary01}
              width="80%"
              onClick={() => setRigthSideModal('third')}
            >
              <span>Próximo</span>
            </Button>
          </div>
        );

      case 'third':
        return (
          <>
            <div className="modal-rigth">
              <div className="checkboxes">
                <p>Comanda</p>
                {orders.length === 0 ? (
                  <h5>Nenhuma comanda cadastrada</h5>
                ) : (
                  orders.map(order => (
                    <Checkbox
                      key={order.idOrder}
                      label={order.client.name}
                      id={order.idOrder}
                      checked={selectedOrder === order.idOrder}
                      onClick={() => setSelectedOrder(order.idOrder)}
                    />
                  ))
                )}

                <Button
                  color={theme.secondaryGreen}
                  width="18rem"
                  padding="1rem"
                  onClick={() => setIsComandaModalOpen(true)}
                >
                  <span>Criar comanda</span>
                </Button>
              </div>
              <Button
                color={theme.primary01}
                width="80%"
                onClick={handleSubmit}
                disabled={selectedOrder === 0}
              >
                <span>Adicionar ao pedido</span>
              </Button>
            </div>
            <ComandaModal
              visible={isComandaModalOpen}
              onClose={onCloseComandaModal}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Container className={visible ? '-visible' : ''} ref={modalRef}>
      <div className="content">
        <div className="close-button">
          <button type="button" onClick={onClose}>
            x
          </button>
        </div>
        <div className="modal-left">
          <div className="item-info">
            <img
              src={item.image ? `${item.image}` : Icons.without_photo}
              alt={item.name}
            />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
          <div className="buttons">
            <Button
              color={theme.gray}
              width="90%"
              onClick={() => setRigthSideModal('first')}
            >
              <div className="circulo">1</div>
              <span>Entrega</span>
            </Button>
            <Button
              color={theme.gray}
              width="90%"
              onClick={() => setRigthSideModal('second')}
            >
              <div className="circulo">2</div>
              <span>Quantidade e Observações</span>
            </Button>
            <Button
              color={theme.gray}
              width="90%"
              onClick={() => setRigthSideModal('third')}
            >
              <div className="circulo">3</div>
              <span>Comanda</span>
            </Button>
          </div>
        </div>
        {renderRigthSideModal()}
      </div>
      {isLoading && <Loading />}
    </Container>
  );
};

export default OrderModal;
