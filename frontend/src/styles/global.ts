import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    /* 1rem = 10px, 10px(target)/16px(browser-default) = 62.5% */
    font-size: 62.5%;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    /* font-family: 'Poppins', sans-serif; */
    transition: background-color .3s;
  }

  body, #root {
    width: 100%;
  }

  button {
    cursor: pointer;
    font-size: 1.6rem;
    background: none;
    border: 0;
  }

  h1, h2, h3, h4, h5 {
    line-height: 1.5;
    font-weight: 600;
  }

  strong {
  }

  h2, h3, h4, h5 {
    margin: 28px 0 20px 0;
  }

  h1 {
    font-size: 4.18rem;
    margin-bottom: 3.2rem;
  }

  h2 {
    font-size: 3.484rem;
  }

  h3 {
    font-size: 2.903rem;
  }

  h4 {
    font-size: 2.419rem;
  }

  h5 {
    font-size: 2.016rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.75;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;
