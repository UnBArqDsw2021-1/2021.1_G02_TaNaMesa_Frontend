import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  background-color: ${props => props.theme.background};

  @media (max-width: 1000px) {
    div + div {
      display: none;
    }
  }
`;
