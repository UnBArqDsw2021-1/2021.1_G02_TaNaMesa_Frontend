import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 6rem);
  flex-direction: row;
  background-color: ${props => props.theme.white};
`;
