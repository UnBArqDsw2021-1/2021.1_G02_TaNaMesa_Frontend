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

  img {
    height: 20px;
    width: 20px;
    margin-left: 10px;
  }

  .containerInput {
    display: flex;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 96%;
    position: absolute;
  }

  .containerInput input {
    visibility: hidden;
  }

  .checkmark {
    position: absolute;
    height: 25px;
    width: 25px;
    right: 0;
  }

  .containerInput input:checked ~ .checkmark {
    background-color: ${props => props.theme.white};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .containerInput input:checked ~ .checkmark:after {
    display: block;
  }

  .containerInput .checkmark:after {
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

  @media (max-width: 900px) {
    .containerInput {
      width: 93%;
    }
  }

  @media (max-width: 500px) {
    .containerInput {
      width: 90%;
    }
  }
`;
