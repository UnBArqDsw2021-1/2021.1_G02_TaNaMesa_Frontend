import React from 'react';

import GlobalStyle from 'styles/global';

import NavBar from 'components/NavBar';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <GlobalStyle />
    </>
  );
};

export default App;
