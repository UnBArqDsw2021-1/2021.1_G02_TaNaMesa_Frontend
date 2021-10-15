import styled from 'styled-components';

interface ContainerProps {
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  visibility: hidden;
  touch-action: none;

  .close-button {
    display: flex;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: -17px;
    right: -17px;

    button {
      height: 34px;
      width: 34px;
      padding: 0;
      border: none;
      background-color: ${props => props.theme.secondaryRed};
      cursor: pointer;
      color: ${props => props.theme.white};
      font-weight: 700;
      outline: none;
    }
    button:hover {
      background-color: ${props => props.theme.secondaryWine};
      box-shadow: none;
      transform: none;
    }
  }

  & > .content {
    max-height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-weight: bold;
    opacity: 0;
    visibility: hidden;
    position: relative;
    background: ${props => props.theme.white};
    padding: 3.4rem;
    width: 300px;
    border-radius: 10px;
  }

  &.-visible {
    background: rgba(0, 0, 0, 0.7);
    visibility: visible;

    & > .content {
      position: absolute;
      visibility: visible;
      opacity: 1;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  select {
    border: 0 none;
    color: ${props => props.theme.black};
    background: ${props => props.theme.darkGray};
    padding: 10px;
    font-weight: bold;
    font-size: 15px;
    width: 90%;
  }

  #dropdown {
    overflow: hidden;
    margin-top: 10px;
    height: 40px;
    border-radius: 20px;
    background: ${props => props.theme.darkGray};
  }

  #dropdown option {
    color: ${props => props.theme.black};
  }

  #dropdown button {
    font-size: 3rem;
    margin-top: 1rem;
  }

  input {
    background: ${props => props.theme.darkGray};
    color: ${props => props.theme.black};
    font-weight: bold;
    border: ${props =>
      props.hasError ? `2px solid ${props.theme.secondaryRed}` : 'none'};
    height: 40px;
    border-radius: 20px;
    padding: 10px 10px 10px 2.5rem;
    margin-top: 10px;
  }

  .content input[type='password'] {
    margin-bottom: 2rem;
  }

  .content button[type='submit'] {
    font-size: 1.8rem;
    font-weight: 600;
  }

  #error {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${props => props.theme.secondaryRed};
  }
`;
