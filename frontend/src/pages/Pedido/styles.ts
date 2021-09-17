import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.white};
`;

export const ContainerOrderList = styled.div`
  display: flex;
  height: 100vh;
  width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerTotal = styled.div`
  display: flex;
  height: 100vh;
  width: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  background-color: ${props => props.theme.gray};
`;
