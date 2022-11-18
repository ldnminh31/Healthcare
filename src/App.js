import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Home from './containers/Home'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { ThemeContext } from './context/themeContext'

const App = () => {

  const context = useContext(ThemeContext);
  const { theme } = context;
  


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Home />
      </>
    </ThemeProvider>
  )
}

export default App