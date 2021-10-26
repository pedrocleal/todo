import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat',sans-serif;
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
  }

  :root {
    font-size: 62.5%;
    @media (max-width: 720px) {
      font-size: 50%;
    }
  }
`;
