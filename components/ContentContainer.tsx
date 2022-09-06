import React from "react";

interface IContentContainer {
  children?: string | JSX.Element | JSX.Element[],
  className?: string
}

const ContentContainer: React.FC<IContentContainer> = ({children, className}) => {
  return (
    <div className={`pt-4 pb-[100px] w-[50vw] min-w-full grid grid-flow-row place-items-center ${className}`}>
      {children}
    </div>
  )
}

export default ContentContainer
