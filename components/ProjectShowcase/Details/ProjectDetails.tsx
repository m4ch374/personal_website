import React from "react";
import { ProjectMeta } from "../../../pages/projects";
import ImagePrefix from "../../../helpers/ImagePrefix";
import { motion } from "framer-motion";
import LinkButton from "../../LinkButton"
import ProjectDetailsBackground from "./ProjectDetailsBackground";

interface IProjectDetails {
  setPopped: Function,
  projectMeta: ProjectMeta
}

const ProjectDetails: React.FC<IProjectDetails> = ({setPopped, projectMeta}) => {
  const prefix = ImagePrefix()
  const avalible = projectMeta.projectUrl!=="N/A"

  const popIn = {
    hidden: {
      transform: 'scale(0.3)',
      opacity: 0
    },
    visible: {
      transform: 'scale(1)',
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
      }
    },
    exit: {
      transform: 'scale(0.2)',
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.2
      }
    }
  }
  return (
    <ProjectDetailsBackground togglePop={() => setPopped(false)}>
      <motion.div 
        variants={popIn} 
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex w-[400px] aspect-[3/4] flex-col lg:flex-row lg:w-[680px] lg:aspect-[10/6] bg-[#FFFDE3] rounded-xl place-items-start overflow-hidden">

        <div className="w-full h-[160px] bg-cover lg:w-[350px] lg:h-full lg:bg-center" style={{"backgroundImage": `url(${prefix + projectMeta.thumbnail})`}} />
        <div className="h-full relative flex-grow mr-8">
          <div className="p-8 text-slate-800 grid grid-flow-row gap-2">
            <span className="text-3xl font-bold"> {decodeURI(projectMeta.name)} </span>
            <span className="text-xl"> {projectMeta.description}  </span>
            <hr className="border-gray-400/80" />
            <div>
              <span className="text-xl"> Features: </span>
              <ul className="list-disc pl-[30px] text-base font-sans">
                { projectMeta.features.map((feats: string) => <li key="key"> {feats} </li>) }
              </ul>
            </div>
            <div className="absolute bottom-[5rem] text-base gap-4 inline-flex">
              <div>
                <span className="bg-purple-600/90 text-purple-200 px-2 rounded-md font-bold"> Stack </span>
              </div>
              <span className="font-sans text-base"> { projectMeta.stack.join(', ') } </span>
            </div>
            <LinkButton className="absolute bottom-8 right-0" href={avalible ? projectMeta.projectUrl : undefined } avalible={avalible}> Source &rarr; </LinkButton>
          </div>
        </div>
        
      </motion.div>
    </ProjectDetailsBackground>
  )
}

export default ProjectDetails
