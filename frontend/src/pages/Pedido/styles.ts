import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 6rem);
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.white};

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: ${props => props.theme.black};
    margin-bottom: 0;
  }

  h2 {
    margin: 0;
    font-weight: 600;
    font-size: 1.8rem;
    color: ${props => props.theme.black};
  }

  h3 {
    display: flex;
    flex-direction: column;

    font-weight: 500;
    font-size: 1.6rem;
    margin: 0.3rem 0 0 3rem;
    color: ${props => props.theme.black};
  }

  span {
    font-weight: 500;
    font-size: 1.6rem;
    margin: 0.3rem 0 0 3rem;
    color: ${props => props.theme.black};
  }

  p {
    margin: 0;
    align-items: inherit;
    font-weight: 600;
    font-size: 1.8rem;
    color: ${props => props.theme.black};
  }

  @media (max-width: 1025px) {
    h1 {
      font-size: 2.3rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    span {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const ContainerOrderList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  overflow-y: auto;

  @media (max-width: 550px) {
    overflow-y: unset;
  }
`;

export const OrderList = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  .pedido-vazio {
    margin-top: 10%;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px dashed ${props => props.theme.black + 60};
  padding: 1rem 1rem 1rem 0;

  &:nth-child(odd) {
    background-color: ${props => props.theme.gray};
  }

  h2 {
    margin: 0 1.5rem;
  }
`;

export const ContainerClientsOrder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem 3rem;
  border-top: 3px solid ${props => props.theme.gray};

  .criar-comanda {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
      width: 3.5rem;
      height: 3.5rem;
      background-color: ${props => props.theme.secondaryGreen};
      border-radius: 50%;

      color: ${props => props.theme.white};
      font-weight: 700;
      font-size: 2rem;
      transition: ease 1s all;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  flex-direction: row;
  overflow-x: auto;
  align-items: center;
  justify-content: start;

  button:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export const ContainerTotal = styled.div`
  width: 30%;
  display: flex;
  overflow-y: auto;
  padding: 2rem 3rem 3rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.gray};

  .total {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;

    h3 {
      margin: 0;
    }
  }

  .valor-total {
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .cliente {
    align-items: center;
  }

  .cliente:first-of-type {
    margin-top: 2rem;
  }

  .pedido h1 {
    margin-bottom: 2rem;
  }

  #linha-horizontal {
    margin: 2rem 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.black};
  }

  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 645px) {
    .pedido {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    overflow-y: unset;
  }
`;
