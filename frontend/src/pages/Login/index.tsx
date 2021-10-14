import React, { useState } from 'react';

import LoginModal from 'components/Modal/LoginModal';
import BackgroundHamburguer from 'components/BackgroundHamburguer';

const Login: React.FC = () => {
  const [isLoginVisible] = useState(true);

  return (
    <>
      <BackgroundHamburguer />
      <LoginModal title="Login" visible={isLoginVisible} />
    </>
  );
};

export default Login;
