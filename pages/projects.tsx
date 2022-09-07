import { NextPage } from "next";
import Head from "next/head";
import ContentContainer from "../components/ContentContainer";
import MenuBar from "../components/MenuBar";
import Paragraph from "../components/Paragraph";
import Image from "next/image";
import LinkButton from "../components/LinkButton";

const Projects: NextPage = () => {
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
          These are the Personal & University Projects. As much as I would love to provide 
          source code for every project that I've made, I'm unable to provide code for university 
          projects as UNSW does not allow it.
        </Paragraph>
        
        <LinkButton> Github Page </LinkButton>

        <hr className="w-[90vw] lg:w-[900px] border-gray-600/80" />
      </ContentContainer>
    </div>
  )
}

export default Projects
