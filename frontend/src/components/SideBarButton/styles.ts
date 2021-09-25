import styled from 'styled-components';

export const SideBarButtonContainer = styled.button`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 7rem;
  background-color: ${props => props.theme.white};
  padding: 1.5rem 0;
  border-radius: 20px;
  transition: 0.2s all;

  img {
    width: 4rem;
    position: absolute;
    left: 2rem;
  }

  span {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${props => props.theme.black};
    text-align: center;
    margin-left: 2rem;
  }

  & + button {
    margin-top: 2.5rem;
  }

  &:hover {
    box-shadow: 0 0 10px ${props => props.theme.white};
    opacity: 0.8;
  }

  @media (max-width: 900px) {
    span {
      font-size: 2rem;
    }

    img {
      width: 3rem;
      left: 1rem;
    }
  }
`;
