import styled, { css } from 'styled-components';

interface SideBarButtonContainerProps {
  hasBorder?: boolean;
}

export const SideBarButtonContainer = styled.button<SideBarButtonContainerProps>`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 75%;
  background-color: ${props => props.theme.white};
  padding: 2rem 0;
  border-radius: 20px;
  transition: 0.2s all;

  img {
    width: 3rem;
    position: absolute;
    left: 2rem;
  }

  span {
    width: 70%;
    font-size: 2.5rem;
    font-weight: 600;
    color: ${props => props.theme.black};
    margin-left: 2rem;
  }

  & + button {
    margin-top: 2.5rem;
  }

  &:hover {
    box-shadow: 0 0 10px ${props => props.theme.white};
    opacity: 0.8;
  }

  ${props =>
    props.hasBorder &&
    css`
      border: 2px solid ${props.theme.white};
      background-color: ${props.theme.white + 50};
    `}

  @media (max-width: 900px) {
    span {
      font-size: 2rem;
    }

    img {
      width: 3rem;
      left: 1rem;
    }
  }

  @media (max-width: 768px) {
    position: static;
    flex-direction: column;
    padding: 1rem 0;

    img {
      position: static;
      width: 2.5rem;
    }

    span {
      font-size: 2rem;
      margin: 0;
    }
  }

  @media (max-width: 375px) {
    span {
      font-size: 1.5rem;
    }
  }
`;
