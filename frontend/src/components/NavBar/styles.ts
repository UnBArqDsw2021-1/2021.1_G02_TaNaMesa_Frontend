import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.white};
  box-shadow: 0.4rem 0 4rem ${props => `${props.theme.black}60`};
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 3rem;
  transition: 0.2s all;
  z-index: 10;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props.theme.black};
    margin: 0 0.6rem 0 0rem;
  }

  span {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${props => props.theme.black};
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const TableContainer = styled.section`
  display: flex;
  align-items: center;
  margin: 0 3rem 0 3rem;

  span {
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme.black};
  }
`;

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  span {
    font-size: 3rem;
    font-weight: 600;
    color: ${props => props.theme.black};
  }
`;

export const RightContainer = styled.div`
  display: flex;
  border: 2px solid ${props => props.theme.gray};
  border-radius: 15px;
  padding: 0.6rem 1.5rem;
  margin-right: 2.5rem;

  span {
    font-size: 2rem;
    font-weight: 500;
    color: ${props => props.theme.black};
  }
`;
