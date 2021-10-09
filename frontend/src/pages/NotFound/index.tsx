import React from 'react';
import { Container } from 'pages/NotFound/styles';
import Icons from 'utils/assets';

const NotFound: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <p>Página não encontrada, tente uma rota válida!!</p>
        <img src={Icons.not_found} alt="notFound" />
      </div>
    </Container>
  );
};

export default NotFound;
