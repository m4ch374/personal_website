import React, { createContext, useState } from "react";

export const ThemeContext = createContext([true, () => {}])

interface IThemeProvider {
  children?: JSX.Element | JSX.Element[]
}

const ThemeProvider: React.FC<IThemeProvider> = ({children}) => {
  const [isDark, setIsDark] = useState(true)
  const toggleDark = () => setIsDark((isDark) => !isDark)

  return (
    <ThemeContext.Provider value={[isDark, toggleDark]}>
      <div className={isDark ? "dark" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
