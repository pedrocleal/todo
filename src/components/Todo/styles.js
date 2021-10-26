import styled from "styled-components";

export const TodoContainer = styled.div`
  margin-top: 4rem;
  padding: 12px 28px;
  width: 100%;
  
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 25px;
  opacity: ${props => props.finished ? 0.4 : 1};
  background:  ${props => props.finished ? '#a9f9a8' : '#ffff'};
  background: ${props => props.theme.boxBackground};

  h2 {
    width: 100%;
    font-weight: 700;
    font-size: 2.4rem;
  }

  .finished,
  .remove {
    width: 134px;
    height: 39px;
    color: white;
    cursor: pointer;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-radius: 10px;
  }

  .finished {
    background: rgba(5, 255, 0, 0.8);
  }
  
  .remove {
    background: rgba(255, 49, 36, 0.8);;
  }
`;