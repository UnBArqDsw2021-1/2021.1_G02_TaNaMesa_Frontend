import React from 'react';

import Icons from 'utils/assets';

import { useUserTheme } from 'hooks/theme';

import {
  ItemInfo,
  Container,
  EditAddItemContainer,
  ImageButtonContainer,
  ButtonContainer,
} from 'components/EditAddItem/styles';

import Button from 'components/Button';

type Props = {
  image: string;
  name: string;
  price: string;
  description: string;
};

const EditAddItem: React.FC<Props> = ({ image, name, price, description }) => {
  const { theme } = useUserTheme();

  return (
    <EditAddItemContainer>
      <h1>Item</h1>
      <Container>
        <img src={image ? `${image}` : Icons.without_photo} alt={name} />
        <ImageButtonContainer image={Icons.simbolo_edit}>
          <Button
            color={theme.primary01}
            onClick={() => {
              null;
            }}
          />
        </ImageButtonContainer>

        <ItemInfo>
          <div>
            <h4>Nome:</h4>
            <p>{name}</p>
          </div>
          <div>
            <h4>Descrição:</h4>
            <p>{description}</p>
          </div>
          <div>
            <h4>Valor:</h4>
            <p>R${price}</p>
          </div>
        </ItemInfo>

        <ButtonContainer>
          <Button
            color={theme.primary01}
            onClick={() => {
              null;
            }}
          >
            <span>Salvar</span>
          </Button>
        </ButtonContainer>
      </Container>
    </EditAddItemContainer>
  );
};

export default EditAddItem;
