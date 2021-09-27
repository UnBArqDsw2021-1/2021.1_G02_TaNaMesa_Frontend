import styled from 'styled-components';

export const Container = styled.div`
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
    font-size: 15px;
    font-weight: bold;
    opacity: 0;
    visibility: hidden;
    position: relative;
    background: ${props => props.theme.white};
    padding: 24px;
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
    color: ${props => props.theme.white};
    background: ${props => props.theme.gray};
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
    background: ${props => props.theme.gray};
  }

  #dropdown option {
    color: ${props => props.theme.black};
  }

  input {
    background: ${props => props.theme.gray};
    color: ${props => props.theme.white};
    font-weight: bold;
    border: none;
    height: 40px;
    border-radius: 20px;
    padding: 10px;
    margin-top: 10px;
  }
`;
