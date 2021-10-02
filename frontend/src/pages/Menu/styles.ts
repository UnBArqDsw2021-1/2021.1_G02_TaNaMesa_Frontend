import styled, { css } from 'styled-components';

interface MenuContainerProps {
  size: 'large' | 'small';
  hasItems: boolean;
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
  width: 100%;
  /* width: ${props => (props.size === 'large' ? '93%' : '70%')}; */
  height: 100%;
  background-color: ${props => props.theme.background};
  overflow-y: auto;
  padding: 4rem 2.5rem;
  transition: 0.6s ease;
  opacity: ${props => (props.size === 'large' ? 1 : 0.4)};

  ${props =>
    !props.hasItems &&
    css`
      align-items: center;
      justify-content: center;
      text-decoration: none;
      padding: 0 1rem;
    `}

  h1 {
    font-weight: 600;
    font-size: 4rem;
    line-height: 4.9rem;
    color: ${props => props.theme.black};
    margin-bottom: 4rem;
  }

  .menu-vazio {
    width: 20%;
    margin-bottom: 3.6rem;
  }

  .menu-vazio-texto {
    font-weight: normal;
    font-size: 2.4rem;
    text-align: center;
    line-height: 3.6rem;
  }

  @media (max-width: 768px) {
    /* width: ${props => (props.size === 'large' ? '90%' : '55%')}; */
    .menu-vazio-texto {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }

    .menu-vazio {
      width: 45%;
    }
  }
`;

export const EmptyMenuContainer = styled.section``;
