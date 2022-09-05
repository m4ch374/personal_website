import React from "react";

interface IMyButton {
  children?: string
}

const MyButton: React.FC<IMyButton> = ({ children }) => {
  return (
    <div>
      <button className="text-3xl 
        bg-purple-400 
        px-6 
        py-2 
        rounded-lg 
        transition-colors 
        duration-200 
        hover:bg-purple-500"
        >
          {children}
      </button>
    </div>
  )
}

export default MyButton
