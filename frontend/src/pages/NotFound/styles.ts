import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;

  .content {
    margin: 0;
    top: 50%;
    position: absolute;
  }

  p {
    font-size: 2rem;
    color: ${props => props.theme.black};
  }

  img {
    height: 50px;
    width: 50px;
  }
`;
