import { AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ClickedMenu from "./ClickedMenu";

const HamburgerStroke: React.FC = () => {
  return <div className="
    w-[24px] 
    h-[1px] 
    rounded-xl 
    bg-slate-600
    dark:bg-slate-200 
    dark:group-hover:bg-white 
    my-[7px] 
    mx-[4px]" 
  />
}

const HamburgerMenuIcon: React.FC = () => {
  return (
    <div className="group 
    cursor-pointer 
    px-[2px] 
    py-[3px] 
    rounded-md 
    mr-4 
    hover:bg-[#d3c7b1] 
    dark:hover:bg-[#252525] 
    ">
      <HamburgerStroke />
      <HamburgerStroke />
      <HamburgerStroke />
    </div>
  )
}

const HamburgerMenu: React.FC = () => {
  const [clicked, setClicked] = useState(false)
  const elem: React.LegacyRef<HTMLDivElement> = useRef(null)

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (elem.current && !elem.current.contains(event.target as Node)) {
        setClicked(false)
      }
    }

    addEventListener('click', handleClick)
    return (() => {
      removeEventListener('click', handleClick)
    })
  }, [elem])

  return (
    <div ref={elem} onClick={() => setClicked((clicked) => !clicked)} 
      className="relative lg:hidden">
      <HamburgerMenuIcon />

      <AnimatePresence>
        {clicked ? <ClickedMenu /> : undefined}
      </AnimatePresence>
    </div>
  )
}

export default HamburgerMenu
