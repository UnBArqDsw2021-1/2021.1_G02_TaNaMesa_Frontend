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
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: -18px;
    right: -18px;

    button {
      height: 36px;
      width: 36px;
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
    font-size: 1.5rem;
    font-weight: bold;
    opacity: 0;
    visibility: hidden;
    position: relative;
    background: ${props => props.theme.white};
    padding: 34px;
    width: 500px;
    border-radius: 10px;

    span {
      font-size: 1.6rem;
      font-weight: bold;
    }
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

  .comandas {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .comanda:nth-child(even) {
    background-color: ${props => props.theme.gray + 70};
    border-radius: 10px;
  }

  .comanda-vazia {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 30rem;
    }
  }

  .comanda {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    &.person span {
      font-size: 1.5rem;
      font-weight: 500;
    }

    .buttons button {
      color: ${props => props.theme.secondaryRed};
    }
    .buttons button:hover {
      color: ${props => props.theme.secondaryWine};
    }
  }

  label {
    font-weight: 600;
    text-align: left;
  }

  .new-comanda {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    input {
      background: ${props => props.theme.white};
      color: ${props => props.theme.black};
      font-weight: bold;
      border: 2px ${props => props.theme.gray} solid;
      height: 40px;
      width: 80%;
      border-radius: 20px;
      padding: 10px;
    }

    button {
      border-radius: 50%;
      background-color: ${props => props.theme.secondaryRed};
      padding: 10px 10px 5px 10px;
      color: ${props => props.theme.white};
      margin-left: 10px;
    }
    button:hover {
      background-color: ${props => props.theme.secondaryWine};
    }
  }
`;
