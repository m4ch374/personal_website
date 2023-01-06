import React from "react";

interface IContentContainer {
  children?: string | JSX.Element | JSX.Element[],
  className?: string
}

const ContentContainer: React.FC<IContentContainer> = ({children, className}) => {
  return (
    <div className={`pt-3 pb-[80px] min-w-[100%] grid grid-flow-row place-items-center ${className}`}>
      {children}
    </div>
  )
}

export default ContentContainer
