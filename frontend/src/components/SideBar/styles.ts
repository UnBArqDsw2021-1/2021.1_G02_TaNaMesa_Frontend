import styled from 'styled-components';

interface ContainerProps {
  hasLogo?: boolean;
  size: 'large' | 'small' | undefined;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => (props.hasLogo ? 'none' : 'center')};
  width: ${props => (props.size === 'large' ? '30%' : '7%')};
  padding-top: ${props => (props.size === 'small' ? '2rem' : 0)};
  height: 100%;
  overflow-y: auto;
  transition: 1s ease;
  position: relative;
  background: linear-gradient(
    180deg,
    ${props => props.theme.primary03} 0%,
    ${props => props.theme.primary02} 100%
  );

  @media (max-width: 768px) {
    width: ${props => (props.size === 'large' ? '45%' : '10%')};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 20rem;
    margin: 6rem 0;
  }

  @media (max-width: 1150px) {
    img {
      width: 12rem;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 10rem;
      margin: 3rem 0;
    }
  }

  @media (max-width: 320px) {
    img {
      width: 7rem;
    }
  }
`;
