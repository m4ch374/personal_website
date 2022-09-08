import { NextPage } from "next";
import Head from "next/head";
import ContentContainer from "../components/ContentContainer";
import Paragraph from "../components/Paragraph";
import Image from "next/image";
import LinkButton from "../components/LinkButton";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import proj from "../public/project_meta.json"

const Projects: NextPage = () => {
  const projectsArray = proj.personal_projects
  const uniProjectsArray = proj.university_project

  return (
    <div>
      <Head>
        <title> Projects </title>
        <meta name="Description" content="Personal and University projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ContentContainer className="gap-10">
        <div className="mt-[80px] relative w-[500px] h-[300px] md:h-[350px] md:w-[600px]">
          <Image src="/mountain.png" layout="fill" />
        </div>

        <Paragraph title="Personal & University Projects">
          These are my Personal & University Projects. As much as I would love to provide 
          source code for every project that I've made, I'm unable to provide code for university 
          projects as UNSW does not allow it.
        </Paragraph>
        
        <LinkButton href="https://github.com/m4ch374"> Github Page </LinkButton>

        <hr className="w-[90vw] lg:w-[900px] border-gray-600/80" />

        <Section>
          <span className="text-3xl"> Personal Projects </span>

          <div className="flex justify-center flex-wrap pt-4 gap-10">
            { projectsArray.map((proj: ProjectMeta) => <ProjectCard projectDetail={proj} />) }
          </div>
        </Section>

        <Section>
          <span className="text-3xl"> University Projects </span>

          <div className="flex justify-center pt-4 gap-10 flex-wrap">
            { uniProjectsArray.map((proj: ProjectMeta) => <ProjectCard projectDetail={proj} />) }
          </div>
        </Section>
      </ContentContainer>
    </div>
  )
}

export default Projects
export type ProjectMeta = typeof proj.personal_projects[0]
