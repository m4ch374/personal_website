import React, { useState } from "react";
import { ProjectMeta } from "../pages/projects";
import LinkButton from "./LinkButton"

interface IProjectDetails {
  setPopped: Function,
  projectMeta: ProjectMeta
}

const ProjectDetails: React.FC<IProjectDetails> = ({setPopped, projectMeta}) => {
  return (
    <div className="fixed 
      top-0 
      left-0 
      w-screen
      h-screen
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
            <div className="w-full aspect-[5/2] bg-cover lg:w-[320px] lg:h-full lg:bg-center" style={{"backgroundImage": `url(${projectMeta.thumbnail})`}} />
            <div className="h-full relative flex-grow mr-8">
              <div className="p-8 text-slate-800 grid grid-flow-row gap-2">
                <span className="text-4xl font-bold"> {decodeURI(projectMeta.name)} </span>
                <span className="text-2xl"> {projectMeta.description}  </span>
                <hr className="border-gray-400/80" />
                <div>
                  <span className="text-2xl"> Features: </span>
                  <ul className="list-disc pl-[30px] text-xl">
                    { projectMeta.features.map((feats: string) => <li>{feats}</li>) }
                  </ul>
                </div>
                <div className="absolute bottom-32 text-xl gap-4 inline-flex">
                  <div>
                    <span className="bg-purple-600/90 text-purple-200 px-2 rounded-md font-bold"> Stack </span>
                  </div>
                  <span> { projectMeta.stack.join(', ') } </span>
                </div>
                <LinkButton className={`absolute bottom-8 right-0 ${projectMeta.projectUrl==="N/A" ? "cursor-not-allowed" : ""}`} href={projectMeta.projectUrl==="N/A" ? undefined : projectMeta.projectUrl}> Source &rarr; </LinkButton>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

interface IProjectCard {
  projectDetail: ProjectMeta
}

const ProjectCard: React.FC<IProjectCard> = ({projectDetail}) => {
  const [popped, setPopped] = useState(false)

  return (
    <div className="grid grid-flow-row place-items-center w-[50vw] lg:w-[300px]">
      <div className={`hover:scale-110 
        transition-transform
        duration-[350ms]
        w-[55vw]
        aspect-[3/2]
        lg:w-[300px] 
        bg-cover 
        bg-center
        rounded-xl 
      `}
      style={{backgroundImage: `url(${projectDetail.thumbnail})`}}
      onClick={() => setPopped(true)} />
      <span className="text-xl pt-5 text-center font-sans"> 
        {projectDetail.description}
      </span>

      {popped ? <ProjectDetails setPopped={setPopped} projectMeta={projectDetail} /> : undefined}
    </div>
  )
}

export default ProjectCard
