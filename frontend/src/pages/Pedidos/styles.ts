import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #b96738 0%, #7f2726 100%);
  padding: 3rem 2rem;

  .pedidos {
    display: flex;
    flex-wrap: wrap;
  }

  .col {
    flex: 0 0 33.33%;
    max-width: 33.33;
  }

  h3 {
    font-weight: 500;
    margin: 0.3rem 0 0 3rem;
    color: ${props => props.theme.white};
    text-align: center;
  }

  .mesas {
    height: 100%;
    margin-top: 2rem;
    overflow-y: scroll;
    padding: 2rem;
  }

  .mesa {
    background-color: ${props => props.theme.white};
    border-radius: 15px;
    margin-bottom: 2rem;
    padding: 2rem;

    .status {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  h5 {
    font-weight: 500;
  }
`;

export const Status = styled.div`
  background: ${props => props.color};
  height: 20px;
  width: 20px;
  border-radius: 20px;
  display: inline-block;
`;
