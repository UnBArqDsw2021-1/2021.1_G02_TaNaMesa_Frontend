import styled from 'styled-components';

interface MenuContainerProps {
  size: 'large' | 'small';
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 6rem);
  /* position: absolute; */
  /* margin: 0 auto; */
  flex-direction: row;
  background-color: ${props => props.theme.white};
  transition: 1s ease;
`;

export const MenuContainer = styled.section<MenuContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${props => (props.size === 'large' ? '93%' : '70%')};
  height: 100%;
  background-color: ${props => props.theme.background};
  overflow-y: auto;
  padding: 4rem 2.5rem;
  transition: 1s ease;

  h1 {
    font-weight: 600;
    font-size: 4rem;
    line-height: 4.9rem;
    color: ${props => props.theme.black};
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    width: ${props => (props.size === 'large' ? '90%' : '55%')};
  }
`;
