import React from 'react';

import GlobalStyle from 'styles/global';

import NavBar from 'components/NavBar';
import Loading from 'components/Loading';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Loading />
      <GlobalStyle />
    </>
  );
};

export default App;
