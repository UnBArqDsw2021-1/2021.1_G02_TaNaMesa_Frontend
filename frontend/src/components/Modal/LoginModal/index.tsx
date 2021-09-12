import React, { useEffect, useRef } from 'react';
import { Container } from 'components/Modal/LoginModal/styles';

type Props = {
  title: string;
  visible: boolean;
  onClose: (event: any) => void;
};

const LoginModal: React.FC<Props> = ({ title, visible, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const escFunction = (event: any) => {
      if (event.keyCode === 27) onClose(event);
    };

    const handleClick = (event: any) => {
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
      <div className="content">{title}</div>
    </Container>
  );
};

export default LoginModal;
