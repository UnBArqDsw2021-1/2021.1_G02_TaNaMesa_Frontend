/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';

import { FiPlus } from 'react-icons/fi';

import { Order } from 'services/orders';
import { Item } from 'services/items';

import { Container } from './styles';
import { Status } from '../../../pages/Pedidos/styles';

type Props = {
  visible: boolean;
  order: Order;
  onClose: (event: any) => void;
};

const PedidosModal: React.FC<Props> = ({ visible, order, onClose }) => {
  const modalRef = useRef(null);

  const toggleOrders = (e: any): void => {
    const button = e.currentTarget;
    const id = button.getAttribute('data-target');

    const orders = document.getElementById(id);

    if (orders) {
      if (orders.classList.contains('show')) {
        orders.classList.remove('show');
      } else {
        orders.classList.add('show');
      }
    }
  };

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

  return (
    <Container className={visible ? '-visible' : ''} ref={modalRef}>
      <div className="content">
        <div className="close-button">
          <button type="button" onClick={onClose}>
            x
          </button>
        </div>

        <span>Pedido #{order.idOrder}</span>

        <div className="order-container">
          <div className="order">
            <div className="resume">
              <div className="person">
                <Status color="#EB4040" />
                <h6>Mesa {order.idTable}</h6>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  data-target={`items-${order.idTable}`}
                  onClick={e => toggleOrders(e)}
                >
                  <FiPlus />
                </button>
              </div>
            </div>
            <div id={`items-${order.idTable}`} className="items">
              {order.items.map((item: Item) => (
                <div className="item" key={`i${item.idItem}`}>
                  <div className="name">{item.name}</div>
                  {item.notes ? <span>Observação: {item.notes}</span> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PedidosModal;
