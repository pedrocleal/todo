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
  
  background: ${props => props.theme.headerBackground};

  .social a {
    padding: 1rem;
  }

  .title {
    font-size: 7.2rem;
    font-weight: 600;
    background-clip: text;
    background: ${props => props.theme.titleColor};
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