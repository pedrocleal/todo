import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 10rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 720px;
  width: 100%;

  @media (max-width: 720px) {
    width: 90%;
  }

  .mytodos {
    width: 100%;
    margin-top: 4.5rem;
    text-align: center;

    font-size: 4.8rem;
    font-weight: 600;
    background-clip: text;
    background: ${props => props.theme.titleColor};
    -webkit-font-smoothing: antialiased;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 720px) {
      font-size: 3.6rem;
    }
  }
`; 

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.2rem;

  background: ${props => props.theme.boxBackground};
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  .inputDiv {
    @media (max-width: 720px) {
      display: flex;
      justify-content: center;
      align-items: center;
    } 
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 720px) {
      margin-right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    } 
  }

  label {
    font-size: 2.4rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 720px) {
      padding-left: 2rem;
    }
  }

  input {
    margin-left: 2rem;
    width: 39rem;
    height: 3.3rem;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.inputBackground};
    border: none;
    border-radius: 5px;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    outline: none;

    @media (max-width: 520px) {
      width: 14rem;
      margin: 0;
    }

    @media (max-width: 720px) {
      margin-right: .5rem;
      width: 25rem;
    }
  }

  .addButton,
  .clearButton {
    width: 39.5px;
    height: 32.92px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin: 0.5rem;
    @media (max-width: 720px) {
      width: 30px;
      height: 30px;
      border-radius: 10px;
    }
  }

  .addButton {
    background: #00D1FF;
  }

  .clearButton {
    background: #FFC700;
  }
`;