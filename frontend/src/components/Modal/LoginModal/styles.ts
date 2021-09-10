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
  transition: 500ms;
  background: rgba(0, 0, 0, 0);
  visibility: hidden;

  & > .close-button {
    text-align: right;
    margin: 16px 16px 0;
    height: 24px;

    button {
      padding: 0;
      border: none;
      background: none;
      outline: none;
    }
  }

  & > .content {
    max-height: 100%;
    overflow: auto;
    transition: 500ms;
    transform: scaleX(0.95);
    opacity: 0;
    visibility: hidden;
    position: relative;
    //top: 0;
    padding: 24px;
    margin: 16px;
    text-align: left;
  }

  &.-visible {
    background: rgba(0, 0, 0, 0.7);
    visibility: visible;

    & > .content {
      top: 0;
      visibility: visible;
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;
