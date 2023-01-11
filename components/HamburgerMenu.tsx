import { AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ClickedMenu from "./ClickedMenu";

const HamburgerStroke: React.FC = () => {
  return <div className="w-[24px] h-[1px] rounded-xl bg-slate-200 group-hover:bg-white my-[7px] mx-[4px]" />
}

const HamburgerMenuIcon: React.FC = () => {
  return (
    <div className="group cursor-pointer">
      <HamburgerStroke />
      <HamburgerStroke />
      <HamburgerStroke />
    </div>
  )
}

const HamburgerMenu: React.FC = () => {
  const [clicked, setClicked] = useState(false)
  const elem: any = useRef(null)

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (elem.current && !elem.current.contains(event.target)) {
        setClicked(false)
      }
    }

    addEventListener('click', handleClick)
    return (() => {
      removeEventListener('click', handleClick)
    })
  }, [elem])

  return (
    <div ref={elem} onClick={() => setClicked((clicked) => !clicked)} className="relative lg:hidden mr-4">
      <HamburgerMenuIcon />

      <AnimatePresence>
        {clicked ? <ClickedMenu /> : undefined}
      </AnimatePresence>
    </div>
  )
}

export default HamburgerMenu
