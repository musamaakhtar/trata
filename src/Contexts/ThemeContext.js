import React, { createContext, useState } from 'react'

export const ThemeProvider = createContext();

export const ThemeContext = ({children}) =>  {
  const [dark_theme, setDarkTheme] = useState(false)
  return (
    <ThemeProvider.Provider  value={{ dark_theme, setDarkTheme }}>
      {children}
    </ThemeProvider.Provider>
  )
}
