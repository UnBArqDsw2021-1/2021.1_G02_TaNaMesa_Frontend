import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.gray};
  border-radius: 15px;
  padding: 12px 15px;
  margin-bottom: 15px;
  width: 100%;

  label {
    display: flex;
    justify-content: start;
    align-items: center;
    font-weight: 500;
    font-size: 15px;
    position: relative;
    height: 25px;
    padding-left: 35px;
    cursor: pointer;
  }

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px ${props => props.theme.black} solid;
    border-radius: 5px;
    background-color: ${props => props.theme.white};
    transition: 0.2s;
  }

  .checkmark:after {
    display: none;
    content: '';
    position: absolute;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid ${props => props.theme.white};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  label:hover input ~ .checkmark {
    background-color: ${props => props.theme.gray};
  }

  label input:checked ~ .checkmark {
    background-color: ${props => props.theme.secondaryWine};
    border: 0;
  }

  label input:checked ~ .checkmark:after {
    display: block;
  }
`;
