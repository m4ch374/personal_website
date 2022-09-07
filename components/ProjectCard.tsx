import React, { useState } from "react";
import LinkButton from "./LinkButton"

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
      bg-opacity-30 
      z-[1000]
      flex
      items-center
      justify-center"
      onClick={() => setPopped(false)}>
        <div onClick={e => e.stopPropagation()}>
          <div className="flex w-[500px] aspect-[3/4] flex-col lg:flex-row lg:w-[850px] lg:aspect-[10/6] bg-[#FFFDE3] rounded-xl place-items-start overflow-hidden">
            <div className="bg-[url('/lol3.png')] w-[500px] aspect-[5/2] bg-cover lg:w-[320px] lg:aspect-[3/5] lg:bg-center" />
            <div className="h-full relative flex-grow mr-8">
              <div className="p-8 text-slate-800 grid grid-flow-row gap-2">
                <span className="text-4xl font-bold"> &#181;sick Bot </span>
                <span className="text-2xl"> A Discord music bot written in python. </span>
                <hr className="border-gray-400/80" />
                <div>
                  <span className="text-2xl"> Features: </span>
                  <ul className="list-disc pl-[30px] text-xl">
                    <li> something </li>
                    <li> another thing </li>
                    <li> another place holder lol </li>
                  </ul>
                </div>
                <div className="absolute bottom-32 flex flex-row text-xl gap-4">
                  <span className="bg-purple-600/90 text-purple-200 px-2 rounded-md font-bold"> Stack </span>
                  <span> Python, something, something else, another thing </span>
                </div>
                <LinkButton className="absolute bottom-8 right-0"> Source &rarr; </LinkButton>
              </div>
            </div>
            
          </div>
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
