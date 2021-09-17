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
  & > .close-button {
    display: flex;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    margin-left: 280px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => props.theme.secondaryRed02};
    height: 30px;
    width: 30px;
    margin-bottom: 60px;
    button {
      padding: 0;
      border: none;
      background: none;
      color: ${props => props.theme.white};
      width: 100%;
      outline: none;
    }
    button:hover {
      box-shadow: none;
      transform: none;
    }
  }
  & > .content {
    max-height: 100%;
    overflow: auto;
    text-align: center;
    font-size: 15px;
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
`;