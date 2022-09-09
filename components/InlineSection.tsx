import React from "react";

interface IInlineSection {
  title: string,
  titleClassName?: string,
  className?: string,
  children?: string
}

const InlineSection: React.FC<IInlineSection> = ({title="placeholder", titleClassName, className, children}) => {
  return (
    <div>
      <div className='inline-flex pt-[15px] text-base'>
        <span className={`mr-5 ${titleClassName}`}> {title} </span>
        <span className={className}> {children} </span>
      </div>
    </div>
  )
}

export default InlineSection
