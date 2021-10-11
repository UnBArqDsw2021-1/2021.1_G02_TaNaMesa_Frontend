/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { useUserTheme } from 'hooks/theme';
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

type Props = {
  visible: boolean;
  item: Item;
  onClose: (event: any) => void;
};

const OrderModal: React.FC<Props> = ({ visible, item, onClose }) => {
  const modalRef = useRef(null);
  const { theme } = useUserTheme();

  const [rightSideModal, setRigthSideModal] = useState('first');
  const [qtdItem, setQtdItem] = useState(1);

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
              <Checkbox label="Depois do pedido" id={1} onClick={() => {}} />
              <Checkbox label="Agora" id={2} onClick={() => {}} />
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
                  onClick={() => setQtdItem(qtdItem - 1)}
                >
                  <FiMinus color={theme.white} size="2rem" />
                </button>
                <div
                  style={{ backgroundColor: theme.gray }}
                  className="qtd-circulo"
                >
                  {qtdItem}
                </div>
                <button
                  type="button"
                  className="qtd-circulo"
                  onClick={() => setQtdItem(qtdItem + 1)}
                >
                  <FiPlus color={theme.white} size="2rem" />
                </button>
              </div>
              <p>Observações</p>
              <textarea id="observacao" name="observacao" />
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
              <Checkbox label="Brenda" id={1} onClick={() => {}} />
              <Checkbox label="Sérgio" id={2} onClick={() => {}} />
              <Button
                color={theme.primary01}
                width="18rem"
                padding="1rem"
                onClick={() => {}}
              >
                <span>Criar comanda</span>
              </Button>
            </div>
            <Button
              color={theme.primary01}
              width="80%"
              onClick={() => setRigthSideModal('second')}
            >
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
                // item.image
                //   ? `${process.env.REACT_APP_API_ENDPOINT}/uploads/${item.image}`
                //   : Icons.without_photo
                'https://www.barbosasupermercados.com.br/wp-content/uploads/2019/05/petit-gateau-01.jpg'
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
