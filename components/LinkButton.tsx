import React from "react";

const MiniPopup: React.FC = () => {
  return (
    <div className="absolute 
      -left-[130px] 
      top-0 
      translate-y-1/4
      bg-[#313131] 
      text-white 
      pr-2 
      pl-1 
      rounded-md 
      scale-0 
      group-hover:scale-100 
      transition-transform 
      duration-[50ms] 
      ease-in-out
      ">
        <span> &#128683;Unavailable :( </span>
    </div>
  )
}

interface ILinkButton {
  children?: string,
  href?: string,
  avalible?: boolean
  className?: string
}

const MyButton: React.FC<ILinkButton> = ({ children, href, avalible=true, className }) => {
  return (
    <div className={`${className} group`}>
      <a className={`text-2xl 
        bg-purple-400  
        px-5 
        py-2 
        rounded-lg 
        transition-colors 
        duration-200 
        hover:bg-purple-500
        ${avalible ? "cursor-pointer" : "cursor-not-allowed"}`}
        href={href} 
        target="_blank"
        rel="noreferrer"
        >
          {children}
      </a>

      {avalible ? undefined : <MiniPopup />}
    </div>
  )
}

export default MyButton
