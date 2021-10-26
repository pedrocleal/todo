import React from "react";

import {HeaderContainer} from "./styles";

import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';

function Header({ onToggleTheme, theme }) {
  
  console.log(theme);

  return (
    <HeaderContainer>
      <div className="social">
        <a href="https://github.com/pedrocleal" target="_blank" rel="noreferrer">
          <img src={github} alt="github"/>
        </a>
        <a href="https://instagram.com/pedrocleall" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram"/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin"/>
        </a>
      </div>

      <h1 className="title">TODO</h1>
    
      <button type="button" className="themeButton" onClick={onToggleTheme}>
        <div className={theme === "light" ? "circleLeft" : "circleRight"}>a</div>
      </button>
    </HeaderContainer>
  );
}

export default Header;