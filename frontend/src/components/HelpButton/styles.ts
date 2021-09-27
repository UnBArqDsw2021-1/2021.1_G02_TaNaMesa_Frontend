import styled from 'styled-components';

interface NormalButtonProps {
  width?: string;
  padding?: string;
}

export const Container = styled.button<NormalButtonProps>`
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

  img {
    height: 20px;
    width: 20px;
    margin-left: 10px;
  }
`;
