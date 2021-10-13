import React from 'react';

import Icons from 'utils/assets';

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
  note: string;
};

const MenuItem: React.FC<Props> = ({
  image,
  name,
  price,
  description,
  note,
}) => {
  const { theme } = useUserTheme();

  return (
    <MenuItemContainer>
      <img
        src={
          image
            ? `${process.env.REACT_APP_API_ENDPOINT}/uploads/${image}`
            : Icons.without_photo
        }
        alt={name}
      />

      <ItemInfo>
        <h4>{name}</h4>
        <p>{description}</p>
        {note ? <p>{note}</p> : null}

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
