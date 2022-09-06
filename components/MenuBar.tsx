import React from "react";

interface IMenuBarBtn {
  children?: string | JSX.Element,
  className?: string
}

const MenuBarBtn: React.FC<IMenuBarBtn> = ({children, className}) => {
  return (
    <a className={`cursor-pointer 
        relative 
        pb-1
        ${className} 
        after:absolute 
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
        hover:after:origin-bottom-left
        `
      }>
        {children}
    </a>
  )
}

const MenuBar: React.FC = () => {
  return (
    <div className="backdrop-blur-[20px] 
        bg-[#121212]
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
        z-[10000]"
      >
        <a className="font-bold cursor-pointer"> Anya Forger </a>
        <MenuBarBtn className="ml-14"> Projects </MenuBarBtn>
        <MenuBarBtn> Source </MenuBarBtn>
    </div>
  )
}

export default MenuBar
