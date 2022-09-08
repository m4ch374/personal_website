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
        justify-center 
        text-3xl 
        fixed 
        w-[100%]
        z-[100]"
      >
        <div className="flex flex-row gap-6 place-items-start min-w-0 sm:w-[90vw] lg:w-[1000px] px-[100px]">
          <Link href="/"> 
            <a className="font-bold cursor-pointer py-2"> Henry Wan </a> 
          </Link>
          <MenuBarBtn className="ml-14" href="/projects" id="/projects"> Projects </MenuBarBtn>
          <MenuBarBtn href="https://github.com/m4ch374/personal_website"> Source </MenuBarBtn>
        </div>
    </div>
  )
}

export default MenuBar
