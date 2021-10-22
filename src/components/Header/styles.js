import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 14.8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;

  border-radius: 0 0 20px 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  
  background: #A4E4FF;

  .social a {
    padding: 1rem;
  }

  .title {
    font-size: 7.2rem;
    font-weight: 600;
    background-clip: text;
    background: linear-gradient(89.9deg, rgba(237, 36, 255, 0.8) -9.58%, #001AFF 45.88%, rgba(255, 49, 36, 0.8) 107.01%);
    -webkit-font-smoothing: antialiased;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    position: relative;
    animation: move 3s infinite;
    -webkit-animation: move 5s infinite; 
  }

  .themeButton {
    width: 10rem;
    height: 4rem;
    border: none;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
  }

  @keyframes move {
    0% {
      top: -10px
    }
    50% {
      top: 10px;
    }
    100% {
      top: 0px;
    }
  }

`;