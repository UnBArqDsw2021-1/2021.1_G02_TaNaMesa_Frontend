/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import Icons from 'utils/assets';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { useUserTheme } from 'hooks/theme';
import { getAllOrders } from 'services/orders';
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

interface Order {
  idOrder: number;
  status: string;
  idTable: number;
  idClient: number;
}

type Props = {
  visible: boolean;
  item: Item;
  onClose: (event: any) => void;
};

const OrderModal: React.FC<Props> = ({ visible, item, onClose }) => {
  const modalRef = useRef(null);
  const { theme } = useUserTheme();

  const [rightSideModal, setRigthSideModal] = useState('first');
  const [desireCheckbox, setDesireCheckbox] = useState('agora');
  const [observationText, setObservationText] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [itemsCount, setQItemsCount] = useState(1);

  const onChangeInput = (event: any): void => {
    return setObservationText(event.target.value);
  };

  useEffect(() => {
    /* TODO: Buscar pelo id da mesa logada */
    getAllOrders()
      .then(response => {
        setOrders(response);
      })
      .catch(() => {
        setOrders([]);
      });
  }, []);

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

  const renderRigthSideModal = (): JSX.Element | null => {
    switch (rightSideModal) {
      case 'first':
        return (
          <div className="modal-rigth">
            <div className="checkboxes">
              <p>Deseja</p>
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
                  disabled={itemsCount === 1}
                  onClick={() => setQItemsCount(itemsCount - 1)}
                >
                  <FiMinus color={theme.white} size="2rem" />
                </button>
                <div
                  style={{ backgroundColor: theme.gray }}
                  className="qtd-circulo"
                >
                  {itemsCount}
                </div>
                <button
                  type="button"
                  className="qtd-circulo"
                  onClick={() => setQItemsCount(itemsCount + 1)}
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
          <div className="modal-rigth">
            <div className="checkboxes">
              <p>De quem é?</p>
              {orders.map(order => (
                /* TODO: Pegar o nome do cliente e adicionar lógica de clicar na checkbox */
                <Checkbox
                  label={order.status}
                  id={order.idOrder}
                  onClick={() => {}}
                />
              ))}
              <Button
                color={theme.primary01}
                width="18rem"
                padding="1rem"
                onClick={() => {}} /* TODO: Integrar com a modal de criar comanda */
              >
                <span>Criar comanda</span>
              </Button>
            </div>
            {/* TODO: Fazer a requisição de adicionar item ao pedido */}
            <Button color={theme.primary01} width="80%" onClick={() => {}}>
              <span>Adicionar ao pedido</span>
            </Button>
          </div>
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
              src={
                item.image
                  ? `${process.env.REACT_APP_API_ENDPOINT}/uploads/${item.image}`
                  : Icons.without_photo
                // 'https://www.barbosasupermercados.com.br/wp-content/uploads/2019/05/petit-gateau-01.jpg'
              }
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
              <span>Deseja</span>
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
              <span>De quem é?</span>
            </Button>
          </div>
        </div>
        {renderRigthSideModal()}
      </div>
    </Container>
  );
};

export default OrderModal;
