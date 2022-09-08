import React from "react";
import Section from "./Section";

interface IParagraph {
  title: string,
  children?: React.ReactNode,
  className?: string
}

const Paragraph: React.FC<IParagraph> = ({title, children, className}) => {
  return (
    <Section className={className}>
      <span className="text-4xl 
            font-bold underline 
            decoration-slate-400/50 
            underline-offset-[7px] 
            decoration-[4px]"
          > 
            {title} 
      </span>
      <div className="pt-2 text-2xl"> {children} </div>
    </Section>
  )
}

export default Paragraph
