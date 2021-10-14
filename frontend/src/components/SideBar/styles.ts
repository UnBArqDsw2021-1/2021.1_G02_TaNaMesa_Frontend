import styled, { css } from 'styled-components';

interface ContainerProps {
  hasLogo?: boolean;
  size: 'large' | 'small' | undefined;
  needToBeStatic: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: ${props => (props.size === 'large' ? 'fixed' : 'static')};
  flex-direction: column;
  align-items: center;
  z-index: 5555;
  justify-content: ${props => (props.hasLogo ? 'none' : 'center')};
  width: ${props => (props.size === 'large' ? '40%' : '10%')};
  padding-top: ${props => (props.size === 'small' ? '2rem' : 0)};
  height: 100vh;
  overflow-y: auto;
  transition: 0.6s ease;
  padding-bottom: 12rem;
  z-index: 1;
  background: linear-gradient(
    180deg,
    ${props => props.theme.primary03} 0%,
    ${props => props.theme.primary02} 100%
  );

  ${props =>
    props.needToBeStatic &&
    css`
      position: static;
    `}

  #logout {
    padding: 1rem;
    font-size: 2rem;
    text-decoration: underline;
    transition: 0.2s all;
  }

  #logout:hover {
    opacity: 0.4;
  }

  @media (max-width: 1000px) {
    width: ${props => (props.size === 'large' ? '100%' : '10%')};
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
