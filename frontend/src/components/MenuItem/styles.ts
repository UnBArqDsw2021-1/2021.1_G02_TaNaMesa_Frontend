import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  width: 50%;
  height: 18em;
  margin: 5em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  border-radius: 0.5rem;
  box-shadow: 3px 4px 10px 1px #00000033;

  img {
    flex: 30%;
    margin: 1.5em;
    max-width: 20em;
    max-height: 20em;
    border-radius: 15px;
  }

  div {
    flex: 60%;
    margin: 0;
    display: grid;
    grid-template-columns: 25% 25% 25% 6.25% 6.25% 6.25% 6.25%;
    grid-template-rows: auto;
    grid-template-areas:
      'name name name name name . .'
      'description description description . . . .'
      '. . . . price price .'
      '. . . button button button button';

    h4 {
      grid-area: name;
      margin: 0;
      padding: 0;
      font-weight: bold;
    }

    p {
      grid-area: description;
      margin: 0;
    }

    h5 {
      margin: 0;
      grid-area: price;
      font-size: 1.5em;
      font-weight: bold;
    }

    button {
      margin: 0.5em;
      height: 2em;
      grid-area: button;
      margin-top: 0;
      border-radius: 30px;
      background: #8e3031;
      text-align: center;
      color: white;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 3px 4px 10px 1px #00000033;
    }
  }
`;
