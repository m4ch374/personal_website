import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

interface IClickedButton {
  children?: string | JSX.Element,
  href?: string,
  blank?: boolean
}

const ClickedButton: React.FC<IClickedButton> = ({children, href='/', blank=false}) => {
  return (
    <Link href={href} scroll={false}> 
      <a className="pl-3 text-xl hover:bg-[#1c1c1c] transition-all duration-300"
      target={blank ? "_blank": "_self"}> {children} </a>
    </Link>
  )
}

const ClickedMenu: React.FC = () => {
  const trans = {
    hidden: {
      width: '30px',
    },
    visible: {
      width: '160px',
      transition: {
        type: "spring",
        stiffness: 1000,
        damping: 40,
      }
    },
    exit: {
      width: '10px',
      transition: {
        type: "tween",
        duration: 0.3
      }
    }
  }

  return (
    <motion.div 
      variants={trans}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute
      right-1
      top-9
      bg-[#2b2b2b]
      grid
      grid-flow-row
      place-items-stretch
      rounded-md
      py-2
      overflow-hidden
      "> 
      <ClickedButton> Home </ClickedButton>
      <ClickedButton href="/projects"> Projects </ClickedButton>
      <ClickedButton href="https://github.com/m4ch374/personal_website" blank={true}> Source </ClickedButton>
    </motion.div>
  )
}

export default ClickedMenu
