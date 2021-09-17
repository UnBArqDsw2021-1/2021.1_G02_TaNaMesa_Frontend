import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.white};

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: ${props => props.theme.black};
    margin-bottom: 0;
  }
`;

export const ContainerOrderList = styled.div`
  display: flex;
  height: 100vh;
  width: 70%;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
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

  h2 {
    margin: 0;
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
`;

export const ContainerTotal = styled.div`
  width: 30%;
  display: flex;
  height: 100vh;
  padding: 2rem 3rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.gray};
`;
