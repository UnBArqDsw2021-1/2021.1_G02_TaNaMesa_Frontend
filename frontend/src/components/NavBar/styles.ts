import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 7rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.white};
  box-shadow: 0.4rem 0 4rem ${props => `${props.theme.black}25`};

  section {
    display: flex;
    align-items: center;

    svg {
      width: 3.2rem;
      height: 3.2rem;
      color: ${props => props.theme.black};
      margin: 0 0.9rem 0 3rem;
    }

    span {
      font-size: 2.4rem;
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  border: 2px solid ${props => props.theme.gray};
  border-radius: 15px;
  padding: 1rem 4rem;
  margin-right: 2.5rem;

  span {
    font-size: 2.5rem;
    font-weight: 500;
  }
`;
