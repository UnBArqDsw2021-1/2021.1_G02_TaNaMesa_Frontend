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
    margin: 0 1.5rem;
    font-weight: 600;
    font-size: 1.8rem;
    color: ${props => props.theme.black};
  }

  h3 {
    font-weight: 600;
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
`;

export const ContainerLeft = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerOrderList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  overflow-y: auto;
`;

export const OrderList = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Item = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  border-bottom: 2px dashed ${props => props.theme.gray};

  h2 {
    margin: 0 1.5rem;
  }
`;

export const ContainerClientsOrder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem 3rem;
  border-top: 3px solid ${props => props.theme.gray};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  button:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export const ContainerTotal = styled.div`
  width: 30%;
  display: flex;
  padding: 2rem 3rem;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.gray};

  #linha-horizontal {
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.black};
  }
`;
