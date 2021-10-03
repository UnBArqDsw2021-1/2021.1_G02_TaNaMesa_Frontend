import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* height: calc(100vh - 6rem); */
  flex-direction: row;
  background-color: ${props => props.theme.gray};

  .buttons {
    flex-direction: column;
    width: 100%;
    /* overflow-y: scroll; */
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
