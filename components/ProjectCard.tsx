import React, { useState } from "react";

interface IProjectDetails {
  setPopped: Function
}

const ProjectDetails: React.FC<IProjectDetails> = ({setPopped}) => {
  return (
    <div className="absolute 
      top-0 
      left-0 
      w-[100%] 
      h-[100%] 
      backdrop-blur-[20px] 
      bg-[#1C1C1C] 
      bg-opacity-50 
      z-[1000]
      flex
      items-center
      justify-center"
      onClick={() => setPopped(false)}>
        <div onClick={e => e.stopPropagation()}>
          something
        </div>
    </div>
  )
}

const ProjectCard: React.FC = () => {
  const [popped, setPopped] = useState(false)

  return (
    <div className="grid grid-flow-row place-items-center w-[300px] h-[200px]">
      <div className="hover:scale-110 
        transition-transform
        duration-[350ms]
        w-[300px] 
        h-[200px] 
        bg-[url('/lol3.png')] 
        bg-cover 
        rounded-xl 
      "
      onClick={() => setPopped(true)}/>
      <span className="text-xl pt-5 text-center font-sans"> 
        A discord music bot coded in Python using Discord API 
      </span>

      {popped ? <ProjectDetails setPopped={setPopped} /> : undefined}
    </div>
  )
}

export default ProjectCard
