import React from "react";

interface ISection {
  className?: string,
  children?: string | JSX.Element | JSX.Element[]
}

const Section: React.FC<ISection> = ({className, children}) => {
  return (
    <div className={`min-w-0 
      w-[400px] 
      lg:w-[680px] 
      grid 
      grid-flow-row 
      transition-all
      duration-200
      ease-in-out
      ${className}`}>
      {children}
    </div>
  )
}

export default Section
