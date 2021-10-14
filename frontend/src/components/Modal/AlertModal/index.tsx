/* eslint-disable */
import React, { ReactNode, useEffect, useRef } from 'react';
import { Container } from 'components/Modal/AlertModal/styles';
import Button from 'components/Button';
import { useUserTheme } from 'hooks/theme';

type Props = {
  children: ReactNode;
  visible: boolean;
  icon?: string;
  onClose: (event: any) => void;
};

const AlertModal: React.FC<Props> = ({ children, icon, visible, onClose }) => {
  const modalRef = useRef(null);
  const { theme } = useUserTheme();

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
        {icon && <img alt="alertModal" src={icon} />}
        {children}
        <Button color={theme.primary01} onClick={() => onClose}>
          <span>Ok</span>
        </Button>
      </div>
    </Container>
  );
};

AlertModal.defaultProps = {
  icon: '',
};

export default AlertModal;
