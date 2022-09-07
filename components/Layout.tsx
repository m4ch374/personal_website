import React from "react";
import MenuBar from "./MenuBar";

interface ILayout {
  children?: string | JSX.Element | JSX.Element[]
}

const Layout: React.FC<ILayout> = ({children}) => {
  return (
    <div>
      <MenuBar />
      
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
