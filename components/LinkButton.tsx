import React from "react";

interface ILinkButton {
  children?: string,
  href?: string,
  className?: string
}

const MyButton: React.FC<ILinkButton> = ({ children, href, className }) => {
  return (
    <div className={`${className} cursor-pointer`}>
      <a className="text-3xl 
        bg-purple-400  
        px-6 
        py-2 
        rounded-lg 
        transition-colors 
        duration-200 
        hover:bg-purple-500"
        href={href} 
        target="_blank"
        >
          {children}
      </a>
    </div>
  )
}

export default MyButton
