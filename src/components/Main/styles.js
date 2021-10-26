import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 10rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 720px;

  .mytodos {
    margin-top: 4.5rem;

    font-size: 4.8rem;
    font-weight: 600;
    background-clip: text;
    background: ${props => props.theme.titleColor};
    -webkit-font-smoothing: antialiased;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`; 

export const InputContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;

  width: 100%;

  background: ${props => props.theme.boxBackground};
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  label {
    font-size: 2.4rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }

  input {
    margin-left: 2rem;
    width: 39rem;
    height: 3.3rem;
    background: ${props => props.theme.inputBackground};
    border: none;
    border-radius: 5px;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    outline: none;
  }

  .addButton,
  .clearButton {
    width: 39.5px;
    height: 32.92px;
    border-radius: 50px;

    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin: 0.5rem;
  }

  .addButton {
    background: #00D1FF;
  }

  .clearButton {
    background: #FFC700;
  }
`;