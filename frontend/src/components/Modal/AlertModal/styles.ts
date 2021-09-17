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

  p {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
  }

  img {
    width: 100px;
    height: 100px;
    margin-top: 20px;
  }

  & > .content {
    max-height: 100%;
    overflow: auto;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    position: relative;
    background: ${props => props.theme.white};
    padding: 24px;
    width: 400px;
    border-radius: 10px;
  }
  &.-visible {
    background: rgba(0, 0, 0, 0.7);
    visibility: visible;
    font-size: 30px;

    & > .content {
      visibility: visible;
      opacity: 1;
      z-index: -1;
    }
  }
`;
