import React, { useState } from 'react';
import { useScreenSize } from 'hooks/screen';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import HelpButton from 'components/HelpButton';
import { Container } from 'pages/SolicitationWaiter/styles';

const SolicitationWaiter: React.FC = () => {
  const { openMenu } = useScreenSize();
  const mesas = [
    {
      id: 0,
      mesa: 1,
    },
    {
      id: 1,
      mesa: '2',
    },
    {
      id: 2,
      mesa: '3',
    },
    {
      id: 3,
      mesa: '4',
    },
    {
      id: 4,
      mesa: '5',
    },
    {
      id: 5,
      mesa: '6',
    },
    {
      id: 6,
      mesa: '7',
    },
    {
      id: 7,
      mesa: '8',
    },
    {
      id: 8,
      mesa: '9',
    },
    {
      id: 9,
      mesa: '10',
    },
    {
      id: 10,
      mesa: '11',
    },
    {
      id: 11,
      mesa: '12',
    },
  ];
  const [checked, setChecked] = useState(new Array(mesas.length).fill(false));

  const handleOnChange = (position: number): void => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item,
    );
    setChecked(updatedCheckedState);
  };

  return (
    <>
      <NavBar left="Voltar" />
      <Container>
        <SideBar
          collapse
          size={openMenu ? 'large' : 'small'}
          page="menu-waiter"
          hasLogo
        />
        <div className="buttons">
          <div className="title">
            Clique sobre a mesa quando atender a solicitação de ajuda
          </div>
          {mesas.map(value => {
            return (
              <div key={value.id} className="button-mesas">
                <HelpButton
                  id={value.id}
                  checked={checked[value.id]}
                  onToggle={() => handleOnChange(value.id)}
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
