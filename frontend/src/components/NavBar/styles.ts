import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.white};
  box-shadow: 0.4rem 0 4rem ${props => `${props.theme.black}25`};

  section {
    display: flex;
    align-items: center;
    margin-left: 3rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${props => props.theme.black};
      margin: 0 0.6rem 0 0rem;
    }

    span {
      font-size: 1.5rem;
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  border: 2px solid ${props => props.theme.gray};
  border-radius: 15px;
  padding: 0.6rem 1.5rem;
  margin-right: 2.5rem;

  span {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
