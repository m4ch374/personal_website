import { NextPage } from "next";
import Head from "next/head";
import ContentContainer from "../components/ContentContainer";
import Paragraph from "../components/Paragraph";
import LinkButton from "../components/LinkButton";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import proj from "../public/project_meta.json"
import ImagePrefix from "../helpers/ImagePrefix";
import MiniModel from "../components/MiniModel";

const Projects: NextPage = () => {
  const projectsArray = proj.personal_projects
  const uniProjectsArray = proj.university_project

  return (
    <div>
      <Head>
        <title> Projects </title>
        <meta name="Description" content="Personal and University projects" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ContentContainer className="gap-10">
        <MiniModel />

        <Paragraph title="Personal & University Projects">
          These are some of my Personal & University Projects. As much as I would love to provide the 
          source code for every project that I&apos;ve made, the university 
          won&apos;t be happy if I open sourced my university projects. Truly unfortunate :(
        </Paragraph>
        
        <LinkButton href="https://github.com/m4ch374"> Github &rarr; </LinkButton>

        <hr className="w-[70vw] lg:w-[800px] border-gray-600/80" />

        <Section>
          <span className="text-2xl"> Personal Projects </span>

          <div className="flex justify-center flex-wrap pt-3 gap-8">
            { projectsArray.map((proj: ProjectMeta) => <ProjectCard key={proj.name} projectDetail={proj} />) }
          </div>
        </Section>

        <Section>
          <span className="text-2xl"> University Projects </span>

          <div className="flex justify-center pt-3 gap-8 flex-wrap">
            { uniProjectsArray.map((proj: ProjectMeta) => <ProjectCard key={proj.name} projectDetail={proj} />) }
          </div>
        </Section>
      </ContentContainer>
    </div>
  )
}

export default Projects
export type ProjectMeta = typeof proj.personal_projects[0]
