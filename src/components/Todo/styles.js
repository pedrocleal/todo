import styled from "styled-components";

export const TodoContainer = styled.div`
  margin-top: 4rem;
  padding: 12px 28px;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 25px;
  opacity: ${props => props.finished ? 0.4 : 1};
  background-color:  ${props => props.finished ? '#a9f9a8' : '#ffff'};
  background: ${props => props.theme.boxBackground};

  h2 {
    width: 100%;
    font-weight: 700;
    font-size: 2.4rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .finished,
  .remove {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    color: white;
    cursor: pointer;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-radius: 10px;

    @media (max-width: 720px) {
      width: 30px;
      height: 30px;
      border-radius: 10px;
    }
  }

  .finished {
    background: rgba(5, 255, 0, 0.8);
  }
  
  .remove {
    background: rgba(255, 49, 36, 0.8);;
  }
`;