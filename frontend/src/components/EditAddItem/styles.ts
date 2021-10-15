import styled from 'styled-components';

interface Props {
  image: string;
}

export const EditAddItemContainer = styled.div`
  margin-left: 45%;
  margin-top: 5%;
  margin-right: 5%;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ImageButtonContainer = styled.div<Props>`
  flex: 2;
`;

export const ItemInfo = styled.div`
  flex: 7;
`;

export const ButtonContainer = styled.div`
  flex: 1;
`;
