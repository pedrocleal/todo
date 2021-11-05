import { useState, useMemo, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../../styles/global';

import Main from "../Main/Main";

import themes from "../../styles/themes";

function App() {

  const [ theme, setTheme ] = useState('dark');

  useEffect(() => {
    const storagedTheme = localStorage.getItem('theme');
    setTheme(storagedTheme);
  }, [])

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.light;
  }, [theme]);
  
  function handleToggleTheme() {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    setTheme(prevState => prevState === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Main theme={theme} onToggleTheme={handleToggleTheme}/>
    </ThemeProvider>
  );
}

export default App;