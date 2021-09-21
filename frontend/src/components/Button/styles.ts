import styled from 'styled-components';

interface NormalButtonProps {
  width?: string;
  padding?: string;
  enabled?: boolean;
}

export const NormalButton = styled.button<NormalButtonProps>`
  padding: ${props => props.padding};
  font-weight: 600;
  text-align: center;
  border-radius: 2rem;
  width: ${props => props.width};
  color: ${props => props.theme.white};
  background-color: ${props => props.color};
  opacity: ${props => (props.enabled ? 1 : 0.7)};
  cursor: ${props => (props.enabled ? 'pointer' : 'default')};
  transition: 0.2s all;

  &:hover {
    opacity: ${props => (props.enabled ? 0.9 : 0.7)};
  }
`;
