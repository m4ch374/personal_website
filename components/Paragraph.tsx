import React from "react";

interface IParagraph {
  title: string,
  children?: string | JSX.Element | JSX.Element[],
  className?: string
}

const Paragraph: React.FC<IParagraph> = ({title, children, className}) => {
  return (
    <div className={`min-w-0 sm:w-[90vw] lg:w-[1000px] px-[100px] grid grid-flow-row ${className}`}>
      <span className="text-4xl 
            font-bold underline 
            decoration-slate-400/50 
            underline-offset-[7px] 
            decoration-[4px]"
          > 
            {title} 
      </span>
      <span className="pt-2 text-2xl"> {children} </span>
    </div>
  )
}

export default Paragraph
