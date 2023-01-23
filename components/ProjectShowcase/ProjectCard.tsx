import React, { useState } from "react";
import getPrefix from "../../helpers/getPrefix";
import { ProjectMeta } from "../../pages/projects";
import { AnimatePresence } from "framer-motion"
import ProjectDetails from "./Details/ProjectDetails";

interface IProjectCard {
  projectDetail: ProjectMeta
}

const ProjectCard: React.FC<IProjectCard> = ({projectDetail}) => {
  const [popped, setPopped] = useState(false)
  const prefix = getPrefix()

  return (
    <div className="grid grid-flow-row place-items-center w-[40vw] lg:w-[270px]">
      <div className={`hover:scale-110 
        transition-transform
        duration-[350ms]
        w-[44vw]
        aspect-[3/2]
        lg:w-full 
        bg-cover 
        bg-center
        rounded-xl 
      `}
      style={{backgroundImage: `url(${prefix + projectDetail.thumbnail})`}}
      onClick={() => setPopped(true)} />
      <span className="text-base pt-5 text-center font-sans"> 
        {projectDetail.description}
      </span>

      <AnimatePresence initial={false} mode="popLayout">
        {popped ? <ProjectDetails setPopped={setPopped} projectMeta={projectDetail} /> : undefined}
      </AnimatePresence>
    </div>
  )
}

export default ProjectCard
