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
      font-size: 2rem;
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
  }

  .comanda + .comanda {
    margin-top: 2rem;
  }

  .comanda {
    border: 1px ${props => props.theme.gray} solid;
    border-radius: 20px;
    padding: 1.2rem;

    .resume {
      display: flex;
      justify-content: space-between;
    }

    .person {
      display: flex;
      align-items: center;

      h6 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-left: 15px;
      }
    }

    .buttons button {
      border-radius: 50%;
      background-color: ${props => props.theme.secondaryWine};
      padding: 10px 10px 5px 10px;
      color: ${props => props.theme.white};
      margin-left: 10px;
    }
    .buttons button:hover {
      background-color: ${props => props.theme.primary04};
    }

    .orders {
      font-size: 1.5rem;
      font-weight: 500;
      text-align: left;
      margin-top: 1rem;
      margin-left: 35px;

      .item {
        margin-bottom: 0.5rem;

        span {
          font-size: 1.5rem;
          font-weight: 400;
          display: block;
          margin-left: 15px;
        }
      }
    }
  }
`;
