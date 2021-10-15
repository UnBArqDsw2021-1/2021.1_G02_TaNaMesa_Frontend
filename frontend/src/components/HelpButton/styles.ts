import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  padding: 20px;
  font-weight: 800;
  text-align: left;
  font-size: 20px;
  border-radius: 15px;
  width: 100%;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  cursor: pointer;
  transition: 0.2s all;
  flex-basis: 20%;

  img {
    height: 20px;
    width: 20px;
    margin-left: 10px;
  }
  .content {
    width: 97%;
  }

  @media (max-width: 600px) {
    .content {
      width: 95%;
    }
  }
`;
