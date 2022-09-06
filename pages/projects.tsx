import { NextPage } from "next";
import Head from "next/head";
import ContentContainer from "../components/ContentContainer";
import MenuBar from "../components/MenuBar";
import Paragraph from "../components/Paragraph";
import Intro from "../components/Intro";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Projects </title>
        <meta name="Description" content="Personal and University projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar />

      <ContentContainer>
        <div className="flex flex-col gap-10">
          <Paragraph title="Personal & University Projects" className="pt-[80px]">
            This is something
          </Paragraph>
        </div>
      </ContentContainer>
    </div>
  )
}

export default Projects
