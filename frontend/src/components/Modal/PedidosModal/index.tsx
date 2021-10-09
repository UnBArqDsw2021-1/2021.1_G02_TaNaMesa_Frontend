/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import { Container } from './styles';
import { Status } from '../../../pages/Pedidos/styles';

interface Mesa {
  id: number;
  comandas: Array<Comanda>;
}

interface Comanda {
  id: number;
  pessoa: Client;
  itens: Array<Item>;
}

interface Client {
  name: string;
  totalPrice: number;
}

interface Item {
  id: number;
  quantity: number;
  name: string;
  price: number;
  obs?: string;
}

type Props = {
  visible: boolean;
  table: Mesa;
  onClose: (event: any) => void;
};

const PedidosModal: React.FC<Props> = ({ visible, table, onClose }) => {
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

        <span>Mesa {table.id}</span>

        <div className="comandas">
          {table.comandas.map((comanda, index) => (
            <div className="comanda" key={comanda.id}>
              <div className="resume">
                <div className="person">
                  <Status color="#EB4040" />
                  <h6>
                    Comanda {index + 1} - {comanda.pessoa?.name}
                  </h6>
                </div>
                <div className="buttons">
                  <button
                    type="button"
                    data-target={`orders-${index + 1}`}
                    onClick={e => toggleOrders(e)}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div id={`orders-${index + 1}`} className="orders">
                {comanda.itens.map(item => (
                  <div className="item" key={item.id}>
                    <div className="name">
                      {item.quantity}x {item.name}
                    </div>
                    {item.obs ? <span>Observação: {item.obs}</span> : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PedidosModal;
