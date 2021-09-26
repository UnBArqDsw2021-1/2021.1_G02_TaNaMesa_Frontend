import styled from 'styled-components';
import logo from 'assets/hamburguer-background.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
`;

export const Slogan = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem 2rem 3rem;
  border-radius: 20px;
  background-color: ${props => props.theme.white + 70};
  margin-bottom: 8rem;
  text-align: center;

  h1 {
    font-weight: 700;
    /* font-size: 4rem; */
    color: ${props => props.theme.black};
  }
`;
