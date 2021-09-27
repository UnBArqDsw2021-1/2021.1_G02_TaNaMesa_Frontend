import styled from 'styled-components';

interface NormalButtonProps {
  width?: string;
  padding?: string;
}

export const Container = styled.button<NormalButtonProps>`
  padding: 10px;
  font-weight: 800;
  text-align: left;
  border-radius: 15px;
  width: 100%;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  cursor: pointer;
  transition: 0.2s all;
`;
