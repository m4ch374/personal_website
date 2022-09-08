import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface IMenuBarBtn {
  children?: string | JSX.Element,
  className?: string,
  href?: string,
  id?: string
}

const MenuBarBtn: React.FC<IMenuBarBtn> = ({children, className, href="/", id=""}) => {
  const router = useRouter()
  const currPath = router.pathname

  const isFocused = id === currPath

  const unfocusedStyle = `after:absolute 
                          after:w-[100%] 
                          after:h-[2px]
                          after:bottom-0 
                          after:left-0 
                          after:bg-purple-600 
                          after:origin-bottom-right 
                          after:scale-x-0 
                          after:transition-transform
                          after:duration-[200ms] 
                          hover:after:scale-x-100 
                          hover:after:origin-bottom-left`

  const focusedStyle = `bg-purple-500 rounded-lg`

  return (
    <Link href={href}>
      <a className={`cursor-pointer 
          relative 
          py-2
          px-3
          ${className} 
          ${isFocused ? focusedStyle : unfocusedStyle}
          `
        }>
          {children}
      </a>
    </Link>
  )
}

const MenuBar: React.FC = () => {
  return (
    <div className="backdrop-blur-[20px] 
        bg-[#1c1c1c]
        bg-opacity-50 
        grid 
        grid-rows-1 
        px-[8%] 
        py-3 
        grid-flow-col 
        justify-start 
        text-3xl 
        gap-6 
        fixed 
        w-[100%]
        z-[100]"
      >
        <Link href="/"> 
          <a className="font-bold cursor-pointer py-2"> Anya Forger </a> 
        </Link>
        <MenuBarBtn className="ml-14" href="/projects" id="/projects"> Projects </MenuBarBtn>
        <MenuBarBtn> Source </MenuBarBtn>
    </div>
  )
}

export default MenuBar
