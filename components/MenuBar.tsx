import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ImagePrefix from "../helpers/ImagePrefix";
import HamburgerMenu from "./HamburgerMenu";

interface IMenuBarBtn {
  children?: string | JSX.Element,
  className?: string,
  href?: string,
  id?: string,
  blank?: boolean
}

const MenuBarBtn: React.FC<IMenuBarBtn> = ({children, className, href="/", id="", blank=false}) => {
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
    <Link href={href} scroll={false}>
      <a className={`cursor-pointer 
          relative 
          py-1
          px-2
          ${className} 
          ${isFocused ? focusedStyle : unfocusedStyle}
          `
        }
        target={blank ? "_blank": "_self"}>
          {children}
      </a>
    </Link>
  )
}

const MenuBar: React.FC = () => {
  const prefix = ImagePrefix()

  return (
    <div className="backdrop-blur-[20px] 
        bg-[#1c1c1c]
        bg-opacity-50 
        grid 
        grid-rows-1  
        py-2 
        grid-flow-col 
        justify-center 
        text-2xl 
        fixed 
        w-[100%]
        z-[100]"
      >
        <div className="grid grid-flow-col place-items-stretch width-menu">
          <div className="flex flex-row gap-4 ml-4 place-self-start">
            <Link href="/" scroll={false}> 
              <a className="font-bold cursor-pointer py-1 inline-flex align-baseline group">
                <img src={prefix + `/guitar.svg`} alt="guitar" className="w-[25px] h-[25px] bg-cover group-hover:-rotate-[25deg] transition-transform ease-in-out duration-[200ms]" />
                <span className="ml-2"> Henry Wan </span>
              </a> 
            </Link>
            <div className="hidden lg:flex align-middle">
              <MenuBarBtn className="ml-6" href="/projects" id="/projects"> Projects </MenuBarBtn>
              <MenuBarBtn href="https://github.com/m4ch374/personal_website" blank={true}> 
                <div className="inline-flex gap-3 justify-center align-top items-center">
                  <img src={`${prefix}/githubicon.svg`} alt="giticon" className="invert w-[25px] h-[25px] bg-cover"/>
                  <span> Source </span>
                </div>
              </MenuBarBtn>
            </div>
          </div>

          <div className="place-self-x-end mr-2">
            <HamburgerMenu />
          </div>
        </div>
    </div>
  )
}

export default MenuBar
