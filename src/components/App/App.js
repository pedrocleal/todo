import { useState, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import Main from "../Main/Main";

import GlobalStyle from '../../styles/global';

import themes from "../../styles/themes";

function App() {

  const [ theme, setTheme ] = useState('light');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.light;
  }, [theme]);
  
  function handleToggleTheme() {
    setTheme(prevState => prevState === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Main onToggleTheme={handleToggleTheme}/>
    </ThemeProvider>
  );
}

export default App;