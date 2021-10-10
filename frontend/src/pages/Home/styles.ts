import styled from 'styled-components';

interface ContainerProps {
  isLoginVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  height: 100vh;
  flex-direction: row;
  background-color: ${props => props.theme.background};
  opacity: ${props => (props.isLoginVisible ? 0.6 : 1)};

  @media (max-width: 1000px) {
    div + div {
      display: none;
    }
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
