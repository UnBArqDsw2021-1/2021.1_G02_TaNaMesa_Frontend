import styled from 'styled-components';

interface ContainerProps {
  hasLogo?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => (props.hasLogo ? 'none' : 'center')};
  width: 30%;
  height: 100%;
  background: linear-gradient(
    180deg,
    ${props => props.theme.primary03} 0%,
    ${props => props.theme.primary02} 100%
  );

  @media (max-width: 768px) {
    width: 45%;
  }
`;

export const Logo = styled.img`
  width: 20rem;
  margin: 6rem 0;

  @media (max-width: 768px) {
    width: 15rem;
    margin: 3rem 0;
  }

  @media (max-width: 320px) {
    width: 12rem;
  }
`;
