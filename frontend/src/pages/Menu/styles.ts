import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  background-color: ${props => props.theme.white};
`;

export const MenuContainer = styled.section`
  display: flex;
  width: 100%;
  overflow-y: auto;
  flex-direction: column;
  background-color: ${props => props.theme.white};

  h1 {
    color: ${props => props.theme.black};
    margin: 2rem 0 0 4rem;
  }
`;
