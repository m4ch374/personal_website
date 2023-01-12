import React from "react";
import MenuBar from "./MenuBar";
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import ThemeProvider from "./ThemeProvider";

interface ILayout {
  children?: string | JSX.Element | JSX.Element[]
}

const Layout: React.FC<ILayout> = ({children}) => {
  const router = useRouter()

  const pageTransition = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.75
      }
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.2
      }
    }
  }

  return (
    <ThemeProvider>
      <div className="overflow-hidden dark:bg-[#1c1c1c] dark:text-white">
        <MenuBar />
        <AnimatePresence initial={false} mode="wait" onExitComplete={() => scrollTo({top: 0})}>

          <motion.div 
            key={router.asPath}
            variants={pageTransition}
            initial="out"
            animate="in"
            exit="out"
          >
              {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}

export default Layout
