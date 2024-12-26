import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()
function ThemeProvider({children}) {
    let [theme, setTheme] = useState("light")
    const value = {
        theme,
        setTheme
    }
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
