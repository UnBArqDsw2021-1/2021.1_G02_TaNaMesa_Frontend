import React, { useEffect, useRef, useState } from 'react';

import api from 'api';
import Button from 'components/Button';
import Loading from 'components/Loading';
import { useTheme } from 'styled-components';
import { useUser } from 'hooks/user';

import { Container } from 'components/Modal/LoginModal/styles';

type Props = {
  title: string;
  visible: boolean;
  onClose: (event: any) => void;
};

const LoginModal: React.FC<Props> = ({ title, visible, onClose }) => {
  const { changeToken } = useUser();
  const theme = useTheme();
  const modalRef = useRef(null);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [valueSelect, setValueSelect] = useState('Mesa');

  const onChangeDropdown = (event: any): void => {
    return setValueSelect(event.target.value);
  };

  useEffect(() => {
    const escFunction = (event: any): void => {
      if (event.keyCode === 27) onClose(event);
    };

    const handleClick = (event: any): void => {
      // if (modalRef.current === event.target) onClose(event);
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

  const handleLogin = async (): Promise<void> => {
    try {
      setIsLoading(true);
      let body = {};

      if (valueSelect === 'Mesa') body = { table: login, password };
      else body = { cpf: login, password };

      const response = await api.post('login', body);

      setError('');
      changeToken(response.data.token, login);
      onClose(Event);
    } catch (requestError) {
      console.log(requestError);
      setError(`${valueSelect === 'Mesa' ? 'Mesa' : 'CPF'} ou senha inválida.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      hasError={!!error}
      className={visible ? '-visible' : ''}
      ref={modalRef}
    >
      <div className="content">
        <div className="close-button">
          <button type="button" onClick={onClose}>
            x
          </button>
        </div>
        {title}
        <div id="dropdown">
          <select
            name="dropdown"
            data-testid="select"
            value={valueSelect}
            onChange={onChangeDropdown}
          >
            <option value="Mesa">Mesa</option>
            <option value="Garcom">Garçom</option>
            <option value="Cozinha">Cozinha</option>
            <option value="Gerencia">Gerência</option>
          </select>
        </div>
        <input
          value={login}
          onChange={e => setLogin(e.target.value)}
          type="number"
          placeholder={valueSelect === 'Mesa' ? 'Número da Mesa' : 'CPF'}
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="Senha"
        />
        <Button
          type="submit"
          width="100%"
          color={theme.secondaryGreen}
          onClick={handleLogin}
        >
          Login
        </Button>
        {error && <p id="error">{error}</p>}
      </div>
      {isLoading && <Loading />}
    </Container>
  );
};

export default LoginModal;
