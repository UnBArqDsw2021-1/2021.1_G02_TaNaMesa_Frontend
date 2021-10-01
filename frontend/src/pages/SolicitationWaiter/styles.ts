import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 6rem);
  flex-direction: row;
  width: 100%;
  background-color: ${props => props.theme.white};

  .buttons {
    flex-direction: column;
    width: 100%;
  }

  .title {
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    background-color: ${props => props.theme.white};
    height: 60px;
    padding: 20px;
  }
`;
