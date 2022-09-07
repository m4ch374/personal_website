import React from "react";

interface ISection {
  className?: string,
  children?: string | JSX.Element | JSX.Element[]
}

const Section: React.FC<ISection> = ({className, children}) => {
  return (
    <div className={`min-w-0 sm:w-[90vw] lg:w-[1000px] px-[100px] grid grid-flow-row ${className}`}>
      {children}
    </div>
  )
}

export default Section
