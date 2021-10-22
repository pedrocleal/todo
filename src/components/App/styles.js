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
    background: linear-gradient(89.9deg, rgba(237, 36, 255, 0.8) -9.58%, #001AFF 45.88%, rgba(255, 49, 36, 0.8) 107.01%);
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

  background: #fff;
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
    background: #f1f1f1;
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