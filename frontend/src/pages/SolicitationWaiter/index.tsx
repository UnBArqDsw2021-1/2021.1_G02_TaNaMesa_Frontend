import React, { useState } from 'react';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import HelpButton from 'components/HelpButton';
import { Container } from 'pages/SolicitationWaiter/styles';

const SolicitationWaiter: React.FC = () => {
  const [checked, setChecked] = useState('');
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
      id: '7',
      mesa: '10',
    },
    {
      id: '8',
      mesa: '11',
    },
    {
      id: '9',
      mesa: '12',
    },
    {
      id: '10',
      mesa: '13',
    },
    {
      id: '11',
      mesa: '14',
    },
    {
      id: '12',
      mesa: '15',
    },
  ];

  return (
    <>
      <NavBar left="Voltar" />
      <Container>
        {/* <SideBar page="menu-waiter" hasLogo /> */}
        <div className="buttons">
          <div className="title">
            Clique sobre a mesa quando atender a solicitação de ajuda
          </div>
          {mesas.map(value => {
            return (
              <div key={value.id} className="button-mesas">
                <HelpButton
                  id={value.id}
                  checked={checked}
                  onToggle={() => setChecked(value.id)}
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
