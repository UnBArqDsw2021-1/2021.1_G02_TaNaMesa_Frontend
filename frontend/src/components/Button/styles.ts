import styled from 'styled-components';

interface NormalButtonProps {
  width?: string;
  padding?: string;
  disabled?: boolean;
}

export const NormalButton = styled.button<NormalButtonProps>`
  padding: ${props => props.padding};
  text-align: center;
  border-radius: 2rem;
  width: ${props => props.width};
  color: ${props => props.theme.white};
  background-color: ${props => props.color};
  opacity: ${props => (props.disabled ? 0.7 : 1)};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  transition: 0.2s all;

  &:hover {
    opacity: ${props => (props.disabled ? 0.7 : 0.9)};
  }
`;
