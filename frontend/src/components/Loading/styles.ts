import styled from 'styled-components';

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: ${props => props.theme.white + 90};

  div,
  div:before,
  div:after {
    background: transparent;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  div {
    color: ${props => props.theme.black};
    text-indent: -9999em;
    margin: 88px auto;
    margin-top: 20rem;
    position: relative;
    font-size: 3rem;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  div:before,
  div:after {
    position: absolute;
    top: 0;
    content: '';
  }
  div:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }
  div:after {
    left: 1.5em;
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 4em;
    }
  }
`;
