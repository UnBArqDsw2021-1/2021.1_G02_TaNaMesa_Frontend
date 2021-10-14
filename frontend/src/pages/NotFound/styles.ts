import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  height: 100vh;
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* position: absolute; */
  }

  p {
    font-size: 2rem;
    color: ${props => props.theme.black};
  }

  img {
    margin-top: 2rem;
    height: 50px;
    width: 50px;
  }

  a {
    margin-top: 2rem;
    font-size: 2rem;
  }
`;
