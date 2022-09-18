import React from "react";
import MenuBar from "./MenuBar";
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

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
    <div className="overflow-hidden">
      <MenuBar />
      <AnimatePresence initial={false} mode="wait">

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
  )
}

export default Layout
