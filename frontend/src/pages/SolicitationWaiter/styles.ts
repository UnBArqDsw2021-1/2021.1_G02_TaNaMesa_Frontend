import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  transition: 1s ease;
  height: 100vh;
  overflow-y: hidden;

  .buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    transition: 0.6s ease;
  }

  .title {
    font-size: 1.4rem;
    font-weight: 600;
    width: 100%;
    text-align: center;
    background-color: ${props => props.theme.white};
    height: 6rem;
    padding: 2rem;
  }

  .button-mesas {
    margin: 1rem;
  }

  @media (max-width: 700px) {
    .title {
      height: 10rem;
    }
  }

  @media (max-width: 400px) {
    .title {
      height: 15rem;
    }
  }
`;
