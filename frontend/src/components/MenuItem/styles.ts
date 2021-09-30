import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.white};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 0 10px ${props => props.theme.gray};
  margin-bottom: 2.2rem;

  img {
    width: 30rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 20px;
    margin-right: 4rem;
  }

  @media (max-width: 980px) {
    flex-direction: column;
    img {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h4 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
    color: ${props => props.theme.black};
    margin-bottom: 1rem;
  }

  p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: ${props => props.theme.black};
    margin-bottom: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  p {
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 2.2rem;
  }

  span {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.2rem;
  }

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;
