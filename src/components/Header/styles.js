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

  @media (max-width: 720px) {
    height: 9.9rem;
  }

  .social a {
    padding: .5rem;

    @media (max-width: 720px) {
      padding: .2rem;

      img {
        height: 3rem;
      }
    }
  }

  .title {
    font-size: 7.2rem;
    font-weight: 600;
    background-clip: text;
    background: ${props => props.theme.titleColor};
    -webkit-font-smoothing: antialiased;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 720px) {
      font-size: 3.7rem;
    }
  }

  .themeButton {
    width: 10rem;
    height: 4rem;
    border: none;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    @media (max-width: 720px) {
      width: 8rem;
      height: 3rem;
    }
    
    .circleLeft {
      cursor: pointer;
      background: #8c7ae6;
      color: #8c7ae6;
      height: 32px;
      width: 32px;
      border-radius: 20px;
      margin-left: .5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .circleRight {
      cursor: pointer;
      background: #f2b807;
      color: #f2b807;
      height: 32px;
      width: 32px;
      border-radius: 20px;
      margin-left: 6.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 720px) {
        margin-left: 5rem;
      }
    }
    
    .circleLeft, 
    .circleRight {
      @media (max-width: 720px) {
        height: 22px;
        width: 22px;
      }
    }
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