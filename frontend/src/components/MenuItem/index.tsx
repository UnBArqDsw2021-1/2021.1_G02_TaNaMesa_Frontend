import React from 'react';

import { MenuItemContainer } from 'components/MenuItem/styles';

type Props = {
  id: number;
  image: string;
  name: string;
  price: string;
  discount: number;
  description: string;
};

const MenuItem: React.FC<Props> = ({
  id,
  image,
  name,
  price,
  discount,
  description,
}) => {
  // const addItem = ({ addItem } = useContext(ItemContext));
  return (
    <MenuItemContainer>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <h5>R${price}</h5>
        <button
          onClick={() => {
            console.log('addItem here');
          }}
        >
          Adicionar
        </button>
      </div>
    </MenuItemContainer>
  );
};

export default MenuItem;
