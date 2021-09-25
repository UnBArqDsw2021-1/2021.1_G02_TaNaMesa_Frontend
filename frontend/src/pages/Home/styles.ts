import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: ${props => props.theme.white};

  h1 {
    color: ${props => props.theme.black};
    margin-bottom: 2rem;
  }

  h4 {
    color: ${props => props.theme.black};
    margin-top: 2rem;
  }
`;

export const StyledButton = styled.button`
  background-color: ${props => props.theme.primary03};
  padding: 1rem;
  border-radius: 10px;
  color: ${props => props.theme.black};
  font-weight: bold;
  transition: 0.2s all;

  &:hover {
    box-shadow: 0 0 15px ${props => props.theme.primary03};
    transform: scaleY(1.1) scaleX(1.1);
  }
`;
