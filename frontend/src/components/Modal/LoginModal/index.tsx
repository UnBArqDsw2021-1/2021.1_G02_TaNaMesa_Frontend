/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'components/Modal/LoginModal/styles';

type Props = {
  title: string;
  visible: boolean;
  onClose: (event: any) => void;
};

const LoginModal: React.FC<Props> = ({ title, visible, onClose }) => {
  const modalRef = useRef(null);
  const [valueSelect, setValueSelect] = useState('Usuario');

  const onChangeDropdown = (event: any): void => {
    return setValueSelect(event.target.value);
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
      <div className="close-button">
        <button type="button" onClick={onClose}>
          x
        </button>
      </div>
      <div className="content">
        {title}
        <div id="dropdown">
          <select
            name="dropdown"
            data-testid="select"
            value={valueSelect}
            onChange={onChangeDropdown}
          >
            <option value="Usuario">Usuário</option>
            <option value="Mesa">Mesa</option>
            <option value="Garcom">Garçom</option>
            <option value="Cozinha">Cozinha</option>
            <option value="Gerencia">Gerência</option>
          </select>
        </div>
        <input type="password" id="password" />
      </div>
    </Container>
  );
};

export default LoginModal;
