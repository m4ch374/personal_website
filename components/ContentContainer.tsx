import React from "react";

interface IContentContainer {
  children?: string | JSX.Element | JSX.Element[]
}

const ContentContainer: React.FC<IContentContainer> = ({children}) => {
  return (
    <div className="pt-4 pb-[100px] w-[50vw] min-w-full grid grid-flow-row place-items-center">
      {children}
    </div>
  )
}

export default ContentContainer
