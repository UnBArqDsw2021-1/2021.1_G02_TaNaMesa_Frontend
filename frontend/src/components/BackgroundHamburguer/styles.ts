import styled from 'styled-components';
import logo from 'assets/hamburguer-background.png';

interface ContainerProps {
  needToBeHidden: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 100px) {
    display: ${props => (props.needToBeHidden ? 'none' : 'flex')};
  }
`;

export const Logo = styled.img`
  width: 40rem;
  margin: 6rem 0;

  @media (max-width: 768px) {
    width: 30rem;
    margin: 3rem 0 0 0;
  }

  @media (max-width: 320px) {
    width: 12rem;
  }

  @media (max-height: 780px) {
    width: 30rem;
    margin: 3rem 0 0 0;
  }

  @media (max-height: 700px) {
    width: 20rem;
  }
`;

export const Slogan = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem 2rem 3rem;
  border-radius: 20px;
  background-color: ${props => props.theme.white + 95};
  margin-bottom: 8rem;
  text-align: center;

  h1 {
    font-weight: 700;
    /* font-size: 4rem; */
    color: ${props => props.theme.black};
    text-shadow: 0 0 20px ${props => props.theme.white};
  }

  @media (max-height: 780px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-height: 700px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;
