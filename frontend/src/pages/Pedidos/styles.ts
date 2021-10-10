import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #b96738 0%, #7f2726 100%);
  padding: 3rem 2rem;

  .react-kanban-board {
    height: 100%;
    display: block !important;
    overflow-y: visible !important;
  }

  .react-kanban-board > div {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .react-kanban-column {
    height: auto !important;
    border-radius: 0;
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 2rem 2rem 2rem;
  }

  .react-kanban-column-header {
    font-size: 2.5rem;
    font-weight: 500;
    color: ${props => props.theme.white};
    text-align: center;
  }

  .react-kanban-column > div:nth-child(2) {
    height: 100% !important;
    overflow-y: auto;
  }

  .react-kanban-column > div [role='button'] {
    margin-top: 2rem;
  }

  .react-kanban-column > div > div > div {
    height: inherit;
    width: 100%;
  }

  .mesa {
    width: 100%;
    background-color: ${props => props.theme.white};
    border-radius: 15px;
    text-align: left;
    padding: 2rem;

    .status {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
  }

  .mesa.dragging, .mesa:hover {
    background-color: ${props => props.theme.gray};
  }

  h5 {
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    .react-kanban-column {
      flex: 0 0 33.33%;
      max-width: 33.33%;
    }
  }
}
`;

export const Status = styled.div`
  background: ${props => props.color};
  height: 20px;
  width: 20px;
  border-radius: 20px;
  display: inline-block;
`;
