import React, { useState } from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import HelpButton from 'components/HelpButton';
import { Container } from 'pages/SolicitationWaiter/styles';

const SolicitationWaiter: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const mesas = [
    {
      id: '1',
      mesa: '10',
    },
    {
      id: '2',
      mesa: '11',
    },
    {
      id: '3',
      mesa: '12',
    },
    {
      id: '4',
      mesa: '13',
    },
    {
      id: '5',
      mesa: '14',
    },
    {
      id: '6',
      mesa: '15',
    },
    {
      id: '1',
      mesa: '10',
    },
    {
      id: '2',
      mesa: '11',
    },
    {
      id: '3',
      mesa: '12',
    },
    {
      id: '4',
      mesa: '13',
    },
    {
      id: '5',
      mesa: '14',
    },
    {
      id: '6',
      mesa: '15',
    },
  ];

  return (
    <>
      <NavBar left="Voltar" />
      <Container>
        <SideBar page="menu-waiter" hasLogo />
        <div className="buttons">
          <div className="title">
            Clique sobre a mesa quando atender a solicitação de ajuda
          </div>
          {mesas.map(value => {
            return (
              <div className="button-mesas">
                <HelpButton
                  key={value.id}
                  checked={checked}
                  onToggle={setChecked}
                >
                  Mesa {value.mesa}
                </HelpButton>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default SolicitationWaiter;
