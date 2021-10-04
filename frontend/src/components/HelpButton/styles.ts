import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  padding: 20px;
  font-weight: 800;
  text-align: left;
  font-size: 20px;
  border-radius: 15px;
  width: 100%;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  cursor: pointer;
  transition: 0.2s all;
  flex-basis: 20%;

  img {
    height: 20px;
    width: 20px;
    margin-left: 10px;
  }
  .content {
    width: 97%;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    height: 25px;
    width: 25px;
    background-color: transparent;
  }

  .container input:checked ~ .checkmark {
    background-color: transparent;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 8px;
    top: 3px;
    width: 7px;
    height: 12px;
    border: solid ${props => props.theme.primary01};
    border-width: 0 4px 4px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  @media (max-width: 600px) {
    .content {
      width: 95%;
    }
  }
`;
