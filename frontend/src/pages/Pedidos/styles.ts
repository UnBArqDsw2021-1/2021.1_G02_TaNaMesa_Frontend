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
`;
