import React from "react";

interface IMiniModelContainer {
  containerRef?: React.LegacyRef<HTMLDivElement>,
  children?: JSX.Element | JSX.Element[]
}

const MiniModelContainer: React.FC<IMiniModelContainer> = ({containerRef, children}) => {
  return (
    <div className="
      grid
      place-items-center
      w-[366px] 
      h-[240px] 
      lg:h-[380px] 
      lg:w-[580px] 
      mt-[70px]
      bg-[#F9F3DF]
      dark:bg-[#1c1c1c]
      " 
    ref={containerRef} >
      {children}
    </div>
  )
}

export const ModelLoadPlaceholder: React.FC = () => {
  return (
    <MiniModelContainer>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: "auto"}} width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke="#85a2b6" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
      </svg>
    </MiniModelContainer>
  )
}

export default MiniModelContainer
