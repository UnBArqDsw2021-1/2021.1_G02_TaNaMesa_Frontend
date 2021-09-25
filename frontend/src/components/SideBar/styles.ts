import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 37%;
  height: 100%;
  background: linear-gradient(
    180deg,
    ${props => props.theme.primary03} 0%,
    ${props => props.theme.primary02} 100%
  );

  img {
    width: 20rem;
    margin: 8rem 0;
  }
`;

export const Title = styled.h1``;
