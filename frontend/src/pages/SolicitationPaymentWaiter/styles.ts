import styled from 'styled-components';

interface SolicitationPaymentWaiterContainerProps {
  size: 'large' | 'small';
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  transition: 1s ease;
  height: calc(100vh - 6rem);
`;

export const SolicitationPaymentWaiterContainer = styled.section<SolicitationPaymentWaiterContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  transition: 0.6s ease;
  opacity: ${props => (props.size === 'large' ? 1 : 0.4)};

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
