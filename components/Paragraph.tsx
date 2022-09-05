import React from "react";

interface IParagraph {
  title: string,
  children?: string
}

const Paragraph: React.FC<IParagraph> = ({title, children}) => {
  return (
    <div className="min-w-[600px] max-w-[1000px] px-[100px] grid grid-flow-row">
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
