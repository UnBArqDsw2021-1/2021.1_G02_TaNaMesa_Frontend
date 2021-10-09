import styled from 'styled-components';

interface Props {
  image: string;
}

export const ItemInfo = styled.div`
  display: flex;
`;

export const EditAddItemContainer = styled.div`
  display: flex;
`;

export const ImageButtonContainer = styled.div<Props>`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
