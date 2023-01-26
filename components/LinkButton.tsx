import React from "react";
import { motion } from "framer-motion"

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
  const btnAnim = {
    tap: {
      scale: 0.9,
      transition: {
        type:"tween",
        duration: 0.2
      }
    }
  }
  
  return (
    <div className={`${className} group`}>
<<<<<<< HEAD
      <motion.div
        variants={btnAnim}
        whileTap="tap">
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
      </motion.div>
=======
      <a className={`text-2xl 
        bg-[#84DFFF]
        hover:bg-[#56d2ff]
        dark:bg-purple-400  
        dark:hover:bg-purple-500
        px-5 
        py-2 
        rounded-lg 
        transition-colors 
        duration-200 
        ${avalible ? "cursor-pointer" : "cursor-not-allowed"}`}
        href={href} 
        target="_blank"
        rel="noreferrer"
        >
          {children}
      </a>
>>>>>>> 748b3220c22e10f2d4c2294892db9fddff7fd513

        {avalible ? undefined : <MiniPopup />}
    </div>
  )
}

export default MyButton
