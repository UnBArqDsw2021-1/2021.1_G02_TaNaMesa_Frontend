/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';

import { FiTrash2, FiPlus } from 'react-icons/fi';

import { Container } from './styles';

type Props = {
  visible: boolean;
  onClose: (event: any) => void;
};

const LoginModal: React.FC<Props> = ({ visible, onClose }) => {
  const modalRef = useRef(null);
  const [comandas, setComandas] = useState<string[]>([]);
  const [name, setName] = useState('');

  const removePersonFromComanda = (person: string): void => {
    const newComandas = comandas.filter(comanda => comanda !== person);
    setComandas(newComandas);
  };

  const addPersonToComanda = (): void => {
    const newComandas = comandas.slice();

    if (name.length > 0) {
      newComandas.push(name);
      setComandas(newComandas);
      setName('');
    }
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
          {comandas.map((person, index) => {
            const key = index + 1;
            return (
              <div className="comanda" key={key}>
                <div className="person">
                  <span>{person}</span>
                </div>
                <div className="buttons">
                  <button
                    type="button"
                    onClick={() => removePersonFromComanda(person)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            );
          })}
          {comandas.length === 0 ? (
            <div className="comanda">
              <div className="person">
                <span>Nenhuma comanda cadastrada</span>
              </div>
              <div className="buttons" />
            </div>
          ) : null}
        </div>

        <label htmlFor="name">Digite o nome da nova comanda:</label>

        <div className="new-comanda">
          <input type="text" id="name" value={name} onChange={onChangeInput} />
          <button type="button" onClick={addPersonToComanda}>
            <FiPlus />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default LoginModal;
