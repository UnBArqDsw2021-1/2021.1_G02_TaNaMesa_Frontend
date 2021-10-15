/* eslint-disable no-alert */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';

import Icons from 'utils/assets';

import { FiTrash2, FiPlus } from 'react-icons/fi';

// import { getComanda, postComanda, deleteComanda } from 'services/items';
import { useUser } from 'hooks/user';
import {
  getOrdersByTableId,
  ENUM,
  createOrder,
  deleteOrder,
} from 'services/orders';
import { createClient, deleteClient } from 'services/clients';
import { deleteContain, getOneContain } from 'services/contains';
import { Container } from './styles';

type Props = {
  visible: boolean;
  onClose: (event: any) => void;
};

interface Client {
  name: string;
  idClient: number;
}

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
  status: ENUM;
  idTable: number;
  client: Client;
  idClient: number;
  data: Date;
  items: Item[];
}

const ComandaModal: React.FC<Props> = ({ visible, onClose }) => {
  const { table } = useUser();
  const modalRef = useRef(null);
  const [comandas, setComandas] = useState<Order[]>([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getOrdersByTableId(table)
      .then(response => {
        setComandas(response);
      })
      .catch(() => {
        setComandas([]);
      });
  }, []);

  const removeItems = async (deletedOrder: Order): Promise<void> => {
    if (deletedOrder.items.length > 0) {
      deletedOrder.items.forEach(async () => {
        const { id } = await getOneContain(deletedOrder.idOrder);
        await deleteContain(id);
      });
    }
  };

  const removePersonFromComanda = async (idOrder: number): Promise<void> => {
    const deletedOrder = comandas.filter(order => order.idOrder === idOrder)[0];
    const newOrders = comandas.filter(order => order.idOrder !== idOrder);

    await removeItems(deletedOrder);
    await deleteOrder(idOrder);
    await deleteClient(deletedOrder.idClient);

    setComandas(newOrders);
  };

  const addPersonToComanda = async (): Promise<void> => {
    const hasOrder = comandas.filter(order => order.client.name === name);

    if (name.length > 0 && hasOrder.length === 0) {
      createClient(name).then(client => {
        createOrder(client.idClient, parseInt(table, 10)).then(order => {
          setComandas([...comandas, { ...order, client }]);
        });
      });
    } else {
      alert(
        'Já existe uma comanda com esse nome na sua mesa ou o campo digitado está vazio.',
      );
    }
    setName('');
  };

  const onChangeInput = (event: any): void => {
    return setName(event.target.value);
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

        <span>Comandas</span>

        <div className="comandas">
          {comandas.map(order => {
            return (
              <div className="comanda" key={order.idOrder}>
                <div className="person">
                  <span>{order.client.name}</span>
                </div>
                <div className="buttons">
                  <button
                    type="button"
                    onClick={() => removePersonFromComanda(order.idOrder)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            );
          })}
          {comandas.length === 0 ? (
            <div className="comanda-vazia">
              <img src={Icons.empty_order} alt="Comanda vazia" />
              <div className="buttons" />
            </div>
          ) : null}
        </div>

        <label htmlFor="name">Digite o nome da nova comanda:</label>

        <div className="new-comanda">
          <input
            type="text"
            id="name"
            data-testid="name"
            value={name}
            onChange={onChangeInput}
          />
          <button type="button" onClick={addPersonToComanda}>
            <FiPlus />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ComandaModal;
