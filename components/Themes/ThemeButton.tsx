import React, { useContext, useEffect } from "react";
import ImagePrefix from "../../helpers/ImagePrefix";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeProvider";

const ThemeButton: React.FC = () => {
  const prefix = ImagePrefix()
  const [isDark, toggleDark]:any = useContext(ThemeContext)

  useEffect(() => {
    const scrollTheme = isDark ? '#1c1c1c' : '#FAF7F0'

    document.body.style.setProperty('--scrollbar-background', scrollTheme)
  }, [isDark])

  return (
    <motion.div
      whileTap={{scale:0.7}} 
      onMouseDown={toggleDark}
      className="
      h-[35px] 
      w-[35px] 
      rounded-md 
      cursor-pointer 
      bg-[#af60e4]
      hover:bg-[#9e55ce]
      dark:bg-sky-400 
      dark:hover:bg-sky-500
      ">
      <img src={ prefix + `/themeicon.svg`} alt="themeicon" className="object-fill invert-[0.95] dark:invert" />
    </motion.div>
  )
}

export default ThemeButton
