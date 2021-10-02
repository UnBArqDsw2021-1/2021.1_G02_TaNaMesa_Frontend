import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.gray};

  .buttons {
    flex-direction: column;
    width: 100%;
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
`;
