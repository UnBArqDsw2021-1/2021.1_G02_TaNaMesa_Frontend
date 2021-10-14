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
    flex-direction: row;
    font-size: 1.5rem;
    font-weight: bold;
    opacity: 0;
    visibility: hidden;
    position: relative;
    background: ${props => props.theme.white};
    padding: 34px;
    width: 800px;
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

  .modal-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .item-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 5rem;

      img {
        width: 90%;
        object-fit: cover;
        border-radius: 20px;
      }

      h4 {
        font-weight: 700;
        font-size: 2.5rem;
        color: ${props => props.theme.black};
        margin-top: 1.5rem;
      }

      p {
        font-weight: 400;
        font-size: 1.8rem;
        color: ${props => props.theme.black};
      }
    }

    .buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: flex-start;

      button {
        display: flex;
        flex-direction: row;
        padding-left: 3rem;
        margin-bottom: 1rem;
        justify-content: start;
        align-items: center;

        .circulo {
          width: 3rem;
          min-width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: ${props => props.theme.primary01};
          display: flex;
          align-items: center;
          justify-content: center;
        }

        span {
          margin-left: 1rem;
          text-align: start;
          color: ${props => props.theme.black};
        }
      }
    }
  }

  .modal-rigth {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 600;
      font-size: 1.8rem;
      color: ${props => props.theme.black};
      margin-bottom: 2rem;
    }

    .checkboxes {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 2rem;

      button span {
        font-weight: 600;
        font-size: 1.4rem;
        color: ${props => props.theme.white};
      }

      h5 {
        margin-bottom: 1rem;
        font-weight: 500;
        font-size: 1.6rem;
      }
    }

    .qtd-obs {
      width: 100%;
      display: flex;
      flex-direction: column;

      .qtd-circulo {
        width: 5rem;
        min-width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: ${props => props.theme.primary01};
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .items-qtd {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 5rem;

        button:hover {
          opacity: 0.9;
        }

        button:disabled {
          opacity: 0.7;
          cursor: auto;
        }
      }

      textarea {
        width: 100%;
        max-width: 100%;
        height: 15rem;
        max-height: 15rem;
        font-weight: 500;
        font-size: 1.5rem;
        border: solid 1px ${props => props.theme.gray};
        border-radius: 1rem;
        padding: 1rem;
      }

      span {
        font-weight: 600;
        font-size: 1.2rem;
        text-align: start;
        color: ${props => props.theme.black};
        margin-top: 1rem;
      }
    }
  }
`;
