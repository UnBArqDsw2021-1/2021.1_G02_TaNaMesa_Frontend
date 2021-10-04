import React from 'react';

import imgWithoutPhoto from 'assets/sem-foto.jpg';

import { useUserTheme } from 'hooks/theme';

import {
  ItemInfo,
  MenuItemContainer,
  ButtonContainer,
} from 'components/MenuItem/styles';
import Button from 'components/Button';

type Props = {
  image: string;
  name: string;
  price: string;
  description: string;
};

const MenuItem: React.FC<Props> = ({ image, name, price, description }) => {
  const { theme } = useUserTheme();

  return (
    <MenuItemContainer>
      <img
        src={
          image
            ? `${process.env.REACT_APP_API_ENDPOINT}/uploads/${image}`
            : imgWithoutPhoto
        }
        alt={name}
      />

      <ItemInfo>
        <h4>{name}</h4>
        <p>{description}</p>

        <ButtonContainer>
          <p>R${price}</p>
          <Button
            color={theme.primary01}
            onClick={() => {
              null;
            }}
          >
            <span>Adicionar</span>
          </Button>
        </ButtonContainer>
      </ItemInfo>
    </MenuItemContainer>
  );
};

export default MenuItem;
